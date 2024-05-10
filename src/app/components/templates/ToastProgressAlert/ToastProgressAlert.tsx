import { Image } from '../../atoms';
import Icon from '@mdi/react';
import { icons } from '../../../../utils/icons/constants';
import { IProgressToastAlert } from './interface';
import './ToastProgressAlert.scss';

const ToastProgressAlert = ({
  showAlert,
  handleShowAlert,
  value,
  alertIcons,
  labels,
  redirects,
  error,
  onCloseToast
}: IProgressToastAlert): JSX.Element => {
  return (
    <>
      {showAlert ? (
        <div className={`toast-container`}>
          <div className={`toast-container__toast ${!error ? (value == 100 ? '--success' : '--warning') : '--error'}`}>
            <div className="toast-container__info ">
              <Image
                src={`${
                  !error ? (value == 100 ? alertIcons.iconFinished : alertIcons.iconInProgress) : alertIcons.iconError
                }`}
                className="qrIcon"
                alt={'qrIcon'}
                width={32}
                height={32}
              />
              {!error ? (
                value == 100 ? (
                  <>
                    {labels.labelFinished}{' '}
                    <strong className="link" onClick={() => (window.location.href = redirects.successRedirect.link)}>
                      <u>{redirects.successRedirect.label}</u>
                    </strong>
                  </>
                ) : (
                  <>{value + labels.labelInProgress}</>
                )
              ) : (
                <div className="error">
                  {labels.labelError}
                  <strong className="link" onClick={() => (window.location.href = redirects.errorRedirect.link)}>
                    <u>{redirects.errorRedirect.label}</u>
                  </strong>
                </div>
              )}
            </div>
            <div
              className="toast-container__close"
              data-testid="onCloseFunctionButton"
              onClick={() => {
                handleShowAlert(false);
                onCloseToast(!error ? (value == 100 ? 'Finished' : 'Progress') : 'Error');
              }}
            >
              <Icon size={0.9} path={icons.mdiClose} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ToastProgressAlert;
