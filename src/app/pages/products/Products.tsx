import React, { useEffect, useRef } from 'react';
import { History } from 'history';
import { images } from '../../../utils/icons/constants';
import { useTranslation } from 'react-i18next';
import Nav from '../../components/molecules/navbar/Nav';
import './Products.scss';
import { FooterHome } from '../../components/molecules';
import Tabs from '../../components/molecules/tabs/Tabs';
import Link from './link/Link';
import Pasarela from './pasarela/Pasarela';
import Qr from './qr/Qr';
import Microsites from './microsites/Microsites';

export default ({ history }: { history: History }): JSX.Element => {
  const { t } = useTranslation();
  const paymentsLink = useRef();
  const paymentsGateway = useRef();

  const Tab = props => {
    return <>{props.children}</>;
  };
  /* Check if location contain query params. */
  useEffect(() => {
    if (location.search !== '') {
      const sections = {
        // howWorks: howWorks,
        // paymentsQR: paymentsQR,
        link: paymentsLink,
        pasarela: paymentsGateway
      };
      //   console.log(location);
      const sec = location.search.split('=');

      handleBackClick(sections[sec[1]]);
    }
  }, [location]);

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
  return (
    <div className="products">
      <Nav history={history} />
      <div className="products__header">
        <picture className="header__image">
          <source media="(min-width: 1440px) and (max-width: 1680px)" srcSet={images.ProductHeader} />
          <source media="(min-width: 992px) and (max-width: 1440px)" srcSet={images.ProductHeaderLaptop} />
          <source media="(min-width: 744px) and (max-width: 992px)" srcSet={images.ProductHeaderTablet} />
          <source media="(max-width: 744px)" srcSet={images.ProductHeaderMobile} />
          <img src={images.ProductHeader} />
        </picture>

        <div className="header__description">
          <div className="description__breadcum">{t('home.products.productsBreadcrum')}</div>
          <div className="description__title">{t('home.products.productsTitle')}</div>
          <div className="description__description">
            <p dangerouslySetInnerHTML={{ __html: t('home.products.productsHeader') }}></p>
          </div>
        </div>
      </div>

      <div className="container__products">
        <div className="container__products-body">
          <Tabs>
            <Tab label="Código QR">
              <Qr />
            </Tab>
            <Tab label="Link de pagos">
              <Link />
            </Tab>
            <Tab label="Pasarela de pagos">
              <Pasarela />
            </Tab>
            <Tab label="Micrositios">
              <Microsites />
            </Tab>
          </Tabs>

          <div className="container__products-payOptions">
            <div className="products__payOptions-title">Medios de pago</div>
            <div className="products__payOptions-options">
              <img src={images.Visa} alt="" width="33" />
              <img src={images.Mastercard} alt="" width="33" />
              {/* <img src={images.GrupoAval} alt="" width="180px" />
                <img src={images.DaleSvg} alt="" width="60" />
                <img src={images.AvalPayCenter} alt="" width="10%" /> */}
              <img src={images.PSE} alt="" width="33" />
              <img src={images.GrupoExito} alt="" width="55" />
              <img src={images.LogoPuntored} alt="" width="55" />
              <img src={images.Efecty} alt="" width="33" />
              <img src={images.MasOpciones} alt="" width="140" />
            </div>
          </div>

          <div className="container__products-moreProducts">
            <div className="products__moreProducts-title">Más productos:</div>
            <div className="products__moreProducts-items">
              <div className="products__moreProducts-item">
                <div className="moreProducts__item-image">
                  <img src={images.PasarelaCard} alt="" width="100%" />
                </div>
                <div className="moreProducts__item-description">
                  <div className="item__description-title">Pasarela de pagos</div>

                  <div className="item__description-description">
                    Se integra perfectamente a las plataformas ya existentes, <b>fácil de configurar y utilizar.</b>
                  </div>
                </div>
                <div className="moreProducts__item-link">Ver producto {'>'}</div>
              </div>

              <div className="products__moreProducts-item">
                <div className="moreProducts__item-image">
                  <img src={images.QrCard} alt="" width="100%" />
                </div>
                <div className="moreProducts__item-description">
                  <div className="item__description-title">Código QR</div>

                  <div className="item__description-description">
                    El método diferente al efectivo que agiliza tus ventas, <b>sencillo, rápido y seguro.</b>
                  </div>
                </div>
                <div className="moreProducts__item-link">Ver producto {'>'}</div>
              </div>

              <div className="products__moreProducts-item">
                <div className="moreProducts__item-image">
                  <img src={images.MicrositesCard} alt="" width="100%" />
                </div>
                <div className="moreProducts__item-description">
                  <div className="item__description-title">Micrositios</div>

                  <div className="item__description-description">
                    Son ideales para aquellos comercios que no tienen un sitio web, <b>crea y personaliza.</b>
                  </div>
                </div>
                <div className="moreProducts__item-link">Ver producto {'>'}</div>
              </div>
            </div>
          </div>
        </div>
        <FooterHome />
      </div>
    </div>
  );
};
