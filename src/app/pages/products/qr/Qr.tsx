import { images } from '../../../../utils/icons/constants';
import { URL_PATHS } from '../../../../utils/url-routes';
import { useTranslation } from 'react-i18next';
import './Qr.scss';

const Qr = (): JSX.Element => {
  const { t } = useTranslation();
  const linkVinculation = () => {
    window.location.href = window.location.origin + URL_PATHS.PORTAL_REGISTER;
  };
  const linkCost = () => {
    window.location.href = window.location.origin + URL_PATHS.COST;
  };

  const cardItemsLink = [
    {
      image: images.Upload,
      text: 'Generas tu QR desde Gou'
    },
    {
      image: images.Edit,
      text: 'Te enviamos un QR impreso gratis'
    },
    {
      image: images.Easy,
      text: 'Colócalo a la vista de tus clientes'
    }
  ];
  return (
    <div className="container-products-qr">
      <div className="container-products-qr__section1">
        <div className="products__link-image">
          <img src={images.DeviceQRCode} alt="" width="100%" />
        </div>
        <div className="products__link-description">
          <h1>{t('home.products.qrProductTitle')}</h1>
          <p
            className="description-text"
            dangerouslySetInnerHTML={{ __html: t('home.products.qrProductDescription') }}
          />

          <div className="description-buttons">
            <button
              id="vincularme"
              data-testid="vincularme"
              className="products__link-button"
              onClick={() => linkVinculation()}
            >
              {t('home.products.qrProductButton')}
            </button>
            <button
              id="vincularme"
              data-testid="cost"
              className="products__link-button-cost"
              onClick={() => linkCost()}
            >
              {t('home.products.qrProductButtonLinkCost')}
            </button>
          </div>

          <div className="products__link-use">
            <div className="products__link-title">Usarlo es muy sencillo</div>
            <div className="products__link-cards">
              {cardItemsLink.map((item, index) => (
                <div className="products__link-cardItem" key={index}>
                  <img src={item.image} alt="" width="100%" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-products-qr__section2">
        <div className="products__link-description">
          <h1>Beneficios</h1>

          <div className="benefits-items-1">
            <p> ● Reduces gastos y evita el uso de datáfonos.</p>
          </div>
          <div className="benefits-items-2">
            <p>● Ofrecerás a tus clientes, múltiples opciones de pago. </p>
          </div>
          <div className="benefits-items-3">
            <p>● Obtienes un tent card con tu código QR, que puedes dejar visible a tus clientes.</p>
          </div>
          <button
            id="vincularme-link"
            data-testid="vincularme-link"
            className="products__link-button"
            onClick={() => linkVinculation()}
          >
            Comienza de inmediato
          </button>
        </div>
        <div className="products__link-image">
          <img src={images.Illustration} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Qr;
