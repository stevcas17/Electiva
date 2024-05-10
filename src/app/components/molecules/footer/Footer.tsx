import Icon from '@mdi/react';
import { useHistory } from 'react-router-dom';
import './Footer.scss';
import { Image } from '../../atoms';
import { icons, images } from '../../../../utils/icons/constants';
import { useTranslation } from 'react-i18next';

export default ({
  id = null,
  disableSitemap = false,
  footerDirectionVertical = true,
  showSocialMedia = true
}): JSX.Element => {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <footer className="main-footer" id={id}>
      <div className="">
        <div className="container-menu" style={disableSitemap ? { display: 'none' } : {}}>
          <div className="btn-menu" id="home.page_help_button" onClick={() => history.push('/sitemap')}>
            <Icon size={1} path={icons.mdiSitemap} className="menu-item-image" />
            <span>Sitemap</span>
          </div>
        </div>
        <div className={`container ${!footerDirectionVertical ? 'footer-horizontal' : ''}`}>
          <hr />
          <div className="footer-content">
            <div className="logos-gou-aval">
              <Image alt="Gou Aval logo" className="social-image" src={images.GouAval} width="auto" height="auto" />
            </div>
            {showSocialMedia && (
              <div className="social-media">
                <Image
                  className="social-image"
                  src={images.FacebookImage}
                  alt="Facebook logo"
                  width={null}
                  height={null}
                ></Image>
                <Image
                  className="social-image"
                  src={images.InstagramImage}
                  alt="Facebook logo"
                  width={null}
                  height={null}
                ></Image>
                <Image
                  className="social-image"
                  src={images.TwitterImage}
                  alt="Facebook logo"
                  width={null}
                  height={null}
                ></Image>
              </div>
            )}
            {/* <div className="copyright">{t('verifyPhone.copyright')}</div> */}
            {/* <div className="regulations">
              <Image className={null} src={images.FogafinImage} alt="Fogafin logo" width={149} height="auto"></Image>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
