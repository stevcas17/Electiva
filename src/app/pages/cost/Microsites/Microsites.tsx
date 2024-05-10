import React from 'react';
import { History } from 'history';
import { images } from '../../../../utils/icons/constants';
import { Buttons } from '../../../components/atoms/Buttons/Button';
import { URL_PATHS } from '../../../../utils/url-routes';
import './Microsites.scss';

const Microsites = ({ history }: { history: History }): JSX.Element => {
  const selectionType = url => {
    history.push(url);
  };
  return (
    <>
      <div className="card-microsites">
        <div className="card-microsites__row">
          <div className="card-microsites__card-cost">
            <div className="card-microsites__card-title">MODELO AGREGADOR</div>
            <div className="card-microsites__card-body">
              <div className="card-microsites__card-body card-microsites__card-body--other">
                <div className="card-microsites__card-body--other-cost-title">Tarifa por transacción:</div>
                <div className="card-microsites__card-body--other-cost">
                  <div className="value">2.65%</div>
                  <div className="add">+</div>
                  <div className="value">$700</div>
                  <div className="add">+</div>
                  <div className="tax">Impuestos para todos los productos</div>
                </div>
              </div>
              <div className="card-item">
                <img className="icon" src={images.GreenItem1} alt="" width={'50%'} />
                El abono de tus ventas será al final de la semana en tu cuenta o depósito de los Bancos Aval registrada.
              </div>
              <br />
              <div className="card-item">
                <img className="icon" src={images.GreenItem2} alt="" width={'50%'} />
                Proceso de vinculación inmediato, solo te tomará unos minutos vincularte en línea
              </div>
              <br />
              <div className="card-item">
                <img className="icon" src={images.GreenItem3} alt="" width={'50%'} />
                Información detallada de tus ventas.
              </div>
            </div>
            <br />
            <Buttons
              label={'Comienza de inmediato'}
              className="cost-button"
              dataTestid="cost.button"
              onClick={() => selectionType(URL_PATHS.PORTAL_REGISTER)}
            />
          </div>
          <div className="card-microsites__card-cost">
            <div className="card-microsites__card-title--gateway">MODELO GATEWAY</div>
            <div className="card-microsites__card-body">
              <div className="card-microsites__card-subtitle">Tarifa sujeta a transaccionalidad</div>

              <div className="card-microsites__card-description">
                Con esta opción mejoras tu tarifa entre más transacciones tengas, solo debes negociar ese valor con tu
                Banco de preferencia en nuestros Bancos Aval
              </div>

              <div className="card-item">
                <img className="icon" src={images.PurpleItem1} alt="" width={'50%'} />
                El abono de tus ventas será al siguiente día hábil a tu cuenta de los Bancos Aval registrada.
              </div>
              <br />
              <div className="card-item">
                <img className="icon" src={images.PurpleItem2} alt="" width={'50%'} />
                Acompañamiento de tu banco Aval de preferencia durante todo el proceso de vinculación.
              </div>
              <br />
              <div className="card-item">
                <img className="icon" src={images.PurpleItem3} alt="" width={'50%'} />
                Información detallada de tus ventas.
              </div>
              <br />
            </div>
            <Buttons
              label={'Crea una cuenta ahora'}
              className="cost-button-gateway"
              onClick={() => selectionType(URL_PATHS.PORTAL_REGISTER)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Microsites;
