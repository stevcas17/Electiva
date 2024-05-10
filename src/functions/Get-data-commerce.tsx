import CryptoJS from 'crypto-js';
import { getIndexeddb } from '../tools/ngforage.config';
import forceLogout from './force-logout';

/**
 * Function to get commerce information from Indexeddb
 *
 * @returns commerce information
 */
const getDataCommerce = async () => {
  try {
    const resp = await getIndexeddb('commerce', 'commerce_info');
    return JSON.parse(CryptoJS.AES.decrypt(resp, process.env.KEY).toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.log('no se pudo recuperar la info del comercio');
    forceLogout();
  }
};

export default getDataCommerce;
