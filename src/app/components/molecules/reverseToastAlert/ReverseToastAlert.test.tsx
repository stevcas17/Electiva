import React from 'react';
import { ReverseToastAlert } from './ReverseToastAlert';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

jest.mock('../../../../tools/ngforage.config', () => ({
  getIndexeddb: () => Promise.resolve(false),
  setIndexeddb: jest.fn()
}));

describe('Reversetx toast alert test', () => {
  it('Check alert loading status change', async () => {
    render(<ReverseToastAlert data={50} />);
    const sucessFullMessageVinculation = await screen.findByText('50toastAlerts.reversetx.titles.loading');
    expect(sucessFullMessageVinculation).toBeTruthy();
  });

  it('Check alert full status change', async () => {
    render(<ReverseToastAlert data={100} />);
    const sucessFullMessageVinculation = await screen.findByText('toastAlerts.reversetx.titles.successfull');
    expect(sucessFullMessageVinculation).toBeTruthy();
  });

  it('Check alert error status change', async () => {
    render(<ReverseToastAlert data="error" />);
    const sucessFullMessageVinculation = await screen.findByText('toastAlerts.reversetx.titles.error');
    expect(sucessFullMessageVinculation).toBeTruthy();
  });

  it('Check alert close', async () => {
    render(<ReverseToastAlert data="error" />);
    const btnClose = screen.getByTestId('onCloseFunctionButton');
    await fireEvent.click(btnClose);
  });
});
