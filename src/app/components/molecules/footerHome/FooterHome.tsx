// import Icon from '@mdi/react';
// import { useHistory } from 'react-router-dom';
import './FooterHome.scss';
import { Image } from '../../atoms';
import { images } from '../../../../utils/icons/constants';
import { useTranslation } from 'react-i18next';

//@ts-ignore
import AvisoDePrivacidad from 'Assets/legal/Aviso de privacidad.pdf';
//@ts-ignore
import TerminosYCondiciones from 'Assets/legal/20230901-TerminosYCondicionesPortalGou.pdf';
//@ts-ignore
import TratamientoDeDatos from 'Assets/legal/TratamientoDeDatos.02.08.2023.pdf';

export const FooterHome = (): JSX.Element => {
  // const history = useHistory();
  const { t } = useTranslation();
  return (
    <footer className="main-footer-home">
      <div className="main-footer-home__general-info">
        <div className="general-info__col superfinanciera">
          <div className="horizontal">
            <Image
              className="social-image"
              src={images.SuperfinancieraHorizontalWhite}
              alt="Vigilado Superintendencia Financiera de Colombia"
              width={'40%'}
              height={'auto'}
            ></Image>
          </div>
          <div className="vertical">
            <Image
              className="social-image"
              src={images.SuperfinancieraVerticalWhite}
              alt="Vigilado Superintendencia Financiera de Colombia"
              width={'auto'}
              height={'40%'}
            ></Image>
          </div>
        </div>

        <div className="general-info__col">
          <div className="col__logos">
            <Image
              className="social-image"
              src={images.LogoFooter}
              alt="Facebook logo"
              width={null}
              height={null}
            ></Image>
            <Image
              className="social-image"
              src={images.AvalFooter}
              alt="Facebook logo"
              width={null}
              height={null}
            ></Image>
          </div>
          <div className="col__info">
            <div className="info__text">
              <u>
                <a href={AvisoDePrivacidad} target="blank" rel="noreferrer noopener">
                  {' '}
                  {t('footer.privacity')}
                </a>
              </u>
            </div>
            <div className="vl"></div>
            <div className="info__text">
              <u>
                <a href={TerminosYCondiciones} target="blank" rel="noreferrer noopener">
                  {' '}
                  {t('footer.terms')}
                </a>
              </u>
            </div>
            <div className="vl"></div>
            <div className="info__text">
              <u>
                <a href={TratamientoDeDatos} target="blank" rel="noreferrer noopener">
                  {' '}
                  {t('footer.personalData')}
                </a>
              </u>
            </div>
          </div>
        </div>
        <div className="general-info__col--info">
          <strong>Estamos listos para ayudarte </strong> <br />
          soportegoupagos@en-contacto.co
          <br />
          <br />
          <strong>Línea en Bogotá:</strong> 601 743 2626
          <br />
          <strong>Línea Nacional: </strong>01 8000 515 825 <br />
          <strong>Horarios de atención</strong> <br />
          <strong>Lunes a viernes</strong> 7 am a 10 pm <br />
          <strong>Sábados, domingos y festivos:</strong> <br />8 am a 12pm y 1:00 pm - 5:00pm
        </div>
      </div>

      <div className="main-footer-home__info-contact">
        <div className="info-contact__text">
          <u>
            <a href={AvisoDePrivacidad} target="blank" rel="noreferrer noopener">
              {' '}
              {t('footer.privacity')}
            </a>
          </u>
        </div>
        <div className="vl"></div>
        <div className="info-contact__text">
          <u>
            <a href={TerminosYCondiciones} target="blank" rel="noreferrer noopener">
              {' '}
              {t('footer.terms')}
            </a>
          </u>
        </div>
        <div className="vl"></div>
        <div className="info-contact__text">
          <u>
            <a href={TratamientoDeDatos} target="blank" rel="noreferrer noopener">
              {' '}
              {t('footer.personalData')}
            </a>
          </u>
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;
