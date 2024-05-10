import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { History } from 'history';
import { images } from '../../../../utils/icons/constants';
import { Image } from '../../../components/atoms';
import BancoDeBogota from 'Assets/images/cost/banco-de-bogota.svg';
import BancoPopular from 'Assets/images/cost/banco-popular.svg';
import BancoOccidente from 'Assets/images/cost/banco-de-occidente.svg';
import BancoAvVillas from 'Assets/images/cost/banco-av-villas.svg';
import BancoDale from 'Assets/images/cost/Dale.png';
import './Qr.scss';

export const Qr = ({ history }: { history: History }): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="card-qr">
      <div className="card-qr__row">
        <div className="card-qr__image">
          <img className="icon" src={images.qrTendCard} alt="" width={'100%'} />
        </div>
        <div className="card-qr__card-cost">
          <div className="card-qr-title">{t('home.products.cost.title')}</div>
          <div
            className="card-bank"
            onClick={() => {
              window.location.href =
                'https://www.bancodebogota.com/wps/portal/banco-de-bogota/bogota/productos/para-ti/tasas-y-tarifas';
            }}
          >
            <Image src={BancoDeBogota} width="200" height="auto" alt="bbogota" className="bbogota" />
          </div>
          <div
            className="card-bank"
            onClick={() => {
              window.location.href =
                'https://www.bancodeoccidente.com.co/wps/wcm/connect/banco-de-occidente/0fa103b7-11fb-4a75-ae17-78450d790377/tarifas-persona-2024.pdf?MOD=AJPERES&CVID=oLp-s-S';
            }}
          >
            <Image src={BancoOccidente} width="200" height="auto" alt="boccidente" className="boccidente" />
          </div>
          <div
            className="card-bank"
            onClick={() => {
              window.location.href =
                'https://www.bancopopular.com.co/wps/portal/bancopopular/inicio/informacion-interes/tarifas';
            }}
          >
            <Image src={BancoPopular} width="200" height="auto" alt="bpopular" className="bpopular" />
          </div>
          <div
            className="card-bank"
            onClick={() => {
              window.location.href = 'https://www.avvillas.com.co/productos-en-oficina/tasas-y-tarifas';
            }}
          >
            <Image src={BancoAvVillas} width="200" height="auto" alt="bavvillas" className="bavvillas" />
          </div>
          <div
            className="card-bank"
            onClick={() => {
              window.location.href = 'https://www.dale.com.co/tarifas';
            }}
          >
            <Image src={BancoDale} width="110" height="auto" alt="bdale" className="bdale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qr;
