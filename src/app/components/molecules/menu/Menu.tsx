import React, { useState, useEffect, useRef, useContext } from 'react';
import './Menu.scss';

import GlobalStoreContext from '../../../../context/globalStoreContext';
import { MenuMobile } from '../menuMobile/menuMobile';
import MenuDesktop from '../menuDesktop/menuDesktop';
import initialData from '../../../data/initialData';
import StepByStep from '../stepByStep/StepByStep';
import { Header } from '../../atoms';
import CryptoJS from 'crypto-js';

import { getIndexeddb, setIndexeddb } from '../../../../tools/ngforage.config';
import { getDataMenu } from '../../../../functions/Get-data-menu';
import GetDataUser from '../../../../functions/Get-data-user';
import { emitEventMF } from '../../../../functions/eventsMF';
import GetDataLastLogin from '../../../../functions/Get-data-user-last-login';

const Menu = ({ children }): JSX.Element => {
  const [headerStatus, setHeaderStatus] = useState(false);
  const [showStepByStep, setShowStep] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  const [menuOptions, setMenuOptions] = useState([]);
  const [username, setUsername] = useState(null);
  const [lastLoginDate, setLastLoginDate] = useState(null);
  const [userSessionIp, setUserSesionIp] = useState(null);
  const EventStore = useContext(GlobalStoreContext);
  const MenuMobileRef: any = useRef();
  const products = initialData;

  useEffect(() => {
    getDataSession();
  }, []);

  useEffect(() => {
    setStateRedux();
  }, [EventStore]);

  const setStateRedux = async () => {
    if (EventStore['Shell']?.dataSession?.status) {
      const encrypt = CryptoJS.AES.encrypt(
        EventStore['Shell']?.dataSession.status ? 'active' : 'inactive',
        process.env.KEY
      ).toString();
      setIndexeddb('session', 'session', encrypt);
      if (EventStore['Shell']?.dataHeader) {
        //console.log('**************Header*************', EventStore['Shell']?.dataHeader.status);
        setHeaderStatus(EventStore['Shell']?.dataHeader.status);
      }
      if (EventStore['Shell']?.dataMenu) {
        if (menuOptions.length === 0 || username === null) {
          await getUsername();
          await getLastLoginInfo();
          setMenuOptions(await getDataMenu());
        }
        setMenuStatus(EventStore['Shell']?.dataMenu.status);
      }
      if (EventStore['Shell']?.dataShowStep?.status) {
        emitEventMF('SHOW_STEP', false);
        setShowStep(true);
      }
    }
  };

  const buildMenu = async dispatch => {
    if (dispatch == 'active') {
      const subdominio = window.location.pathname.split('/');
      if (subdominio[2] !== 'login' && subdominio[2] !== 'register') {
        await getLastLoginInfo();
        const page = products.find(p => p.url == subdominio[1]);
        if (page) {
          setMenuOptions(await getDataMenu());
          getUsername();
          setMenuStatus(page.menu);
          setHeaderStatus(page.header);
        }
      }
    }
  };

  const getUsername = async () => {
    try {
      const resp = await GetDataUser();
      if (resp) setUsername(resp['firstName']);
    } catch (error) {
      console.log('cant get user getUsername');
    }
  };

  const getLastLoginInfo = async () => {
    try {
      const resp = await GetDataLastLogin();
      if (resp) {
        setLastLoginDate(resp['lastLogin']);
        setUserSesionIp(resp['lastLoginIp']);
      }
    } catch (error) {
      console.log('cant get user lastLoginData');
    }
  };

  const getDataSession = async () => {
    try {
      const resp = await getIndexeddb('session', 'session');
      if (resp) buildMenu(CryptoJS.AES.decrypt(resp, process.env.KEY).toString(CryptoJS.enc.Utf8));
    } catch (error) {
      console.log('cant get token getDataSession -> ', error);
    }
  };

  return (
    <>
      {showStepByStep ? (
        <StepByStep
          id={'step-by-step'}
          listOptions={menuOptions}
          username={username}
          onClose={() => {
            setShowStep(false);
            window.location.reload();
          }}
        />
      ) : (
        <>
          <MenuMobile
            listOptions={menuOptions}
            ref={MenuMobileRef}
            lastLogin={lastLoginDate}
            userSessionIp={userSessionIp}
          />
          {headerStatus && <Header menuStatus={menuStatus} showMenu={() => MenuMobileRef.current.openMenu()} />}
          <div className={`container-menu-shell ${menuStatus ? 'height-dashboard' : ''}`}>
            {menuStatus && (
              <MenuDesktop
                listOptions={menuOptions}
                username={username}
                lastLogin={lastLoginDate}
                userSessionIp={userSessionIp}
              />
            )}
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
