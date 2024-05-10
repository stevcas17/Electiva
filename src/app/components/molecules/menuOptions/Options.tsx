import React, { useState } from 'react';
import executeLogout from '../../../../functions/logout';
import Alerts from '../alerts/Alert';
import ItemMenu from '../../atoms/item-menu/Item-menu';
import './menuOptions.scss';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { images } from '../../../../utils/icons/constants';
import { Image } from '../../atoms';

const Options = ({ listOptions, location, hiddeMenuMobile = () => {}, lastLogin = null, userSessionIp = null }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const logout = () => {
    if (!loadingButton) {
      setLoadingButton(true);
      executeLogout()
        .then((res: any) => {
          if (res) {
            setLoadingButton(false);
            setShowLogoutModal(false);
          }
        })
        .catch(err => {
          setLoadingButton(false);
          console.log(err);
        });
    }
  };

  return (
    <>
      <Alerts
        message={'Sesión cerrada correctamente'}
        showModal={showLogoutModal}
        type={'SUCCESS'}
        onButtonClickFunction={() => logout()}
        showButton={true}
        showCloseButton={false}
        buttonContinueText={'Salir'}
        loadingButton={loadingButton}
        className={'container__alert-logout'}
      />
      <div className="options-menu">
        {listOptions &&
          listOptions?.map((el, i) => (
            <div key={i}>
              <ItemMenu
                logout={() => {
                  setShowLogoutModal(true);
                }}
                hiddeMenuMobile={hiddeMenuMobile}
                el={el}
                i={i}
                divisor={listOptions[i - 1] && el.group != listOptions[i - 1].group ? true : false}
                className={`options-menu__menu-item options-menu__menu-short ${
                  el.path.split('/')[2] == location ||
                  (el.optionsList && el.optionsList.some(subEl => subEl.path.split('/')[2] == location))
                    ? 'active'
                    : ''
                }`}
                location={location}
              ></ItemMenu>
            </div>
          ))}
        <div className="login-info">
          <Image alt={'popup-focus'} className={null} width={'auto'} height={'auto'} src={images.Watch} />

          {lastLogin > 0 && <div className="login-info__content--strong">Fecha último ingreso:</div>}
          {lastLogin > 0 && (
            <div className="login-info__content">
              <div className="login-info__content--capitalized">
                {format(new Date(lastLogin), 'eee dd MMM hh:mm aaaa', { locale: es })}
              </div>
            </div>
          )}
          {userSessionIp && (
            <div className="login-info__content--strong">
              IP: {userSessionIp}
              <br />
              <br />
            </div>
          )}
          <div className="login-info__content--strong">Fecha y hora actual:</div>
          <div className="login-info__content--capitalized">
            {format(new Date(), 'eee dd MMM hh:mm aaaa', { locale: es })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
