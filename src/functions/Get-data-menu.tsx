import { getIndexeddb } from '../tools/ngforage.config';
import { decodeToken } from 'react-jwt';
import forceLogout from './force-logout';

export const getDataMenu = async () => {
  try {
    const JWT = await getIndexeddb('menu', 'menu');
    const menu: any = decodeToken(JWT);
    if (menu) {
      menu.body.push({
        idOptions: null,
        name: 'logout',
        path: 'logout',
        group: null,
        icon: 'Logout',
        optionsList: null,
        order: null
      });
      return menu.body;
    } else {
      forceLogout();
      return false;
    }
  } catch (error) {
    console.log('Error getting menu from index db -> ', error);
    forceLogout();
  }
};
