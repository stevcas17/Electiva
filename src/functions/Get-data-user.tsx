import { getIndexeddb } from '../tools/ngforage.config';
import CryptoJS from 'crypto-js';

const GetDataUser = async () => {
  try {
    const resp = await getIndexeddb('user', 'user_info');
    return JSON.parse(CryptoJS.AES.decrypt(resp, process.env.KEY).toString(CryptoJS.enc.Utf8));
  } catch (error) {
    return false;
  }
};

export default GetDataUser;
