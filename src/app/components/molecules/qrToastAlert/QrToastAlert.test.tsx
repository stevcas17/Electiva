import React from 'react';
import { QrToastAlert } from './QrToastAlert';
import { render, screen, fireEvent } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import user from '@testing-library/user-event';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

jest.mock('../../../../tools/ngforage.config', () => ({
  getIndexeddb: () => Promise.resolve(false),
  setIndexeddb: jest.fn()
}));

describe('Qr toast alert test', () => {
  it('Check alert loading status change', async () => {
    render(<QrToastAlert data={50} />);
    const sucessFullMessageVinculation = await screen.findByText('50toastAlerts.qr.titles.loading');
    expect(sucessFullMessageVinculation).toBeTruthy();
  });

  it('Check alert full status change', async () => {
    render(<QrToastAlert data={100} />);
    const sucessFullMessageVinculation = await screen.findByText('toastAlerts.qr.titles.successfull');
    expect(sucessFullMessageVinculation).toBeTruthy();
  });

  it('Check alert error status change', async () => {
    render(<QrToastAlert data="error" />);
    const sucessFullMessageVinculation = await screen.findByText('toastAlerts.qr.titles.error');
    expect(sucessFullMessageVinculation).toBeTruthy();
  });

  it('Check alert close', async () => {
    const mockSetShowAlertToastQr = jest.fn();
    const setIndexeddb = jest.fn();
    const getIndexeddb = jest.fn();

    const mockCloseToastEvent = jest.fn();

    // jest.spyOn(QrToastAlert.prototype, 'setShowAlertToastQr');

    render(<QrToastAlert data="error" />);
    const btnClose = screen.getByTestId('onCloseFunctionButton');
    await fireEvent.click(btnClose);
    // screen.debug();

    // expect(sucessFullMessageVinculation).toBeTruthy();
    // expect(mockSetShowAlertToastQr).toHaveBeenCalledTimes(1);
    // expect(setIndexeddb).toHaveBeenCalledTimes(1);

    // expect(getIndexeddb).toHaveBeenCalledTimes(1);
    // expect(setShowAlertToastQr).toHaveBeenCalledTimes(1);
  });
});
