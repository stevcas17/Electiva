import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import Icon from '@mdi/react';
import Options from '../menuOptions/Options';
import { Image } from '../../atoms';
import { images, icons } from '../../../../utils/icons/constants';
import './menuMobile.scss';

export const MenuMobile = forwardRef(
  ({ listOptions, lastLogin, userSessionIp }: { listOptions: any; lastLogin: number; userSessionIp: string }, ref) => {
    const ANIMATION_MENU_DURATION = 500;

    const [Play, setPlay] = useState(false);
    const [ShowMenu, setShowMenu] = useState(false);

    useEffect(() => {
      menu();
    }, [window.location.pathname]);

    useImperativeHandle(ref, () => ({
      openMenu() {
        setPlay(true);
        setShowMenu(true);
      }
    }));

    const menu = () => {
      setPlay(false);
      setTimeout(() => setShowMenu(false), ANIMATION_MENU_DURATION);
    };

    return (
      ShowMenu && (
        <div className="hamburguer-menu-container">
          <div className={`hamburguer-menu-container__menu ${Play ? 'slide-right' : 'slide-left'} `}>
            <div className="hamburguer-menu-container__menu-close" onClick={() => menu()}>
              <Icon size={0.9} path={icons.mdiClose} />
            </div>
            <div className="hamburguer-menu-container__menu-logo">
              <Image className={'Logo'} alt="logp" src={images.LogoBlue} width={72} height="auto" />
            </div>
            <Options
              listOptions={listOptions}
              location={window.location.pathname.split('/')[2]}
              hiddeMenuMobile={() => menu()}
              lastLogin={lastLogin}
              userSessionIp={userSessionIp}
            />
          </div>
        </div>
      )
    );
  }
);
