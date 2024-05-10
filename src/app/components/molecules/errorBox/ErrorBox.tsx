import React from 'react';
// interface
import { IErrorBox } from './interface';
import Footer from '../../molecules/footer/Footer';
import { Buttons, Image } from '../../atoms';
import { URL_PATHS } from '../../../../utils/url-routes';
// img
import { images } from '../../../../utils/icons/constants';
// style
import './ErrorBox.scss';

/**
 * ErrorBox template
 * @param {string} className Class name for component
 * @param {React.ReactNode} children Children of component
 * @param {any} Emoji Emoji of component
 * @param {any} EmojiString Emoji text of component
 * @param {string} title Title of component
 * @param {Controls} controls Controls of component
 * @param {boolean} navBack Show button to navigate to last view
 * @param {boolean} footer Show footer or not
 * @returns
 */

const ErrorBox = ({ buttonName, image, title, message, footer = true }: IErrorBox): JSX.Element => {
  const [loading, setLoading] = React.useState(false);

  const executeAction = () => {
    setLoading(true);
    window.location.replace(window.location.origin + URL_PATHS.PORTAL_LOGIN);
  };

  return (
    <div className="errorbox" data-testid="test-error">
      <div className="header__mobile">
        <Image className="circle" alt="back ground mobile" src={images.HeaderM} width="auto" height="auto" />
      </div>
      <div className="header__tablet">
        <Image className="circle" alt="back ground mobile" src={images.HeaderT} width="auto" height="auto" />
      </div>
      <div className="header">
        <Image className="circle" alt="back ground" src={images.Header} width="auto" height="auto" />
      </div>
      <main>
        <div className="errorbox__container">
          {/* <div className="logo-container-mobile">
            <img alt="logo dale" className="logo" src={Logo} />
          </div> */}
          {image && <Image alt="image" className="errorbox__image" src={image} width="auto" height="auto" />}
          <h2 className="errorbox__title" data-testid="labelError">
            {title}
          </h2>
          <p className="errorbox__message">{message}</p>
          <Buttons
            label={buttonName}
            onClick={executeAction}
            loading={loading}
            className="errorbox__btn"
            dataTestid="errorButonTest"
          />
        </div>
      </main>
      {footer && <Footer footerDirectionVertical={false} disableSitemap={true} />}
    </div>
  );
};

export default ErrorBox;
