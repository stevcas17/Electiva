import React from 'react';
import { useTranslation } from 'react-i18next';
import { History } from 'history';
import Nav from '../../components/molecules/navbar/Nav';
import Tabs from '../../components/molecules/tabs/Tabs';
import { images } from '../../../utils/icons/constants';
import { FooterHome } from '../../components/molecules';
import Microsites from './Microsites/Microsites';
import Qr from './Qr';
import './Cost.scss';

export default ({ history }: { history: History }): JSX.Element => {
  // i18n
  const { t } = useTranslation();

  const Tab = props => {
    return <>{props.children}</>;
  };

  return (
    <div className="container-cost">
      <Nav history={history} />
      <div className="container-cost__header">
        <picture className="header__image">
          <source media="(min-width: 1440px) and (max-width: 1680px)" srcSet={images.CostHeader} />
          <source media="(min-width: 992px) and (max-width: 1440px)" srcSet={images.CostHeaderLaptop} />
          <source media="(min-width: 744px) and (max-width: 992px)" srcSet={images.CostHeaderTablet} />
          <source media="(max-width: 744px)" srcSet={images.CostHeaderMobile} />
          <img src={images.CostHeader} />
        </picture>
        <div className="header__description">
          <div className="description__breadcum">
            <img src={images.Wallet} alt="" width={'100%'} />
          </div>
          <h4 className="description__title">{t('Cost.rates.title')}</h4>
          <div className="description__description" dangerouslySetInnerHTML={{ __html: t('Cost.rates.description') }} />
        </div>
      </div>

      <div className="container-cost__products">
        <div className="container-cost__products-body">
          <Tabs>
            <Tab label="Código QR">
              <Qr history={history} />
            </Tab>
            <Tab label="Link de Pagos - Micrositios - Pasarela">
              <Microsites history={history} />
            </Tab>
          </Tabs>
        </div>
        <FooterHome />
      </div>
    </div>
  );
};
