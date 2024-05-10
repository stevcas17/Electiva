import { AlertInterface } from './interface';
import { Buttons, Image } from '../../atoms';
import Icon from '@mdi/react';
import { mdiCloseCircle } from '@mdi/js';
import './Alerts.scss';
import { images } from '../../../../utils/icons/constants';

const Alert = ({
  message,
  description,
  showModal,
  onCloseFunction = () => {},
  onButtonClickFunction = () => {},
  showButton = true,
  showCloseButton = true,
  type = 'ALERT',
  buttonContinueText = 'Continuar',
  className,
  loadingButton,
  showSecondaryButton = false,
  buttonSecondaryText,
  onButtonSecondaryClickFunction = () => {},
  loadingSecondaryButton
}: AlertInterface): JSX.Element => {
  const AlertIcons = {
    SUCCESS: images.SuccessIcon,
    ALERT: images.AlertIcon,
    ERROR: images.ErrorIcon
  };

  return showModal ? (
    <div className={`container__alert ${className || ''}`}>
      <div className="container__alert-wrapper">
        <div className="body__alert slide-fwd-center">
          {showCloseButton && (
            <div className="body__alert-close" onClick={e => (onCloseFunction ? onCloseFunction(e) : {})}>
              <Icon size={1.5} path={mdiCloseCircle} />
            </div>
          )}
          <div className="body__alert-icon">
            <Image src={AlertIcons[type]} alt={null} className={null} width={null} height={null}></Image>
          </div>
          <div className="body__alert-content">
            <div className="body__alert-content-message">{message}</div>
            {description && <div className="body__alert-description">{description}</div>}
          </div>
          {showButton && (
            <div className="body__alert-button">
              {showSecondaryButton && (
                <Buttons
                  label={buttonSecondaryText}
                  className="default btnContinue"
                  onClick={onButtonSecondaryClickFunction}
                  loading={loadingSecondaryButton}
                />
              )}
              <Buttons
                label={buttonContinueText}
                className="btnContinue"
                onClick={onButtonClickFunction}
                loading={loadingButton}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Alert;
