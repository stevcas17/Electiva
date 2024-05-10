import { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';
import { AppRouter } from './routes/routes';
import './assets/i18next';
import Menu from './app/components/molecules/menu/Menu';
import { GlobalStore } from 'redux-micro-frontend';
import { createStore } from 'redux';
import reducer from './app/redux/reducer/reducer';
import GlobalStoreContext from './context/globalStoreContext';
import executeLogout from './functions/logout';

const history: History = createBrowserHistory();

export default (): JSX.Element => {
  const globalStore = GlobalStore.Get();
  const [store, setStore] = useState(globalStore);

  /* Create redux store */
  const appStore = createStore(reducer);
  globalStore.RegisterStore('Shell', appStore);
  globalStore.RegisterGlobalActions('Shell', [
    'CHANGE_MENU',
    'SESSION_ACTIVE',
    'SET_TEALIUM',
    'CHANGE_HEADER',
    'SET_NAVIGATION',
    'SHOW_STEP',
    'CHANGE_USER_IMAGE',
    'START_SOCKET_ACTIVATION_QR',
    'START_SOCKET_REVERSE_TX'
  ]);

  /* Tealium library added to headers */
  useEffect(() => {
    const tealium = document.createElement('script');
    const tealium_sync = document.createElement('script');
    const recaptcha_portal = document.createElement('script');
    const recaptcha_link = document.createElement('script');

    tealium.src = process.env.UTAG_URL;
    tealium_sync.src = process.env.UTAG_SYNC_URL;

    recaptcha_portal.type = 'text/javascript';
    recaptcha_portal.src = `${process.env.RECAPTCHA_URL}${process.env.SITE_KEY_PORTAL}`;

    recaptcha_link.type = 'text/javascript';
    recaptcha_link.src = `${process.env.RECAPTCHA_URL}${process.env.SITE_KEY_LINK}`;

    tealium.async = true;
    tealium_sync.async = true;

    document.head.appendChild(tealium);
    document.head.appendChild(tealium_sync);
    document.body.appendChild(recaptcha_portal);
    document.body.appendChild(recaptcha_link);

    return () => {
      document.head.removeChild(tealium);
      document.head.removeChild(tealium_sync);
      document.body.removeChild(recaptcha_portal);
      document.body.removeChild(recaptcha_link);
    };
  }, []);

  useEffect(() => {
    const unloadCallback = event => {
      executeLogout(false);
      event.preventDefault();
      event.returnValue = '';
      return '';
    };

    window.addEventListener('onbeforeunload', unloadCallback, false);

    return () => {
      window.removeEventListener('onbeforeunload', unloadCallback);
    };
  }, []);

  if (process.env.ENABLE_CONSOLE_LOGS === 'false') {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }

  globalStore.SubscribeToGlobalState('Shell', gbStore => setStore(gbStore));

  return (
    <Router history={history}>
      <GlobalStoreContext.Provider value={store}>
        <Menu>
          <AppRouter history={history}></AppRouter>
        </Menu>
      </GlobalStoreContext.Provider>
    </Router>
  );
};
