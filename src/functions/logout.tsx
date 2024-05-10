import cleanDataLogout from './clean-data-logout';
//import forceLogout from './force-logout';
import { logoutGraphql, clearAuth, forceLocalLogout } from '../app/services/Api-service';

const logout = async (redirection = true): Promise<boolean> => {
  try {
    const responseLogout = await logoutGraphql();
    console.log({ responseLogout });
    await clearAuth();
    await cleanDataLogout(redirection);
    return true;
  } catch (error) {
    await forceLocalLogout();
    cleanDataLogout(redirection);
    return false;
    //forceLogout();
  }
};

export default logout;
