import { images } from '../../../../../utils/icons/constants';
import { useTranslation } from 'react-i18next';
import Options from '../options/Options';
import { Image } from '../../image/Image';
import React from 'react';
import './Menu.scss';

const Menu = ({
  username,
  listOptions,
  location
}: {
  username: string;
  listOptions: any;
  location: string;
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="menu-step">
      <div className="menu-step__logo">
        <Image className={'Logo'} alt="logo" src={images.LogoBlue} width={72} height="auto" />
      </div>
      <div className="menu-step__greeting">{t('DashboardLayout.menu.greetings')}</div>
      <div className="menu-step__user-info">
        <img alt="User image" className="menu-step__user-info-user-photo" src={images.Avatar} />
        <span className="menu-step__user-info-user-name">{username}</span>
      </div>
      <div className="menu-step__nav-hr"></div>
      <Options listOptions={listOptions} location={location} />
    </div>
  );
};

export default Menu;
