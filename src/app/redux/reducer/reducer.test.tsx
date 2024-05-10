import reducer from './reducer';
import * as actionTypes from '../store/actionTypes';
import expect from 'expect';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));
describe('post reducer', () => {
  const initialState: EventState = {
    dataMenu: {
      status: false,
      rendered: false // si se debe mostrar el menu o no
    },
    dataHeader: {
      status: false,
      rendered: false // si se debe mostrar el header o no
    },
    dataSession: {
      status: false // el usuario no está logeado
    },
    dataUserImage: {
      status: false
    },
    dataTealium: {
      status: false,
      type: 'track',
      event_type: 'track',
      structure: {
        path_name: '/',
        tealium_event: 'custom_event_click',
        event_category: 'Inicio',
        event_label: 'InicioSesión'
      }
    },
    dataBackPBG: {
      previousRoute: window.location.origin + '/enrollment/inicio',
      validation: true,
      stepActive: 1,
      stepActiveStatus: 'active',
      push: true
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
    dataFinishRegister: {
      status: false
    },
    dataShowStep: {
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
    },
    dataVinculationQrState: {
      status: false
    }
  };
  it('should handle CHANGE_MENU', () => {
    const dataMenu: IDataMenu = {
      status: false,
      rendered: false
    };
    const action: EventAction = {
      type: actionTypes.CHANGE_MENU,
      dataMenu: dataMenu
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle CHANGE_HEADER', () => {
    const dataHeader: IDataHeader = {
      status: false,
      rendered: false
    };
    const action: EventAction = {
      type: actionTypes.CHANGE_HEADER,
      dataHeader: dataHeader
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle SESSION_ACTIVE', () => {
    const dataSession: IDataSession = {
      status: false
    };
    const action: EventAction = {
      type: actionTypes.SESSION_ACTIVE,
      dataSession: dataSession
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });

  it('should handle SET_TEALIUM', () => {
    const dataTealium: IDataTealium = {
      status: false,
      type: 'track',
      event_type: 'track',
      structure: {
        path_name: '/',
        tealium_event: 'custom_event_click',
        event_category: 'Inicio',
        event_label: 'InicioSesión'
      }
    };

    const action: EventAction = {
      type: actionTypes.SET_TEALIUM,
      dataTealium: dataTealium
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle OTHER ACTION', () => {
    const dataSession: IDataSession = {
      status: false
    };
    const action: EventAction = {
      type: 'error',
      dataSession: dataSession
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle CHANGE_STEP', () => {
    const dataStep: IDataStep = {
      status: true,
      amount: 4,
      stepActive: 1,
      stepActiveStatus: 'active'
    };
    const action: EventAction = {
      type: actionTypes.CHANGE_STEP,
      dataStep: dataStep
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });

  it('should handle GO_BACK', () => {
    const previousStep: IDataBackPBG = {
      flow: false,
      previousRoute: window.location.origin + '/enrollment/inicio',
      validation: true,
      stepActive: 1,
      stepActiveStatus: 'active',
      push: true
    };
    const action: EventAction = {
      type: actionTypes.GO_BACK,
      dataBackPBG: previousStep
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle SET_ERROR', () => {
    const dataError: IDataError = {
      show: false,
      code: null
    };
    const action: EventAction = {
      type: actionTypes.SET_ERROR,
      dataError: dataError
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle SET_NAVIGATION', () => {
    const dataNavigation: IDataNavigation = {
      route: ''
    };
    const action: EventAction = {
      type: actionTypes.SET_NAVIGATION,
      dataNavigation: dataNavigation
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle SHOW_STEP', () => {
    const dataShowStep: IDataShowStep = {
      status: false
    };
    const action: EventAction = {
      type: actionTypes.SHOW_STEP,
      dataShowStep: dataShowStep
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle CHANGE_USER_IMAGE', () => {
    const dataUserImage: IDataUserImage = {
      status: false
    };
    const action: EventAction = {
      type: actionTypes.CHANGE_USER_IMAGE,
      dataUserImage
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle FINISH_REGISTER', () => {
    const action: EventAction = {
      type: actionTypes.FINISH_REGISTER,
      dataFinishRegister: { status: false }
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle QR_VINCULATION_EVENT', () => {
    const action: EventAction = {
      type: actionTypes.QR_VINCULATION_EVENT,
      dataVinculation: { status: false }
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle TX_REVERSO_EVENT', () => {
    const action: EventAction = {
      type: actionTypes.TX_REVERSO_EVENT,
      dataTxReverso: { status: false }
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle START_SOCKET_ACTIVATION_QR', () => {
    const action: EventAction = {
      type: actionTypes.START_SOCKET_ACTIVATION_QR,
      dataStartSocketQr: { status: false }
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle START_SOCKET_REVERSE_TX', () => {
    const action: EventAction = {
      type: actionTypes.START_SOCKET_REVERSE_TX,
      dataStartSocketReversoTx: { status: false }
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
  it('should handle DATA_VINCULATION_QR_STATE', () => {
    const action: EventAction = {
      type: actionTypes.DATA_VINCULATION_QR_STATE,
      dataVinculationQrState: { status: false }
    };
    expect(reducer(initialState, action)).toEqual(initialState);
  });
});
