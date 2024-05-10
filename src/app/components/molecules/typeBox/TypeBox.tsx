// interface
import { typeBox } from './interface';
// component
import NavBack from '../navBack/NavBack';
//assets
import { images } from '../../../../utils/icons/constants';
import Footer from '../footer/Footer';
import Alerts from '../alerts/Alert';
import { Image } from '../../atoms';
import './typeBox.scss';

const TypeBox = ({
  className,
  children,
  Emoji,
  EmojiString,
  title,
  navBack = true,
  footer = true,
  onNavBackFunc = undefined,
  alertConfig = {
    showModal: false,
    message: '',
    description: '',
    type: 'ALERT',
    showButton: true,
    showCloseButton: true,
    buttonContinueText: ''
  }
}: typeBox) => {
  return (
    <div className={`container__typebox ${className}`}>
      <Alerts
        message={alertConfig.message}
        description={alertConfig.description}
        showModal={alertConfig.showModal}
        type={alertConfig.type}
        onButtonClickFunction={alertConfig.onButtonClickFunction}
        onCloseFunction={alertConfig.onCloseFunction}
        showButton={alertConfig.showButton}
        showCloseButton={alertConfig.showCloseButton}
        buttonContinueText={alertConfig.buttonContinueText}
      />
      <div className="container__typebox-background circle-1">
        <Image src={images.CircleBackground1} alt={null} className={'circle-1'} width={null} height={null}></Image>
      </div>
      <div className="container__typebox-background">
        <Image src={images.CircleBackground2} alt={null} className={'circle-2'} width={null} height={null}></Image>
      </div>
      <div className="container__typebox-background circle-3">
        <Image src={images.CircleBackground3} alt={null} className={'circle-3'} width={null} height={null}></Image>
      </div>
      <div className="container__typebox-backgroundMovil">
        <Image src={images.CircleSolid} alt={null} className={'circle'} width={null} height={null}></Image>
        <Image src={images.Shapes} alt={null} className={'shapes'} width={null} height={null}></Image>
      </div>
      {navBack && <NavBack onNavBackFunction={onNavBackFunc} />}
      <main>
        <div className="logo-container">
          <img alt="logo dale" className="logo" src={images.LogoBlue} />
        </div>
        <div className="form-container">
          {Emoji && (
            <Image src={Emoji} alt={'emoji de teléfono'} className={'emoji'} width={null} height={null}></Image>
          )}
          {EmojiString && <div className="emojiText">{EmojiString}</div>}
          <h2 className="title">{title}</h2>
          <div className="cont">{children}</div>
        </div>
      </main>
      {footer && <Footer footerDirectionVertical={false} />}
    </div>
  );
};

export default TypeBox;
