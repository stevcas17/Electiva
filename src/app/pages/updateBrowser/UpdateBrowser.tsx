import { History } from 'history';
import './UpdateBrowser.scss';
import { images } from '../../../utils/icons/constants';
import { Buttons, Image } from '../../components/atoms';
import Footer from '../../components/molecules/footer/Footer';
import { useEffect, useState } from 'react';
import { useGetBrowserVersion } from '../../../functions/hooks/UseGetBrowserVersion';
import {
  CHROME_UPDATE_LINK,
  EDGE_UPDATE_LINK,
  FIREFOX_UPDATE_LINK,
  OPERA_UPDATE_LINK,
  SAFARI_UPDATE_LINK
} from '../../../utils/constants';
import { useTranslation } from 'react-i18next';

export const UpdateBrowser = ({ history }: { history: History }): JSX.Element => {
  const { t } = useTranslation();

  const [browserUpdateLink, setBrowserUpdateLink] = useState<string>(null);

  const goHome = () => {
    window.location.replace(window.location.origin);
  };
  const { name, version } = useGetBrowserVersion();

  useEffect(() => {
    console.log({ name, version });

    switch (name) {
      case 'Chrome':
        setBrowserUpdateLink(CHROME_UPDATE_LINK);
        break;

      case 'Opera':
        setBrowserUpdateLink(OPERA_UPDATE_LINK);
        break;

      case 'Safari':
        setBrowserUpdateLink(SAFARI_UPDATE_LINK);
        break;

      case 'Firefox':
        setBrowserUpdateLink(FIREFOX_UPDATE_LINK);
        break;

      case 'IE':
      case 'MSIE':
      case 'Edge-Chromium':
      case 'EdgeHTML':
        setBrowserUpdateLink(EDGE_UPDATE_LINK);
        break;
    }
  }, []);

  return (
    <div className="errorbox _ext" data-testid="test-error">
      <div className="header__mobile">
        <Image className="circle" alt="back ground mobile" src={images.HeaderM} width="auto" height="auto" />
      </div>
      <div className="header__tablet">
        <Image className="circle" alt="back ground mobile" src={images.HeaderT} width="auto" height="auto" />
      </div>
      <div className="header">
        <Image className="circle" alt="back ground" src={images.Header} width="auto" height="auto" />
      </div>

      <main className="errorbox_main">
        <div className="errorbox__container">
          <Image alt="image" className="errorbox__image" src={images.Missing} width="auto" height="auto" />
          <h2 className="errorbox__title" data-testid="labelError">
            {t('updateBrowser.title')}
          </h2>

          {!!browserUpdateLink && (
            <>
              <p className="errorbox__message">{t('updateBrowser.subtitle')}</p>
              <a className="errorbox__link" data-testid="linkBrowser" href={browserUpdateLink}>
                {t('updateBrowser.updateButton')}
              </a>
            </>
          )}

          <Buttons
            label={t('updateBrowser.backButton')}
            onClick={goHome}
            loading={false}
            className="outlined errorbox__btn"
            dataTestid="errorButtonTest"
          />
        </div>
      </main>

      <Footer footerDirectionVertical={false} disableSitemap={true} showSocialMedia={false} />
    </div>
  );
};
