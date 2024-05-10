import { images } from '../../../../utils/icons/constants';
import { URL_PATHS } from '../../../../utils/url-routes';
import './Pasarela.scss';

const Pasarela = () => {
  const linkVinculation = () => {
    window.location.href = window.location.origin + URL_PATHS.PORTAL_REGISTER;
  };

  return (
    <div className="container__products-pasarela">
      <div className="products__pasarela-section1">
        <div className="products__pasarela-description">
          <h1>Pasarela de pagos</h1>
          <p>
            Si estás buscando la mejor manera de procesar los pagos para un negocio, <b>¡no busques más! </b>
            <br></br>
            <br></br>
            Tenemos una solución perfecta para cualquier modelo de comercio electrónico o negocio online.
          </p>
          <button
            id="vincularme"
            data-testid="vincularme"
            className="products__pasarela-button"
            onClick={() => linkVinculation()}
          >
            Comienza ahora
          </button>
        </div>
        <div className="products__pasarela-image">
          <img src={images.Pasarela} alt="" width="100%" />
        </div>

        <div className="products__pasarela-info-1">
          <div className="products__pasarela-card">
            <div className="pasarela__card-title">Pasarela Webcheckout</div>
            <div className="pasarela__card-description">
              Es perfecta para los{' '}
              <b>
                comercios o emprendedores que tienen un e-commerce o un modelo de negocio online y requiere conectar el
                carrito de compras
              </b>{' '}
              para recibir los pagos por internet. <br></br>
              Si el comercio tiene una página web en Magento, Prestashop o Woocomerce, será una conexión con plugins
              para estos CMS o de lo contrario será una integración base para los lenguajes PHP, C#.Net , o Java.
            </div>
            <div className="pasarela__card-footer">
              <div className="card__footer-title">Características:</div>
              <div className="card__footer-items">
                <div className="card__footer-item">
                  <img src={images.Hand} alt="" width="40" />
                  <p>Nivel implementación básico intermedio</p>
                </div>
                <div className="card__footer-item">
                  <img src={images.LinkPasarela} alt="" width="40" />
                  <p>Conexión con Plugins o Java</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="products__pasarela-info-2">
          <div className="products__pasarela-card">
            <div className="pasarela__card-title">Pasarela API</div>
            <div className="pasarela__card-description">
              Es perfecta para los grandes clientes que requieren que todo el proceso de checkout sea manejado en su
              página web, <b>estos comercios deberán tener habilidades de programación avanzadas. </b> <br></br>{' '}
              <br></br>
              Toda la información sensible del tarjetahabiente será capturada por el comercio por lo tanto deberá
              cumplir con requisitos de seguridad como PCI.
            </div>
            <div className="pasarela__card-footer">
              <div className="card__footer-title">Características:</div>
              <div className="card__footer-items">
                <div className="card__footer-item">
                  <img src={images.EasyPasarela} alt="" width="40" />
                  <p>Nivel implementación avanzado</p>
                </div>
                <div className="card__footer-item">
                  <img src={images.KeyPasarela} alt="" width="40" />
                  <p>Requisitos de seguridad PCI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products__pasarela-section2">
        <div className="products__pasarela-description">
          <h1>Beneficios</h1>
          <div className="benefits-items-1">
            <p> ● Es una herramienta que le permitirá a tus clientes comprar y pagar de manera automatica.</p>
          </div>
          <div className="benefits-items-2">
            <p>
              ● Podrás brindarle a tus clientes, todos los edios de pago, integrados en tu e-commerce, app, portal de
              pagos, etc.
            </p>
          </div>
          <div className="benefits-items-3">
            <p>
              ● Reducirás tus costos operativos, pues Gou procesará las transacciones de tus clientes y tu banco, de
              forma rápida y segura.
            </p>
          </div>
          <div className="benefits-items-3">
            <p>
              ● Con Gou tendrás el respaldo de Grupo Aval, conglomerado empresarial con amplia trayectoria y prestigio
              en Colombia.
            </p>
          </div>
          <button
            id="vincularme-pasarela"
            data-testid="vincularme-pasarela"
            className="products__pasarela-button"
            onClick={() => linkVinculation()}
          >
            Comienza de inmediato
          </button>
        </div>
        <div className="products__pasarela-image">
          <img src={images.Ipad} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Pasarela;
