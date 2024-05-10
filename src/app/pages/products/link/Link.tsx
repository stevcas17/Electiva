import { images } from '../../../../utils/icons/constants';
import { URL_PATHS } from '../../../../utils/url-routes';
import Icon from '@mdi/react';
import { useTranslation } from 'react-i18next';
import { mdiChevronRight } from '@mdi/js';
import './Link.scss';

const Link = (): JSX.Element => {
  const { t } = useTranslation();

  const linkVinculation = URL => {
    window.location.href = window.location.origin + URL;
  };

  const cardItemsLink = [
    {
      image: images.LinkIcon,
      text: 'Generas tu link de pagos en Gou'
    },
    {
      image: images.EmailIcon,
      text: 'Lo envias por redes sociales o correo'
    },
    {
      image: images.ProgressIcon,
      text: 'Tu link vence 60 minutos después de haber sido generado'
    }
  ];
  return (
    <div className="container__products-link">
      <div className="products__link-section1">
        <div className="products__link-image">
          <img src={images.DeviceLink} alt="" width="110%" />
        </div>
        <div className="products__link-description">
          <h1>Link de pagos</h1>
          <p>
            El Link de Pagos es la herramienta de cobro ideal para aquellos{' '}
            <b>emprendedores o comerciantes que no tienen un sitio web</b>, pero venden en línea y necesitan
            proporcionar a sus compradores un método de pago cómodo y de fácil acceso.
          </p>

          <div className="products__link" onClick={() => linkVinculation(URL_PATHS.COST)}>
            <span>{'¿Cuanto cuesta?'}</span>
            <Icon size={1} path={mdiChevronRight} className="menu-item-image" />{' '}
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

          <div className="products__link-for-aval-request">
            <p className="description-conditions">{t('home.products.linkDescriptionConditions')}</p>
            <img src={images.EasyHome} alt="" width={'32px'} />
          </div>
        </div>
      </div>
      <div className="products__link-section2">
        <div className="products__link-description">
          <h1>Herramienta de inventario de productos</h1>
          <div className="benefits-items-0">
            <p>
              {' '}
              Muestra todos tus productos dentro de un catálogo para tus clientes, donde puedas organizar por categorías
              y tener actualizado tu inventario.
            </p>
          </div>
          <div className="benefits-items-1">
            <p>
              {' '}
              ● Podrás crear inventarios para gestionar tu portafolio de productos y servicios y luego crear links de
              pago más fácil.
            </p>
          </div>
          <div className="benefits-items-2">
            <p>
              ● Crea categorías de tus productos para tener una mejor gestión tipo de producto, marca, colores, tallas,
              etc.{' '}
            </p>
          </div>
          <div className="benefits-items-3">
            <p>● Mantén organizado tu negocio para que no pierdas una sola venta</p>
          </div>
          {/* <button
            id="vincularme-link"
            data-testid="vincularme-link"
            className="products__link-button"
            onClick={() => linkVinculation(URL_PATHS.PORTAL_REGISTER)}
          >
            Comienza de inmediato
          </button> */}
        </div>
        <div className="products__link-image">
          <picture>
            <source media="(min-width: 744px) and (max-width: 1680px)" srcSet={images.Link} />
            <source media="(max-width: 744px)" srcSet={images.LinkMobile} />
            <img src={images.Link} alt="" width="100%" />
          </picture>
        </div>
      </div>

      <div className="products__link-section3">
        <div className="products__link-image">
          <img src={images.Link2} alt="" width="100%" />
        </div>
        <div className="products__link-description">
          <h1>Beneficios</h1>
          <div className="benefits-items-1">
            <p> ● Cerrarás ventas de manera digital y en corto tiempo.</p>
          </div>
          <div className="benefits-items-2">
            <p>● Ofrecerás a tus clientes, múltiples opciones de pago.</p>
          </div>
          <div className="benefits-items-3">
            <p>
              ● Facilitarás la búsqueda, compra de tus productos y servicios, pues en tu Link de Pagos podrás incluir,
              descripción, categoría, imagen e inventario de la referencia a vender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;
