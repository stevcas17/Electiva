import React, { useEffect, useState } from 'react';
import ToastProgressAlert from '../../templates/ToastProgressAlert/ToastProgressAlert';
import { icons } from '../../../../utils/icons/constants';
import { useTranslation } from 'react-i18next';
import { IQrToastAlert } from './interface';
import { setIndexeddb, getIndexeddb } from '../../../../tools/ngforage.config';

export const QrToastAlert = ({ data }: IQrToastAlert): JSX.Element => {
  const { t } = useTranslation();
  const COMPLETE_PROGRESS = 100;
  const [qrValueProgress, setQrValueProgress] = useState<number>(0);
  const [showAlertToastQr, setShowAlertToastQr] = useState(false);
  const [alertStateError, setAlertStateError] = useState(false);
  const [allowShowToast, setAllowShowToast] = useState(false);

  useEffect(() => {
    if (data) {
      setShowAlertToastQr(true);
      if (typeof data == 'string' && String(data).includes('error')) {
        if (String(data).includes('05')) {
          setShowAlertToastQr(false);
          setAllowShowToast(false);
          setAlertStateError(false);
        } else {
          setAllowShowToast(true);
          setAlertStateError(true);
        }
        return;
      }
      if (data === COMPLETE_PROGRESS) {
        getIndexeddb('global', `hiddenQrToastFinished`).then(res => setAllowShowToast(!res));
      }
      setQrValueProgress(data.toFixed());
    }
  }, [data]);

  useEffect(() => {
    const toastType = !alertStateError ? (qrValueProgress == 100 ? 'Finished' : 'Progress') : 'Error';
    getIndexeddb('global', `hiddenQrToast${toastType}`).then(res => setAllowShowToast(!res));
  }, [qrValueProgress]);

  const closeToastEvent = (toastTypeToClose: 'Error' | 'Progress' | 'Finished') => {
    setIndexeddb('global', `hiddenQrToast${toastTypeToClose}`, true);
    getIndexeddb('global', 'QRStatusVinculationCurrentDate').then(res =>
      setIndexeddb('global', 'QRStatusVinculationLastDate', res)
    );
    getIndexeddb('global', 'QRStatusGenerationCurrentDate').then(res =>
      setIndexeddb('global', 'QRStatusGenerationLastDate', res)
    );
  };

  return (
    <>
      {!window.location.pathname.includes('qr') && (
        <ToastProgressAlert
          showAlert={allowShowToast && !!showAlertToastQr}
          handleShowAlert={() => setShowAlertToastQr(prev => !prev)}
          value={qrValueProgress}
          error={alertStateError}
          onCloseToast={closeToastEvent}
          redirects={{
            successRedirect: {
              label: t('toastAlerts.qr.button.seeQr'),
              link: 'qr/codigo-qr'
            },
            errorRedirect: {
              label: t('toastAlerts.qr.button.support'),
              link: 'qr/support'
            }
          }}
          alertIcons={{
            iconFinished: icons.QrActivationToastBlack,
            iconInProgress: icons.QrActivationToast,
            iconError: icons.ErrorActivation
          }}
          labels={{
            labelFinished: t('toastAlerts.qr.titles.successfull'),
            labelInProgress: t('toastAlerts.qr.titles.loading'),
            labelError: t('toastAlerts.qr.titles.error')
          }}
        />
      )}
    </>
  );
};
