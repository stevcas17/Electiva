import { images } from '../../../../utils/icons/constants';
import { URL_PATHS } from '../../../../utils/url-routes';
import './Microsites.scss';

export const Microsites = () => {
  const linkVinculation = () => {
    window.location.href = window.location.origin + URL_PATHS.PORTAL_REGISTER;
  };

  return (
    <div className="container__products-pasarela">
      <div className="products__pasarela-section1">
        <div className="products__pasarela-description">
          <h1>Micrositios</h1>
          <p>
            Los micrositios son una excelente manera de facilitar los pagos en un solo lugar.
            <br></br>
            Con Micrositios puede gestionar todos sus pagos en un solo lugar, en lugar de tener que hacer un seguimiento
            de todos ellos por separado.
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
          <img src={images.Microsites} alt="" width="100%" />
        </div>

        <div className="products__pasarela-info-1">
          <div className="products__pasarela-card">
            <div className="pasarela__card-title">Micrositio cerrado</div>
            <div className="pasarela__card-description">
              Perfecto para un comercio que no tiene un sitio web y que tiene facturación recurrente ya que puede cargar
              las facturas u órdenes de compra.
              <br></br>
              En el micrositio cerrado se configura la imagen gráfica del comercio y se entrega una URL asociada.
            </div>
          </div>
        </div>

        <div className="products__pasarela-info-2">
          <div className="products__pasarela-card">
            <div className="pasarela__card-title">Micrositio abierto</div>
            <div className="pasarela__card-description">
              Ideal para un comercio que no tiene un sitio web, requiere un formulario abierto para recaudar o realizar
              cobros recurrentes donde el valor por el periodo de tiempo establecido es el mismo y es la pasarela quien
              se encarga de administrar la recurrencia.
              <br></br>
              En el micrositio abierto se configura la imagen gráfica del comercio y se entrega una URL asociada.
            </div>
          </div>
        </div>
      </div>

      <div className="products__pasarela-section2">
        <div className="products__pasarela-description">
          <h1>Beneficios</h1>

          <div className="benefits-items-1">
            <p> ● Perfecto para pagos recurrentes.</p>
          </div>
          <div className="benefits-items-2">
            <p>● Permite cargar facturas u órdenes de compra</p>
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
          <img src={images.Microsites2} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Microsites;
