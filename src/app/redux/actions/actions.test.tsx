import { URL_PATHS } from '../../../utils/url-routes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  goBackStep,
  goChangeStep,
  goChangeMenu,
  goSessionActive,
  goSetTealium,
  goChangeHeader,
  goSetNavigation,
  goSetError,
  goShowStep,
  goFinishRegister,
  goUserImage,
  goSetVinculation,
  goSetTxReverso,
  goSetStartSocketActivationQr,
  goSetStartSocketReversoTx,
  goSetDataVinculatioQrState
} from './actions';

const mockStore = configureMockStore([thunk]);

describe('User Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dataMenu: {
        status: true // si se debe mostrar el menu o no
      },
      dataHeader: {
        status: true // si se debe mostrar el Header o no
      },
      dataSession: {
        status: true // si se debe mostrar el menu o no
      },
      dataUserImage: {
        status: true // si se debe actualizar la imagen del usuario
      },
      dataTealium: {
        status: true,
        type: 'track',
        structure: {
          tealium_event: 'custom_event_click',
          event_category: 'Inicio',
          event_label: 'InicioSesión'
        }
      },
      dataFinishRegister: {
        status: true
      },
      dataStartSocketReversoTx: {
        status: true
      },
      dataStartSocketQr: {
        status: true
      },
      dataVinculationQrState: {
        status: true
      }
    });
  });

  it('dispatch CHANGE_MENU action', async () => {
    try {
      await store.dispatch(goChangeMenu(store.dataMenu));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('CHANGE_MENU');
    }
  });
  it('dispatch CHANGE_HEADER action', async () => {
    try {
      await store.dispatch(goChangeHeader(store.dataHeader));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('CHANGE_HEADER');
    }
  });
  it('dispatch SESSION_ACTIVE action', async () => {
    try {
      await store.dispatch(goSessionActive(store.dataSession));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('SESSION_ACTIVE');
    }
  });
  it('dispatch SET_TEALIUM action', async () => {
    try {
      await store.dispatch(goSetTealium(store.dataTealium));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('SESSION_ACTIVE');
    }
  });
  it('dispatch GO_BACK action', async () => {
    try {
      await store.dispatch(goBackStep(store.step));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('GO_BACK');
    }
  });

  it('dispatch CHANGE_STEP action', async () => {
    try {
      await store.dispatch(goChangeStep(store.changeStep));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('CHANGE_STEP');
    }
  });
  it('dispatch SET_ERROR action', async () => {
    try {
      await store.dispatch(goSetError(store.dataError));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('SET_ERROR');
    }
  });
  it('dispatch SET_NAVIGATION action', async () => {
    try {
      await store.dispatch(goSetNavigation(store.dataNavigation));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('SET_NAVIGATION');
    }
  });
  it('dispatch SHOW_STEP action', async () => {
    try {
      await store.dispatch(goShowStep(store.dataShowStep));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('SHOW_STEP');
    }
  });
  it('dispatch CHANGE_USER_IMAGE action', async () => {
    try {
      await store.dispatch(goUserImage(store.dataUserImage));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('CHANGE_USER_IMAGE');
    }
  });
  it('dispatch FINISH_REGISTER action', async () => {
    try {
      await store.dispatch(goFinishRegister(store.dataFinishRegister));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('FINISH_REGISTER');
    }
  });
  it('dispatch QR_VINCULATION_EVENT action', async () => {
    try {
      await store.dispatch(goSetVinculation(store.dataVinculation));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('QR_VINCULATION_EVENT');
    }
  });
  it('dispatch TX_REVERSO_EVENT action', async () => {
    try {
      await store.dispatch(goSetTxReverso(store.dataTxReverso));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('TX_REVERSO_EVENT');
    }
  });
  it('dispatch START_SOCKET_REVERSE_TX action', async () => {
    try {
      await store.dispatch(goSetStartSocketReversoTx(store.dataStartSocketReversoTx));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('START_SOCKET_REVERSE_TX');
    }
  });
  it('dispatch START_SOCKET_ACTIVATION_QR action', async () => {
    try {
      await store.dispatch(goSetStartSocketActivationQr(store.dataStartSocketQr));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('START_SOCKET_ACTIVATION_QR');
    }
  });
  it('dispatch DATA_VINCULATION_QR_STATE action', async () => {
    try {
      await store.dispatch(goSetDataVinculatioQrState(store.dataVinculationQrState));
    } catch {
      const actions = store.getActions();
      expect.assertions(1);
      expect(actions[0].type).toEqual('DATA_VINCULATION_QR_STATE');
    }
  });
});
