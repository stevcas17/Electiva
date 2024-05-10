import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// components
import Nav from '../../components/molecules/navbar/Nav';
import { Buttons, Image } from '../../components/atoms';

import { mdiChevronRight } from '@mdi/js';
import { mdiPlusCircleOutline } from '@mdi/js';
import { URL_PATHS } from '../../../utils/url-routes';
import { History } from 'history';
import { useLocation } from 'react-router-dom';

//assets
import { images } from '../../../utils/icons/constants';
import Icon from '@mdi/react';
import { FooterHome } from '../../components/molecules';
import './Home.scss';

export default ({ history }: { history: History }): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();

  /* Refs */
  const howWorks = useRef();
  const paymentsQR = useRef();
  const paymentsLink = useRef();
  const paymentsGateway = useRef();
  const paymentsMicrosites = useRef();
  const paymentsQr = useRef();

  /* Check if location contain query params */
  useEffect(() => {
    if (location.search !== '') {
      const sections = {
        howWorks: howWorks,
        paymentsQR: paymentsQR,
        paymentsLink: paymentsLink,
        paymentsGateway: paymentsGateway
      };
      //   console.log(location);
      const sec = location.search.split('=');

      handleBackClick(sections[sec[1]]);
    }
  }, [location]);

  /* Function for scroll to target with space top top */
  function handleBackClick(section) {
    setTimeout(() => {
      const headerOffset = 45;
      const elementPosition = section.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 300);
  }

  const selectionType = url => {
    history.push(url);
  };

  const onClickVinculation = () => {
    window.location.href = window.location.origin + URL_PATHS.PORTAL_REGISTER;
  };

  return (
    <div className="container-home-gou">
      <Nav history={history} />

      <div className="container-home-gou__banner">
        <picture className="banner__image">
          <source media="(min-width: 1440px) and (max-width: 1680px)" srcSet={images.Banner} />
          <source media="(min-width: 992px) and (max-width: 1440px)" srcSet={images.Banner992} />
          <source media="(min-width: 744px) and (max-width: 992px)" srcSet={images.Banner400} />
          <source media="(max-width: 744px)" srcSet={images.Banner320} />
          <img src={images.Banner} />
        </picture>
        <div className="banner__description">
          <h1>
            Si te pagan <strong>fácil</strong> vendes <strong>fácil</strong>
          </h1>
          <div className="vl"></div>
          <Buttons
            label={t('home.menu.buttons.register')}
            id="register_button"
            className={`filled container__home-button`}
            onClick={() => {
              selectionType(URL_PATHS.PORTAL_REGISTER);
            }}
          />
        </div>
      </div>

      <div className="container-home-gou__body">
        {/* BACKGROUD */}
        {/* <div className="background">
          <div className="background">
            <img src={images.BackgroundPurple} alt="" />
          </div>
          <div className="background background--end">
            <img src={images.BackgroundPurple} alt="" />
          </div>
          <div className="background background--left--middle">
            <img src={images.BackgroundGreen} alt="" />
          </div>        
        </div> */}

        {/* QUE ES GOU */}
        <div className="body__card-home-gou body__card-home-gou--gou" ref={paymentsQr}>
          <div className="card-home-gou__image card-home-gou__image--gou">
            <img src={images.GouApp} alt="" srcSet={`${images.GouApp} 300w, ${images.GouApp} 556w`} width="100%" />
          </div>
          <div className="card-home-gou__description card-home-gou__description--gou">
            <h1>{t('home.products.gouDescriptionTitle')}</h1>
            <p>{t('home.products.gouDescription')}</p>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className="body__card-home-gou body__card-home-gou--works" ref={howWorks}>
          <div className="card-home-gou__title">
            <h1>¿Cómo funciona?</h1>
          </div>

          <div className="card-home-gou__col">
            <div className="how-work-item">
              <Image
                className={'HowWorks1'}
                src={images.HowWorks1}
                width={'auto'}
                height={'auto'}
                alt={'how-works-register'}
              />
              <p>{t('home.products.howWorksRegister')}</p>
            </div>

            <div className="how-work-item">
              <Image
                className={'HowWorks2'}
                src={images.HowWorks2}
                width={'auto'}
                height={'auto'}
                alt={'how-works-products'}
              />
              <p>{t('home.products.howWorksProducts')}</p>
            </div>

            <div className="how-work-item">
              <Image
                className={'HowWorks3'}
                src={images.HowWorks3}
                width={'auto'}
                height={'auto'}
                alt={'how-works-account'}
              />
              <p>{t('home.products.howWorksAccount')}</p>
            </div>

            <div className="how-work-item">
              <Image
                className={'HowWorks4'}
                src={images.HowWorks4}
                width={'auto'}
                height={'auto'}
                alt={'how-works-not-accout'}
              />
              <p>{t('home.products.howWorksNotAccount')}</p>
            </div>
          </div>

          <div className="card-home-gou__works-footer">
            <Image className={'Aval'} src={images.Aval} width={'auto'} height={'auto'} alt={'Aval'} />
          </div>
        </div>

        {/* TITULO NUESTROS PRODUCTOS */}
        <div className="our-products">
          <p className="our-products__text">Nuestros productos:</p>
        </div>

        {/* QR */}
        <div className="body__card-home-gou body__card-home-gou--qr" ref={paymentsQr}>
          <div className="card-home-gou__image card-home-gou__image--qr">
            <img src={images.QrImage} alt="" srcSet={`${images.QrImage} 300w, ${images.QrImage} 556w`} width="100%" />
          </div>
          <div className="card-home-gou__description card-home-gou__description--qr">
            <h1>{t('home.products.qrDescriptionTitle')}</h1>
            <p dangerouslySetInnerHTML={{ __html: t('home.products.qrDescription') }}></p>
            <div className="footer footer--qr">
              <div className="vincularQr">
                <Buttons
                  label={t('home.products.qrFreeRequest')}
                  className="filled"
                  onClick={onClickVinculation}
                ></Buttons>
              </div>
              <div className="qr" onClick={() => history.push(`${URL_PATHS.PRODUCTS}?show=pasarela`)}>
                <span>{t('home.products.moreInformationQr')}</span>
                <Icon size={1} path={mdiChevronRight} className="menu-item-image" />{' '}
              </div>
            </div>
            <span className="conditions">{t('home.products.qrConditions')}</span>
          </div>
        </div>

        {/* LINK DE PAGOS */}
        <div className="body__card-home-gou body__card-home-gou--link" ref={paymentsLink}>
          <div className="card-home-gou__description card-home-gou__description--link">
            <h1>{t('home.products.linkDescriptionTitle')}</h1>
            <p>{t('home.products.linkDescription')}</p>
            <div className="footer footer--link">
              <div className="link" onClick={() => history.push(`${URL_PATHS.PRODUCTS}?show=link`)}>
                <span>{t('home.products.moreInformationLink')}</span>
                <Icon size={1} path={mdiChevronRight} className="menu-item-image" />{' '}
              </div>
              <div className="for-aval-request">
                <p className="description-conditions">{t('home.products.linkDescriptionConditions')}</p>
                <img src={images.EasyHome} alt="" width={'32px'} />
              </div>
            </div>
          </div>
          <div className="card-home-gou__image card-home-gou__image--link">
            <img src={images.Link556} alt="" width="100%" />
          </div>
        </div>

        {/* PASARELA */}
        <div className="body__card-home-gou body__card-home-gou--pasarela" ref={paymentsGateway}>
          <div className="card-home-gou__image card-home-gou__image--pasarela">
            <img
              src={images.Pasarela556}
              alt=""
              srcSet={`${images.Pasarela556} 300w, ${images.Pasarela556} 556w`}
              width="100%"
            />
          </div>
          <div className="card-home-gou__description card-home-gou__description--pasarela">
            <h1>{t('home.products.pasarelaDescriptionTitle')}</h1>
            <p>{t('home.products.pasarelaDescription')}</p>
            <div className="footer footer--pasarela">
              <div className="link" onClick={() => history.push(`${URL_PATHS.PRODUCTS}?show=pasarela`)}>
                <span>{t('home.products.moreInformationPasarela')}</span>
                <Icon size={1} path={mdiChevronRight} className="menu-item-image" />{' '}
              </div>
              <div className="for-aval-request">
                <p className="description-conditions">{t('home.products.linkDescriptionConditions')}</p>
                <img src={images.EasyHome} alt="" width={'32px'} />
              </div>
            </div>
          </div>
        </div>

        {/* MICROSITIOS */}
        <div className="body__card-home-gou body__card-home-gou--micrositios" ref={paymentsMicrosites}>
          <div className="card-home-gou__description card-home-gou__description--micrositios">
            <h1>{t('home.products.micrositiosDescriptionTitle')}</h1>
            <p>{t('home.products.micrositiosDescription')}</p>
            <div className="footer footer--micrositios">
              <div className="link" onClick={() => history.push(`${URL_PATHS.PRODUCTS}?show=link`)}>
                <span>{t('home.products.moreInformation')}</span>
                <Icon size={1} path={mdiChevronRight} className="menu-item-image" />{' '}
              </div>
              <div className="for-aval-request">
                <p className="description-conditions">{t('home.products.linkDescriptionConditions')}</p>
                <img src={images.EasyHome} alt="" width={'32px'} />
              </div>
            </div>
          </div>
          <div className="card-home-gou__description card-home-gou__image--micrositios">
            <img src={images.MicrositesLanding} alt="" width="100%" />
          </div>
        </div>
      </div>
      <FooterHome />
    </div>
  );
};
