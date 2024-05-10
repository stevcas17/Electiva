import React from 'react';
import ToastProgressAlert from './ToastProgressAlert';
import { render, screen } from '@testing-library/react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));
describe('Qr toast alert test', () => {
  it('Check alert loading status change', () => {
    render(
      <ToastProgressAlert
        onCloseToast={() => jest.fn()}
        showAlert={true}
        handleShowAlert={() => jest.fn()}
        value={60}
        alertIcons={{
          iconFinished: 'iconFinished',
          iconInProgress: 'iconInProgress',
          iconError: 'iconError'
        }}
        labels={{
          labelFinished: 'toastAlerts.qr.titles.successfull',
          labelInProgress: 'toastAlerts.qr.titles.loading',
          labelError: 'toastAlerts.qr.titles.error'
        }}
        error={false}
        redirects={{
          successRedirect: {
            label: 'successRedirect',
            link: 'linkSuccess'
          },
          errorRedirect: {
            label: 'errorRedirect',
            link: 'linkError'
          }
        }}
      />
    );

    const sucessFullMessageVinculation = screen.getByText('60toastAlerts.qr.titles.loading');
    expect(sucessFullMessageVinculation).toBeTruthy();
  });

  it('Check alert full status change', () => {
    render(
      <ToastProgressAlert
        onCloseToast={() => jest.fn()}
        showAlert={true}
        handleShowAlert={() => jest.fn()}
        value={100}
        alertIcons={{
          iconFinished: 'iconFinished',
          iconInProgress: 'iconInProgress',
          iconError: 'iconError'
        }}
        labels={{
          labelFinished: 'toastAlerts.qr.titles.successfull',
          labelInProgress: 'toastAlerts.qr.titles.loading',
          labelError: 'toastAlerts.qr.titles.error'
        }}
        error={false}
        redirects={{
          successRedirect: {
            label: 'successRedirect',
            link: 'linkSuccess'
          },
          errorRedirect: {
            label: 'errorRedirect',
            link: 'linkError'
          }
        }}
      />
    );

    const sucessFullMessageVinculation = screen.getByText('toastAlerts.qr.titles.successfull');
    expect(sucessFullMessageVinculation).toBeTruthy();
  });

  it('Check alert error status change', () => {
    render(
      <ToastProgressAlert
        onCloseToast={() => jest.fn()}
        showAlert={true}
        handleShowAlert={() => jest.fn()}
        value={100}
        alertIcons={{
          iconFinished: 'iconFinished',
          iconInProgress: 'iconInProgress',
          iconError: 'iconError'
        }}
        labels={{
          labelFinished: 'toastAlerts.qr.titles.successfull',
          labelInProgress: 'toastAlerts.qr.titles.loading',
          labelError: 'toastAlerts.qr.titles.error'
        }}
        error={true}
        redirects={{
          successRedirect: {
            label: 'successRedirect',
            link: 'linkSuccess'
          },
          errorRedirect: {
            label: 'errorRedirect',
            link: 'linkError'
          }
        }}
      />
    );

    const errorMessageVinculation = screen.getByText('toastAlerts.qr.titles.error');
    expect(errorMessageVinculation).toBeTruthy();
  });
});
