import CryptoJS from 'crypto-js';
import { getIndexeddb } from '../tools/ngforage.config';
import forceLogout from './force-logout';

/**
 * Function to get commerce information from Indexeddb
 *
 * @returns commerce information
 */
const GetDataLastLogin = async () => {
  try {
    const resp = await getIndexeddb('session', 'token');
    return JSON.parse(resp);
  } catch (error) {
    console.log('no se pudo recuperar la info del comercio');
    forceLogout();
  }
};

export default GetDataLastLogin;
