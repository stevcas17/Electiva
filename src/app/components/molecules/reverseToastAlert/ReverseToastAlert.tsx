import React, { useEffect, useState } from 'react';
import ToastProgressAlert from '../../templates/ToastProgressAlert/ToastProgressAlert';
import { icons } from '../../../../utils/icons/constants';
import { useTranslation } from 'react-i18next';
import { IReverseToastAlert } from './interface';
import { setIndexeddb, getIndexeddb } from '../../../../tools/ngforage.config';

export const ReverseToastAlert = ({ data }: IReverseToastAlert): JSX.Element => {
  const { t } = useTranslation();
  const COMPLETE_PROGRESS = 100;
  const [reverseValueProgress, setReverseValueProgress] = useState<number>(0);
  const [showAlertToastReverse, setShowAlertToastReverse] = useState(false);
  const [alertStateError, setAlertStateError] = useState(false);
  const [allowShowToast, setAllowShowToast] = useState(false);

  useEffect(() => {
    if (data) {
      setShowAlertToastReverse(true);
      if (data == 'error') {
        setAllowShowToast(true);
        setAlertStateError(true);
        return;
      }
      if (data === COMPLETE_PROGRESS) {
        getIndexeddb('global', `hiddenReverseToastFinished`).then(res => setAllowShowToast(!res));
      }
      setReverseValueProgress(data.toFixed());
    }
  }, [data]);

  useEffect(() => {
    const toastType = !alertStateError
      ? reverseValueProgress == COMPLETE_PROGRESS
        ? 'Finished'
        : 'Progress'
      : 'Error';
    getIndexeddb('global', `hiddenReverseToast${toastType}`).then(res => setAllowShowToast(!res));
  }, [reverseValueProgress]);

  const closeToastEvent = (toastTypeToClose: 'Error' | 'Progress' | 'Finished') => {
    getIndexeddb('global', 'reversingCurrentDate').then(res => setIndexeddb('global', 'reversingLastDate', res));
    setIndexeddb('global', `hiddenReverseToast${toastTypeToClose}`, true);
  };

  return (
    <>
      {!window.location.pathname.includes('reversetx') && (
        <ToastProgressAlert
          showAlert={allowShowToast && !!showAlertToastReverse}
          handleShowAlert={() => setShowAlertToastReverse(prev => !prev)}
          value={reverseValueProgress}
          error={alertStateError}
          onCloseToast={closeToastEvent}
          redirects={{
            successRedirect: {
              label: t('toastAlerts.reversetx.button.seeReverse'),
              link: 'dashboard'
            },
            errorRedirect: {
              label: t('toastAlerts.reversetx.button.support'),
              link: 'reversetx/support'
            }
          }}
          alertIcons={{
            iconFinished: icons.QrActivationToastBlack,
            iconInProgress: icons.QrActivationToast,
            iconError: icons.ErrorActivation
          }}
          labels={{
            labelFinished: t('toastAlerts.reversetx.titles.successfull'),
            labelInProgress: t('toastAlerts.reversetx.titles.loading'),
            labelError: t('toastAlerts.reversetx.titles.error')
          }}
        />
      )}
    </>
  );
};
