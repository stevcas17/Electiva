//core

import { Buttons } from '../../atoms';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Animate } from 'react-simple-animate';
// style
import { mdiMenu } from '@mdi/js';
//icons
import Icon from '@mdi/react';

import { mdiClose } from '@mdi/js';
import { images } from '../../../../utils/icons/constants';
import { History } from 'history';
import { URL_PATHS } from '../../../../utils/url-routes';
import initialNavbarData from '../../../data/initialNavbarData';
import { Image } from '../../atoms';
import NavItems from '../../atoms/nav-items/Nav-items';
import LinkItems from '../../atoms/nav-items/Link-items';
import initialLinkData from '../../../data/initialLinkData';
import './Navbar.scss';

const Nav = ({ history }: { history: History }): JSX.Element => {
  const { t } = useTranslation();
  const navItems = initialNavbarData;
  const linkItems = initialLinkData;
  const ANIMATION_MENU_DURATION = 300;
  const [ShowMenu, setShowMenu] = useState(false);
  const [Play, setPlay] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!ShowMenu);
    setPlay(!Play);
  };

  const selectionType = url => {
    history.push(url);
  };

  return (
    <nav className={`container__navbar`}>
      <div className={`cont ${ShowMenu ? 'menu-open' : 'menu-close'}`}>
        <div className="logo-container">
          <div className="toggle-menu" id="home.page_hamburguer.menu_button" onClick={toggleMenu}>
            <Icon size={2} path={mdiMenu} className="menu-toggle-image" />
          </div>
          <NavItems
            activeClassName={null}
            className={''}
            id={'home.page_home_link'}
            to={'/'}
            text={null}
            classnameText={null}
            image={images.LogoGouWhite}
            classNameImage={'logo logo--long'}
            altImage={'dale!'}
            widthImage={null}
            heightImage={null}
          ></NavItems>
          <NavItems
            activeClassName={null}
            className={''}
            id={'home.page_home_link'}
            to={'/'}
            text={null}
            classnameText={null}
            image={images.LogoGouWhiteShort}
            classNameImage={'logo logo--short-dark'}
            altImage={'dale!'}
            widthImage={null}
            heightImage={null}
          ></NavItems>
          <NavItems
            activeClassName={null}
            className={''}
            id={'home.page_home_link'}
            to={'/'}
            text={null}
            classnameText={null}
            image={images.LogoGouWhiteShort}
            classNameImage={'logo logo--short-white'}
            altImage={'dale!'}
            widthImage={null}
            heightImage={null}
          ></NavItems>
          <div className="pattern-menu">
            <img src={images.PatterMenuMobile} className="menu-pattern-image" />
          </div>
        </div>
        <div className="menu-container">
          {navItems.map(item => (
            <div className="contBtn" key={item.id}>
              <NavItems
                activeClassName={'active'}
                className={'btnMenu'}
                id={item.id}
                to={item.to}
                text={item.content.text}
                classnameText={null}
                image={null}
                classNameImage={null}
                altImage={null}
                widthImage={null}
                heightImage={null}
              ></NavItems>
            </div>
          ))}
        </div>

        <div className="option-container">
          <Buttons
            label={t('home.menu.buttons.login')}
            id="home.page_register_button"
            className="outlined container__navbar-button"
            onClick={() => selectionType(URL_PATHS.PORTAL_LOGIN)}
          />
          <Buttons
            label={t('home.menu.buttons.register')}
            id="home.page_register_button"
            className="container__navbar-button"
            onClick={() => selectionType(URL_PATHS.PORTAL_REGISTER)}
          />
          {/* (
          {process.env.REACT_APP_ENV !== 'pro' && (
            <Buttons
              label={t('home.menu.buttons.userAval')}
              id="home.page_register_button"
              className="user_aval container__navbar-button"
              onClick={() => selectionType(URL_PATHS.PORTAL_USER_AVAL)}
            />
          )}
          ) */}
        </div>

        {ShowMenu && (
          <div className="hamburguer-menu-container">
            <Animate
              play={Play}
              duration={ANIMATION_MENU_DURATION / 2000}
              start={{
                transform: 'translateX(-100%)',
                visibility: 'hidden',
                opacity: '0',
                transition: 'opacity 0.3s, visibility 0.3s'
              }}
              end={{
                transform: 'translateX(0%)',
                visibility: 'visible',
                opacity: '1',
                transition: 'opacity 0.3s, visibility 0.3s'
              }}
            >
              <div className="hambuguer-menu">
                <div className="header">
                  <Image className="logo-menu" src={images.LogoGouShort} alt="" width={null} height={null}></Image>
                  <div
                    onClick={toggleMenu}
                    id="home.page_close.hamburguer.menu_button"
                    className="close-hamburguer-menu-img"
                  >
                    <Icon size={2} path={mdiClose} />
                  </div>
                </div>

                <div className="nav-hr"></div>

                <div className="menu-container-mobile">
                  <div className="menu-options-mobile">
                    {navItems.map(item => (
                      <div className="contBtn" key={item.id}>
                        <NavItems
                          activeClassName={item.activeClassName}
                          className={'menu-item'}
                          id={item.id}
                          to={item.to}
                          text={item.content.text}
                          classnameText={'menu-item-title'}
                          image={item.content.icon}
                          classNameImage={'menu-item-image'}
                          altImage={null}
                          widthImage={null}
                          heightImage={null}
                        ></NavItems>
                      </div>
                    ))}
                  </div>
                  <div className="nav-hr"></div>

                  <div className="item-p2">
                    {linkItems.map(item => (
                      <div className="contBtn" key={item.id}>
                        <LinkItems className={item.className} id={item.id} to={item.to} text={item.text}></LinkItems>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
