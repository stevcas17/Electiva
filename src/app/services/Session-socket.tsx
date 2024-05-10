import CryptoJS from 'crypto-js';
import { emitEventMF } from '../../functions/eventsMF';
import { getIndexeddb, getTokensIndexDB, setIndexeddb } from '../../tools/ngforage.config';
import {
  successTxReverseValues,
  successVinculationQrValues,
  errorVinculationQrValues,
  errorTxReverseValues
} from '../../utils/constants';

import { getStateVinculationQr, getStateGenerationQr, getStateTxReversing, startGenerationQR } from './Api-service';

import { GET_STATE_QR_VINCULATION, GET_STATE_TRANSACTION_REVERSING } from '../graphQl/Subscriptions';
import GetDataUser from '../../functions/Get-data-user';
import { encryptMessage } from '../../functions/commons';

export interface IStatusReversingTransactionId {
  data: {
    data: {
      getStateTxReversing: {
        idCommerce: string;
        clientTransactionId: string;
        status: string;
        updateDate: number;
        value: string;
        motive: string;
      };
    };
  };
}

export default class SessionSocketServices {
  REQUEST_PHYSIC_QR_SUCCESS = 19;
  apiPortal = process.env.API_URL;
  apiPortalKey = process.env.APPSYNC_HEADER_APIKEY;
  apiPortalWs = process.env.WS_URL;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  private getSocket = () => {
    const wsProtocol = 'graphql-ws';
    const authHeader = {
      host: this.apiPortal.substring(8),
      'x-api-key': this.apiPortalKey
    };
    const wordArray = CryptoJS.enc.Utf8.parse(JSON.stringify(authHeader));
    const authCipher = CryptoJS.enc.Base64.stringify(wordArray);
    const wsUrl = `${this.apiPortalWs}?header=${authCipher}&payload=e30=`;
    const socket = new WebSocket(wsUrl, wsProtocol);
    return socket;
  };

  private getStages = (successStates: Record<string, any>): Record<string, any> => {
    const TOTAL_PROGRESS = 100;
    const TOTAL_SUCCESS_STATES = Object.keys(successStates).length;
    const totalStages = TOTAL_PROGRESS / TOTAL_SUCCESS_STATES;
    const successProgressValues = {};
    Object.values(successStates).forEach((element, index) => {
      successProgressValues[element] = totalStages * (index + 1);
    });
    return successProgressValues;
  };

