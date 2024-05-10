import * as actionTypes from '../store/actionTypes';

export function goChangeMenu(dataMenu: IDataMenu) {
  const action: EventAction = {
    type: actionTypes.CHANGE_MENU,
    dataMenu
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
export function goChangeHeader(dataHeader: IDataHeader) {
  const action: EventAction = {
    type: actionTypes.CHANGE_HEADER,
    dataHeader
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
export function goSessionActive(dataSession: IDataSession) {
  const action: EventAction = {
    type: actionTypes.SESSION_ACTIVE,
    dataSession
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
export function goSetTealium(dataTealium: IDataTealium) {
  const action: EventAction = {
    type: actionTypes.SET_TEALIUM,
    dataTealium
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
export function goChangeStep(dataStep: IDataStep) {
  const action: EventAction = {
    type: actionTypes.CHANGE_STEP,
    dataStep
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
/**
 * Function to manage the go back in the Stepper
 *
 * @param dataBackPBG state of the Stepper
 * @returns dispatcher to go back the Stepper
 */
export function goBackStep(dataBackPBG: IDataBackPBG) {
  const action: EventAction = {
    type: actionTypes.GO_BACK,
    dataBackPBG
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

/**
 * Function to manage the Modal Error
 *
 * @param dataError state of data Modal
 * @returns dispatcher to Modal Error
 */
export function goSetError(dataError: IDataError) {
  const action: EventAction = {
    type: actionTypes.SET_ERROR,
    dataError
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

/**
 * Function to manage the Modal Error
 *
 * @param dataNavigation state of data Modal
 * @returns dispatcher to Modal Error
 */
export function goSetNavigation(dataNavigation: IDataNavigation) {
  const action: EventAction = {
    type: actionTypes.SET_NAVIGATION,
    dataNavigation
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
/**
 * Function to show step by step
 *
 * @param dataShowStep state of data Modal
 * @returns dispatcher to popup step by step
 */
export function goShowStep(dataShowStep: IDataShowStep) {
  const action: EventAction = {
    type: actionTypes.SHOW_STEP,
    dataShowStep
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
export function goFinishRegister(dataFinishRegister: IDataFinishRegister) {
  const action: EventAction = {
    type: actionTypes.FINISH_REGISTER,
    dataFinishRegister
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
export function goUserImage(dataUserImage: IDataUserImage) {
  const action: EventAction = {
    type: actionTypes.CHANGE_USER_IMAGE,
    dataUserImage
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
export function goSetVinculation(dataVinculation: IDataVinculation) {
  const action: EventAction = {
    type: actionTypes.QR_VINCULATION_EVENT,
    dataVinculation
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
export function goSetTxReverso(dataTxReverso: IDataTxReverso) {
  const action: EventAction = {
    type: actionTypes.TX_REVERSO_EVENT,
    dataTxReverso
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
export function goSetStartSocketActivationQr(dataStartSocketQr: IDataStartSocketQr) {
  const action: EventAction = {
    type: actionTypes.START_SOCKET_ACTIVATION_QR,
    dataStartSocketQr
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function goSetStartSocketReversoTx(dataStartSocketReversoTx: IDataStartSocketReversoTx) {
  const action: EventAction = {
    type: actionTypes.START_SOCKET_REVERSE_TX,
    dataStartSocketReversoTx
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function goSetDataVinculatioQrState(dataVinculationQrState?: IDataVinculationQrState) {
  const action: EventAction = {
    type: actionTypes.DATA_VINCULATION_QR_STATE,
    dataVinculationQrState
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
