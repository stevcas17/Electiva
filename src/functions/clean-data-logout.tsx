import { dropIndexeddb } from '../tools/ngforage.config';
import { URL_PATHS } from '../utils/url-routes';
import { emitEventMF } from './eventsMF';

const cleanDataLogout = async (redirection: boolean) => {
  try {
    // console.log('entra a remover cleanDataLogout');
    emitEventMF('CHANGE_MENU', false);
    emitEventMF('CHANGE_HEADER', false);
    localStorage.removeItem('username');
    localStorage.removeItem('sessionUserImage');
    localStorage.removeItem('tokens');
    localStorage.removeItem('_user');
    localStorage.removeItem('user_info');
    localStorage.removeItem('redux-store');
    localStorage.removeItem('flow-vinculation');
    await dropIndexeddb('session');
    await dropIndexeddb('user');
    await dropIndexeddb('commerce');
    await dropIndexeddb('productBond');
    await dropIndexeddb('menu');
    await dropIndexeddb('reportsDashboard');
    await dropIndexeddb('accountSelection');
    await dropIndexeddb('global');
    // console.log('debe enviar al logout');
    if (redirection) window.location.replace(window.location.origin + URL_PATHS.PORTAL_LOGIN);
  } catch (e) {
    console.log('ERRORRRR cleanDataLogout: ', e);
  }
};

export default cleanDataLogout;
