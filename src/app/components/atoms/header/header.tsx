import React from 'react';
import Icon from '@mdi/react';
import './header.scss';
import { images, icons } from '../../../../utils/icons/constants';
import { AwsRum, AwsRumConfig } from 'aws-rum-web';

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    guestRoleArn: process.env.GUESTROLEARN,
    identityPoolId: process.env.IDENTITYPOOLID,
    endpoint: process.env.ENDPOINT,
    telemetries: ['performance', 'errors', 'http'],
    allowCookies: true,
    enableXRay: true
  };
  const APPLICATION_ID = process.env.APPLICATION_ID;
  const APPLICATION_VERSION = process.env.APPLICATION_VERSION;
  const APPLICATION_REGION = process.env.APPLICATION_REGION;
  const awsRum: AwsRum = new AwsRum(APPLICATION_ID, APPLICATION_VERSION, APPLICATION_REGION, config);
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

export const Header = ({ showMenu, menuStatus }): JSX.Element => {
  const goHome = () => {
    window.location.href = window.location.origin + '/enrollment/inicio';
  };

  return (
    <>
      {/* Header Mobile */}
      <header className="header-mobile">
        {menuStatus ? (
          <div className="header-mobile__item--burguer" onClick={showMenu}>
            <Icon size={1} path={icons.mdiMenu} />
          </div>
        ) : (
          <div className="header-mobile__item--burguer"></div>
        )}
        <div className="header-mobile__item--brand-mobile" onClick={goHome}>
          <img alt="logo" src={images.mobileLogoHeader} width={66} />
        </div>
        <div className="header-mobile__item--brand-tablet" onClick={goHome}>
          <img alt="logo" src={images.desktopLogoHeader} width={100} />
        </div>
        <div className="header-mobile__item--pattern">
          <img alt="pattern" src={images.ilustrationGouHeaderTablet} />
        </div>

        {/* <div className="header-mobile__menu-title">{'hello'}</div>
        <div className="header-mobile__user-container">
          <img alt="" className="header-mobile__user-container-user-photo" src={images.Avatar} />
          <span className="header-mobile__user-container-user-name">{'ivancho'}</span>
        </div> */}
      </header>

      {/* Header Desktop */}
      <header className="header-desktop">
        <div className="header-desktop__item--logo" onClick={goHome}>
          <img alt="logo" width={'100%'} src={images.desktopLogoHeader} />
        </div>
        <div className="header-desktop__item--patern">
          <img alt="pattern" height={72} src={images.ilustrationGouHeaderDesktop} />
        </div>
      </header>
    </>
  );
};