  private startSocket = socket => {
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'connection_init' }));
    };
  };

  private subscribeToSocket = async ({
    socket,
    subscriptionName,
    graphQLSubscriptionQuery,
    arraySuccessStates,
    reduxEventName,
    graphQLStatusParameterName,
    pathToNotExecuteCallback,
    arrayErrorStates,
    callback
  }) => {
    const dataIdb = await getIndexeddb('session', 'token');
    const idMachine = JSON.parse(localStorage.getItem('id'));
    const sub = dataIdb && JSON.parse(dataIdb).sub;
    socket.onmessage = event => {
      const wsData = JSON.parse(event.data);
      //console.log('Message from server ', event.data);
      if (wsData.type == 'connection_ack') {
        socket.send(
          JSON.stringify({
            id: idMachine,
            payload: {
              data: JSON.stringify({
                query: graphQLSubscriptionQuery,
                variables: {
                  sub: sub
                }
              }),
              extensions: {
                authorization: {
                  'x-api-key': this.apiPortalKey,
                  host: this.apiPortal?.substring(8)
                }
              }
            },
            type: 'start'
          })
        );
      }
      if (wsData.type == 'data') {
        callback({ socketInit: true });
        const authStatus = wsData.payload.data[subscriptionName].states.auth;
        if (
          (authStatus.isValidUser && authStatus.status) ||
          window.location.pathname == '/enrollment/registro-aval/otp'
        ) {
          const FINISH_PROGRESS = 100;
          const statusValueEmited = authStatus[graphQLStatusParameterName];
          console.log(`status returned from websocket at ${new Date()}: `, statusValueEmited);
          const errorState = Object.values(arrayErrorStates).includes(statusValueEmited);
          if (arraySuccessStates[statusValueEmited] == FINISH_PROGRESS) {
            console.log('clossing socket ...');
            socket.send(JSON.stringify({ type: 'stop', id: JSON.parse(localStorage.getItem('id')) }));
            socket.close(1000, '');
          }
          emitEventMF(
            reduxEventName,
            arraySuccessStates[statusValueEmited] || (errorState ? 'error,' + statusValueEmited : false)
          );
        }
      }
    };
  };

  requestGetStateReversingTx = async commerceID => {
    try {
      const sessionData = await getIndexeddb('session', 'token');
      const reversingLastDate = await getIndexeddb('global', 'reversingLastDate');
      if (sessionData) {
        //console.log('ENTRO A GETSTATEREVERSINGTX 4 OK');
        console.log('commerceID', commerceID);
        const responseStateReversingTx: IStatusReversingTransactionId = await getStateTxReversing(commerceID);
        const resultStateReversing = responseStateReversingTx?.data?.data?.getStateTxReversing;
        console.log({ responseStateVinculation: responseStateReversingTx });
        const successReversingTxValues = this.getStages(successTxReverseValues);
        const currentStatusOfReversing = successReversingTxValues[resultStateReversing.status];
        const errorState = Object.values(errorTxReverseValues).includes(resultStateReversing.status);
        setIndexeddb('global', 'reversingCurrentDate', resultStateReversing.updateDate);
        const isReceivedDateDiffentFromLastDate =
          reversingLastDate && reversingLastDate === resultStateReversing.updateDate ? false : true;
        //Se emite false cuando no existe reverso en progreso, o el estado no esta mapeado en el objeto de estado
        const dataToStartSocket =
          currentStatusOfReversing || (errorState && isReceivedDateDiffentFromLastDate ? 'error' : false);
        if (currentStatusOfReversing) {
          this.txReverseProgress(socket => {
            //TODO DETENER SOCKET CUANDO RETORNE ERROR O FINALICE
          });
        } else {
          console.log('NO INICIA SOCKET REVERSING QR');
        }
        emitEventMF('TX_REVERSO_EVENT', dataToStartSocket);
      }
    } catch (e) {
      console.log(e);
    }
  };

  restartQueueGenerationQr = async bankId => {
    const userInfo = await GetDataUser();
    const tokens = await getTokensIndexDB();
    const ip = await getIndexeddb('session', 'user-ip');
    //TODO CALL NEW SERVICE
    const documentEncrypted = encryptMessage(userInfo.numberDocument);
    const bodyData = {
      documentNumber: encodeURIComponent(documentEncrypted),
      documentType: userInfo.typeDocument,
      idCommerce: userInfo.commerceId,
      idtoken: encodeURIComponent(tokens.idToken),
      accessToken: encodeURIComponent(tokens.accessToken),
      bankId,
      ipAddress: ip,
      sub: tokens.sub
    };
    const responseServiceQr = await startGenerationQR(bodyData);
    console.log({ bodyData });
    console.log({ responseServiceQr });
  };

  continueProcess = async (resultStatusVinculation, resultStatusGeneration) => {
    //se valida si la ultima alerta ya fue vista
    const QRStatusVinculationCurrentDate = await getIndexeddb('global', 'QRStatusVinculationCurrentDate');
    const QRStatusGenerationCurrentDate = await getIndexeddb('global', 'QRStatusGenerationCurrentDate');
    const QRStatusVinculationLastDate = await getIndexeddb('global', 'QRStatusVinculationLastDate');
    const QRStatusGenerationLastDate = await getIndexeddb('global', 'QRStatusGenerationLastDate');

    const lastShowVinculation =
      QRStatusVinculationLastDate && QRStatusVinculationLastDate === QRStatusVinculationCurrentDate ? false : true;
    const lastShowGeneration =
      QRStatusGenerationLastDate && QRStatusGenerationLastDate === QRStatusGenerationCurrentDate ? false : true;

    const PUT_GENERATION_PRE_SIGNED_URL = '17';
    const GET_GENERATION_PRE_SIGNED_URL = '18';
    const FINISH_PROGRESS = 100;

    const successActivationProgressValues = this.getStages(successVinculationQrValues);
    let currentStatusOfVinculation;
    if (
      resultStatusGeneration == GET_GENERATION_PRE_SIGNED_URL ||
      resultStatusGeneration == PUT_GENERATION_PRE_SIGNED_URL ||
      successActivationProgressValues[resultStatusGeneration]
    ) {
      if (
        resultStatusGeneration == GET_GENERATION_PRE_SIGNED_URL ||
        resultStatusGeneration == PUT_GENERATION_PRE_SIGNED_URL
      ) {
        currentStatusOfVinculation = FINISH_PROGRESS;
      } else {
        currentStatusOfVinculation = successActivationProgressValues[resultStatusGeneration];
      }
    } else {
      currentStatusOfVinculation = successActivationProgressValues[resultStatusVinculation];
    }
    const errorState =
      Object.values(errorVinculationQrValues).includes(resultStatusVinculation) ||
      Object.values(errorVinculationQrValues).includes(resultStatusGeneration);
    //Se emite false cuando no existe vinculacion en progreso, o el estado no esta mapeado en el objeto de estado
    const dataToStartSocket =
      currentStatusOfVinculation ||
      (errorState && (lastShowVinculation || lastShowGeneration) ? 'error,' + resultStatusVinculation : false);
    if (currentStatusOfVinculation && currentStatusOfVinculation < 100) {
      console.log('INICIA SOCKET');
      this.qrVinculationProgress(socket => {
        // POSIBLE CALLBACK DELETE
        //   socket.send(JSON.stringify({ type: 'stop', id: JSON.parse(localStorage.getItem('id')) }));
        //   socket.close(1000, '');
        // })
      });
    } else {
      console.log('NO INICIA SOCKET VINCULATION QR');
    }
    console.log('EMITE SOCKET ESTADO: ', dataToStartSocket);
    emitEventMF('QR_VINCULATION_EVENT', dataToStartSocket);
  };

  requestGetStateVinculationQr = async commerceID => {
    let resultStatusVinculation;

    try {
      const sessionData = await getIndexeddb('session', 'token');
      if (sessionData) {
        console.log('ENTRO A GETSTATEREVERSINGTX 4 OK');
        console.log('commerceID', commerceID);

        let resultStatusGeneration;

        const responseStateVinculation = await getStateVinculationQr(commerceID);
        resultStatusVinculation = responseStateVinculation?.data?.data?.getStateVinculationQr?.status;
        await setIndexeddb(
          'global',
          'QRStatusVinculationCurrentDate',
          responseStateVinculation?.data?.data?.getStateVinculationQr?.updateDate
        );
        emitEventMF('DATA_VINCULATION_QR_STATE', resultStatusVinculation);
        if (resultStatusVinculation && Number(resultStatusVinculation) >= 6) {
          if (Number(resultStatusVinculation) == this.REQUEST_PHYSIC_QR_SUCCESS)
            await setIndexeddb('global', 'QRPhysicRequestState', true);
          const responseStateGeneration = await getStateGenerationQr(commerceID);
          console.log('response => ', { responseStateGeneration });
          resultStatusGeneration = responseStateGeneration?.data?.data?.getStateGenerationQr?.status;
          await setIndexeddb(
            'global',
            'QRStatusGenerationCurrentDate',
            responseStateGeneration?.data?.data?.getStateGenerationQr?.updateDate
          );
          if (resultStatusGeneration == errorVinculationQrValues.QR_GENERATION_ERROR_RESPONSE_TRACE) {
            const bankId = responseStateGeneration?.data?.data?.getStateGenerationQr?.bankId;
            this.restartQueueGenerationQr(bankId);
          }
        }
        this.continueProcess(resultStatusVinculation, resultStatusGeneration);
      }
    } catch (e) {
      console.log(e);
      if (e.path && e.path[0] == 'getStateGenerationQr' && e.errorInfo?.statusCode == '02') {
        this.continueProcess(resultStatusVinculation, null);
      }
    }
  };

  qrVinculationProgress = async callback => {
    const successActivationProgressValues = this.getStages(successVinculationQrValues);
    const socket = this.getSocket();
    this.startSocket(socket);
    await this.subscribeToSocket({
      socket,
      subscriptionName: 'getStateQrVinculation',
      graphQLSubscriptionQuery: GET_STATE_QR_VINCULATION,
      graphQLStatusParameterName: 'qrStatusActivation',
      arraySuccessStates: successActivationProgressValues,
      reduxEventName: 'QR_VINCULATION_EVENT',
      pathToNotExecuteCallback: 'qr',
      arrayErrorStates: errorVinculationQrValues,
      callback
    });
  };

  txReverseProgress = async callback => {
    const successTxReversoProgressValues = this.getStages(successTxReverseValues);
    const socket = this.getSocket();
    this.startSocket(socket);
    await this.subscribeToSocket({
      socket,
      subscriptionName: 'getStateTransactionReversing',
      graphQLSubscriptionQuery: GET_STATE_TRANSACTION_REVERSING,
      graphQLStatusParameterName: 'transactionReversingStatus',
      arraySuccessStates: successTxReversoProgressValues,
      reduxEventName: 'TX_REVERSO_EVENT',
      pathToNotExecuteCallback: 'reversetx',
      arrayErrorStates: errorTxReverseValues,
      callback
    });
  };
}
