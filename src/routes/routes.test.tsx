import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { URL_PATHS } from '../utils/url-routes';
import { AppRouter } from './routes';
import { historyMock } from '../../__mocks__/fileMock.js';
import wait from 'waait';
import GlobalStoreContext from '../context/globalStoreContext';

jest.mock('../app/services/Session-socket', () => {
  return jest.fn().mockImplementation(() => {
    return { qrVinculationProgress: jest.fn(), txReverseProgress: jest.fn() };
  });
});

jest.mock('../functions/Get-data-user', () => ({
  GetDataUser: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ commerceId: 'rterwe' });
        reject('');
      }, 0);
    })
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Routes test component', () => {
  let wrapper: any;
  const history = createMemoryHistory();
  const mockStore = configureMockStore([thunk]);
  let useEffect: any;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
  });

  it('Router full settings', () => {
    const store = mockStore({
      dataMenu: {
        status: false,
        rendered: false
      },
      dataSession: {
        status: false
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
      dataStartSocketQr: {
        status: false
      },
      dataStartSocketReversoTx: {
        status: false
      }
    });

    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: jest.fn()
      })
    }));

    wrapper = mount(
      <Router history={history}>
        <AppRouter history={historyMock}></AppRouter>
      </Router>
    );

    expect(wrapper.find(AppRouter)).toBeDefined();
    const firstUrl = URL_PATHS.BUSSINNES;
    expect('/negocio').toBe(firstUrl);
  });

  it('Router other settings', () => {
    const store = mockStore({
      dataMenu: {
        status: true,
        rendered: true
      },
      dataSession: {
        status: true
      },
      dataTealium: {
        status: true,
        type: '',
        event_type: '',
        structure: {
          path_name: '',
          tealium_event: '',
          event_category: '',
          event_label: ''
        }
      },
      dataVinculation: {
        status: 100
      },
      dataStartSocketQr: {
        status: false
      },
      dataStartSocketReversoTx: {
        status: false
      }
    });

    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: jest.fn()
      })
    }));

    history.location.pathname = URL_PATHS.BUSSINNES;

    wrapper = mount(
      <Router history={history}>
        <AppRouter history={historyMock}></AppRouter>
      </Router>
    );

    expect(wrapper.find(AppRouter)).toBeDefined();
  });

  it('Router without settings', () => {
    const store = mockStore({
      dataMenu: {
        status: true,
        rendered: true
      },
      dataSession: {
        status: true
      },
      dataTealium: {
        status: true,
        type: '',
        event_type: '',
        structure: {
          path_name: '',
          tealium_event: '',
          event_category: '',
          event_label: ''
        }
      },
      dataVinculation: {
        status: 100
      },
      dataStartSocketQr: {
        status: false
      },
      dataStartSocketReversoTx: {
        status: false
      }
    });
    const historyListener = jest.fn();
    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: jest.fn(),
        listen: historyListener
      })
    }));

    delete window.location;
    window.location = {
      hash: null,
      host: null,
      hostname: null,
      href: null,
      origin: null,
      pathname: 'home',
      port: null,
      protocol: null,
      search: null,
      ancestorOrigins: null,
      assign: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn()
    };

    wrapper = mount(
      <Router history={history}>
        <AppRouter history={historyMock}></AppRouter>
      </Router>
    );

    expect(wrapper.find(AppRouter)).toBeDefined();
  });

  // it('Render router', async () => {
  //   const data = {
  //     store: {
  //       Shell: {
  //         dataMenu: {
  //           status: true
  //         },
  //         dataSession: {
  //           status: true
  //         },
  //         dataStartSocketQr: {
  //           status: true
  //         },
  //         dataStartSocketReversoTx: {
  //           status: true
  //         },
  //       }
  //     },
  //   };
  //   render(
  //     <Router history={history}>
  //       <GlobalStoreContext.Provider value={data}>
  //         <AppRouter history={historyMock}></AppRouter>
  //       </GlobalStoreContext.Provider>
  //     </Router>
  //   );
  //   await act(() => wait(0));
  //   await act(() => wait(0));
  //   await act(() => wait(0));
  //   await act(() => wait(0));

  // })
});
