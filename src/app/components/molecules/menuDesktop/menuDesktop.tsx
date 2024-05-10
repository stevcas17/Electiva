import React from 'react';
import { images } from '../../../../utils/icons/constants';
import { useTranslation } from 'react-i18next';
import Options from '../menuOptions/Options';
import './menuDesktop.scss';
import { getIndexeddb } from '../../../../tools/ngforage.config';
import GlobalStoreContext from '../../../../context/globalStoreContext';
import { emitEventMF } from '../../../../functions/eventsMF';

const MenuDesktop = ({
  username,
  lastLogin,
  listOptions,
  userSessionIp
}: {
  username: string;
  lastLogin: number;
  listOptions: any;
  userSessionIp: any;
}): JSX.Element => {
  const { t } = useTranslation();
  const [userImg, setUserImg] = React.useState(null);
  const EventStore = React.useContext(GlobalStoreContext);

  React.useEffect(() => {
    if (!userImg) {
      setUserImg(images.Avatar);
      getIndexeddb('session', 'sessionUserImage').then(data => {
        if (data) {
          setUserImg(data);
        }
      });
    }
  }, [userImg]);

  React.useEffect(() => {
    if (EventStore['Shell']?.dataUserImage.status) {
      setUserImg(images.Avatar);
      getIndexeddb('session', 'sessionUserImage').then(data => {
        if (data) {
          setUserImg(data);
        }
        emitEventMF('CHANGE_USER_IMAGE', false);
      });
    }
  }, [EventStore]);

  return (
    <nav className="menu-desktop">
      <div className="menu-desktop__greeting">{t('DashboardLayout.menu.greetings')}</div>
      <div className="menu-desktop__user-info">
        <img alt="User image" className="menu-desktop__user-info-user-photo" src={userImg} />
        <span className="menu-desktop__user-info-user-name">{username}</span>
      </div>
      <div className="menu-desktop__nav-hr"></div>
      <Options
        listOptions={listOptions}
        location={window.location.pathname.split('/')[2]}
        lastLogin={lastLogin}
        userSessionIp={userSessionIp}
      />
    </nav>
  );
};

export default MenuDesktop;
