import React from 'react';
import { History } from 'history';
import Nav from '../../components/molecules/navbar/Nav';
import { images } from '../../../utils/icons/constants';
import './Security.scss';
import { FooterHome } from '../../components/molecules';
import { useTranslation } from 'react-i18next';

export default ({ history }: { history: History }): JSX.Element => {
  const { t } = useTranslation();

  const cards = [
    {
      id: '1',
      icon: images.DesktopIcon,
      description: t('Security.cards.desktop')
    },
    {
      id: '2',
      icon: images.SecurityIcon,
      description: t('Security.cards.security')
    },
    {
      id: '3',
      icon: images.UploadIcon,
      description: t('Security.cards.upload')
    },
    {
      id: '4',
      icon: images.KeysIcon,
      description: t('Security.cards.keys')
    },
    {
      id: '5',
      icon: images.SecuritySitesIcon,
      description: t('Security.cards.security_sites')
    },
    {
      id: '6',
      icon: images.SslIcon,
      description: t('Security.cards.ssl')
    },
    {
      id: '7',
      icon: images.PasswordIcon,
      description: t('Security.cards.password')
    },
    {
      id: '8',
      icon: images.WorldIcon,
      description: t('Security.cards.world')
    },
    {
      id: '9',
      icon: images.Security2Icon,
      description: t('Security.cards.security2')
    },
    {
      id: '10',
      icon: images.MailSecurityIcon,
      description: t('Security.cards.mail_security')
    },
    {
      id: '11',
      icon: images.SecurityDataIcon,
      description: t('Security.cards.security_data')
    },
    {
      id: '12',
      icon: images.ChangeKeysIcon,
      description: t('Security.cards.change_keys')
    },
    {
      id: '13',
      icon: images.Key2Icon,
      description: t('Security.cards.key2')
    },
    {
      id: '14',
      icon: images.Certificate2Icon,
      description: t('Security.cards.certificate')
    },
    {
      id: '15',
      icon: images.ChatSecurityIcon,
      description: t('Security.cards.chat_security')
    }
  ];

  return (
    <>
      <Nav history={history} />
      <div className="security">
        <div className="security-header">
          <img src={images.SecurityLogo} alt="security logo" width="auto" height="auto" />
          <h3 className="security-title">Tips de seguridad</h3>
          <span className="security-description">Gou un buen uso a las trasacciones que haces desde tu comercio</span>
        </div>
        <div className="security-body">
          {/* Start card */}
          {cards.map((card, index) => (
            <div className="security-card" key={index + card.id}>
              <div className="security-card-icon">
                <img src={card.icon} alt="" />
              </div>
              <div className={`security-card-description ${index + card.id === '1314' ? 'full-width' : ''}`}>
                {card.description}
              </div>
            </div>
          ))}
          {/* End card */}
        </div>
        <FooterHome />
      </div>
    </>
  );
};
