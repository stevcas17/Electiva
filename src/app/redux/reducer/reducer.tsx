import * as actionTypes from '../store/actionTypes';

const initialState: EventState = {
  dataVinculationQrState: {
    status: false
  },
  dataMenu: {
    status: false,
    rendered: false // si se debe mostrar el menu o no
  },
  dataHeader: {
    status: false,
    rendered: false // si se debe mostrar el Header o no
  },
  dataSession: {
    status: false // el usuario no está logeado
  },
  dataTealium: {
    status: false,
    type: '',
    event_type: '',
    structure: {
      path_name: '',
      tealium_event: '',
      event_category: '',
      event_label: ''
    }
  },
  dataBackPBG: {
    previousRoute: window.location.origin,
    validation: false,
    stepActive: 1,
    stepActiveStatus: 'active',
    push: true,
    flow: false
  },
  dataStep: {
    status: true,
    amount: 4,
    stepActive: 1,
    stepActiveStatus: 'active'
  },
  dataError: {
    show: false,
    code: null
  },
  dataNavigation: {
    route: ''
  },
  dataShowStep: {
    status: false
  },
  dataFinishRegister: {
    status: false
  },
  dataUserImage: {
    status: false
  },
  dataVinculation: {
    status: false
  },
  dataTxReverso: {
    status: false
  },
  dataStartSocketQr: {
    status: false
  },
  dataStartSocketReversoTx: {
    status: false
  }
};
localStorage.setItem('redux-store', JSON.stringify(initialState));

const reducer = (state: EventState = initialState, action: EventAction): EventState => {
  switch (action.type) {
    case actionTypes.CHANGE_MENU:
      return {
        ...state,
        dataMenu: action.dataMenu
      };
    case actionTypes.CHANGE_HEADER:
      return {
        ...state,
        dataHeader: action.dataHeader
      };
    case actionTypes.SESSION_ACTIVE:
      return {
        ...state,
        dataSession: action.dataSession
      };
    case actionTypes.SET_TEALIUM:
      return {
        ...state,
        dataTealium: action.dataTealium
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        dataError: action.dataError
      };
    case actionTypes.CHANGE_STEP:
      return {
        ...state,
        dataStep: action.dataStep
      };
    case actionTypes.GO_BACK:
      // eslint-disable-next-line no-case-declarations
      const previousStep: IDataBackPBG = {
        previousRoute: action.dataBackPBG.previousRoute,
        validation: action.dataBackPBG.validation,
        stepActive: action.dataBackPBG.stepActive,
        stepActiveStatus: action.dataBackPBG.stepActiveStatus,
        push: action.dataBackPBG.push
      };
      return {
        ...state,
        dataBackPBG: previousStep
      };
    case actionTypes.SET_NAVIGATION:
      return {
        ...state,
        dataNavigation: action.dataNavigation
      };
    case actionTypes.SHOW_STEP:
      return {
        ...state,
        dataShowStep: action.dataShowStep
      };
    case actionTypes.FINISH_REGISTER:
      return {
        ...state,
        dataFinishRegister: action.dataFinishRegister
      };
    case actionTypes.CHANGE_USER_IMAGE:
      return {
        ...state,
        dataUserImage: action.dataUserImage
      };
    case actionTypes.QR_VINCULATION_EVENT:
      return {
        ...state,
        dataVinculation: action.dataVinculation
      };
    case actionTypes.TX_REVERSO_EVENT:
      return {
        ...state,
        dataTxReverso: action.dataTxReverso
      };
    case actionTypes.START_SOCKET_ACTIVATION_QR:
      return {
        ...state,
        dataStartSocketQr: action.dataStartSocketQr
      };
    case actionTypes.START_SOCKET_REVERSE_TX:
      return {
        ...state,
        dataStartSocketReversoTx: action.dataStartSocketReversoTx
      };
    case actionTypes.DATA_VINCULATION_QR_STATE:
      return {
        ...state,
        dataVinculationQrState: action.dataVinculationQrState
      };
  }
  return state;
};

export default reducer;
