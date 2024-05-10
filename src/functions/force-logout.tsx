//import React from 'react'
import { forceLocalLogout } from '../app/services/Api-service';
import cleanDataLogout from './clean-data-logout';
import { emitEventMF } from './eventsMF';

const forceLogout = async () => {
  try {
    const responseLogout = await forceLocalLogout();
    console.log({ responseLogout });
    emitEventMF('CHANGE_MENU', false);
    emitEventMF('CHANGE_HEADER', false);
    cleanDataLogout(true);
  } catch (error) {
    // console.log('ERROR sesion cerrada forceLogout');
  }
};

export default forceLogout;
