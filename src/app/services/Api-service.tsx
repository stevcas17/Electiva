import { httpClientApiServ, httpClientApiRefreshTokenServ, httpClientApiServPub } from './Axios-config';
import { getIdReCaptchaByEvent } from '../../functions/commons';
import { getIndexeddb } from '../../tools/ngforage.config';
import {
  LOGOUT_MUTATION,
  REFRESH_TOKEN_MUTATION,
  CLEAR_AUTH_MUTATION,
  LOGOFF_MUTATION,
  START_GENERATION_MUTATION
} from '../graphQl/Mutations';

import {
  GET_STATE_VINCULATION_QR,
  GET_STATE_GENERATION_QR,
  GET_STATE_TX_REVERSING,
  GET_CLIENT_VALIDATION
} from '../graphQl/Queries';

const endpointGraph = '/graphql';

export interface IQRGenerationInput {
  ipAddress: string;
  sub: string;
  documentNumber: string;
  documentType: string;
  idCommerce: string;
  idtoken: string;
  accessToken: string;
  bankId: string;
}

export const refreshToken = async (body: any) => {
  const bodyFinal = {
    operationName: 'refreshToken',
    query: REFRESH_TOKEN_MUTATION,
    variables: {
      input: body
    }
  };
  return httpClientApiRefreshTokenServ.post(endpointGraph, bodyFinal /*, headers*/);
};

export const logoutGraphql = async () => {
  const bodyFinal = {
    operationName: 'logOut',
    query: LOGOUT_MUTATION,
    variables: {
      id: JSON.parse(localStorage.getItem('id'))
    }
  };
  // const headers = {
  //   headers: {
  //     testHeader:"test"
  //   }
  // };
  return httpClientApiServ.post(endpointGraph, bodyFinal /*, headers*/);
};

export const clearAuth = async () => {
  const bodyFinal = {
    operationName: 'clearAuth',
    query: CLEAR_AUTH_MUTATION,
    variables: {
      id: JSON.parse(localStorage.getItem('id'))
    }
  };
  // const headers = {
  //   headers: {
  //     testHeader:"test"
  //   }
  // };
  return httpClientApiServ.post(endpointGraph, bodyFinal /*, headers*/);
};

export const forceLocalLogout = async () => {
  const username = await getIndexeddb('session', 'username');
  const bodyFinal = {
    operationName: 'forceLocalLogOut',
    query: LOGOFF_MUTATION,
    variables: {
      id: JSON.parse(localStorage.getItem('id')),
      username: username
    }
  };
  const headers = {
    headers: {
      authorizationToken: await getIdReCaptchaByEvent(),
      source: 'shell',
      clientid: process.env.COGNITO_CLIENTID
    }
  };
  return httpClientApiServ.post(endpointGraph, bodyFinal, headers);
};

export const getStateVinculationQr = async commerceID => {
  const bodyFinal = {
    operationName: 'getStateVinculationQr',
    query: GET_STATE_VINCULATION_QR
  };
  const headers = {
    headers: {
      idcommerce: commerceID,
      source: 'shell',
      clientid: process.env.COGNITO_CLIENTID
    }
  };
  return httpClientApiServ.post(endpointGraph, bodyFinal, headers);
};

export const getStateGenerationQr = async commerceID => {
  const bodyFinal = {
    operationName: 'getStateGenerationQr',
    query: GET_STATE_GENERATION_QR
  };
  const headers = {
    headers: {
      idcommerce: commerceID,
      source: 'shell',
      clientid: process.env.COGNITO_CLIENTID
    }
  };
  return httpClientApiServ.post(endpointGraph, bodyFinal, headers);
};

export const getStateTxReversing = async commerceID => {
  const bodyFinal = {
    operationName: 'getStateTxReversing',
    query: GET_STATE_TX_REVERSING
  };
  const headers = {
    headers: {
      idcommerce: commerceID,
      source: 'shell',
      clientid: process.env.COGNITO_CLIENTID
    }
  };
  return httpClientApiServ.post(endpointGraph, bodyFinal, headers);
};

export const getAccountQrValidation = async (body: any) => {
  const bodyFinal = {
    operationName: 'getAccountQrValidation',
    query: GET_CLIENT_VALIDATION,
    variables: {
      input: body
    }
  };
  return httpClientApiServPub.post(endpointGraph, bodyFinal);
};

export const startGenerationQR = async (body: IQRGenerationInput) => {
  // const { authorization, idtoken } = await checkToken();
  // const { sessionid, ipaddress } = await getHeadersId();
  const bodyFinal = {
    operationName: 'startQRGeneration',
    query: START_GENERATION_MUTATION,
    variables: {
      id: JSON.parse(localStorage.getItem('id')),
      input: body
    }
  };
  // const headers = {
  //   headers: {
  //     testHeader:"test"
  //   }
  // };

  return httpClientApiServ.post(endpointGraph, bodyFinal /*, headers*/);
};
