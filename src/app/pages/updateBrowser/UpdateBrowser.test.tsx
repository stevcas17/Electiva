import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UpdateBrowser } from './UpdateBrowser';
import { historyMock } from '../../../../__mocks__/fileMock.js';
import {
  CHROME_UPDATE_LINK,
  EDGE_UPDATE_LINK,
  FIREFOX_UPDATE_LINK,
  OPERA_UPDATE_LINK,
  SAFARI_UPDATE_LINK
} from '../../../utils/constants';
import * as hooks from '../../../functions/hooks/UseGetBrowserVersion';

describe('Test UpdateBrowse', () => {
  it('Render page', async () => {
    render(<UpdateBrowser history={historyMock} />);
    const title = screen.getByText('updateBrowser.title');
    expect(title).toBeDefined();
  });

  it('should render without error', () => {
    jest.spyOn(hooks, 'useGetBrowserVersion').mockReturnValueOnce({ name: 'Chrome', version: '54' });

    render(<UpdateBrowser history={historyMock} />);
    const errorBoxElement = screen.getByTestId('test-error');
    expect(errorBoxElement).toBeDefined();
  });

  it('should update browser link correctly based on Chrome', () => {
    jest.spyOn(hooks, 'useGetBrowserVersion').mockReturnValueOnce({ name: 'Chrome', version: '54' });

    render(<UpdateBrowser history={historyMock} />);
    const browserUpdateLink = screen.getByTestId('linkBrowser');
    expect(browserUpdateLink).toHaveAttribute('href', CHROME_UPDATE_LINK);
  });

  it('should update browser link correctly based on Opera', () => {
    jest.spyOn(hooks, 'useGetBrowserVersion').mockReturnValueOnce({ name: 'Opera', version: '40' });

    render(<UpdateBrowser history={historyMock} />);
    const browserUpdateLink = screen.getByTestId('linkBrowser');
    expect(browserUpdateLink).toHaveAttribute('href', OPERA_UPDATE_LINK);
  });

  it('should update browser link correctly based on Safari', () => {
    jest.spyOn(hooks, 'useGetBrowserVersion').mockReturnValueOnce({ name: 'Safari', version: '14' });

    render(<UpdateBrowser history={historyMock} />);
    const browserUpdateLink = screen.getByTestId('linkBrowser');
    expect(browserUpdateLink).toHaveAttribute('href', SAFARI_UPDATE_LINK);
  });

  it('should update browser link correctly based on Firefox', () => {
    jest.spyOn(hooks, 'useGetBrowserVersion').mockReturnValueOnce({ name: 'Firefox', version: '57' });

    render(<UpdateBrowser history={historyMock} />);
    const browserUpdateLink = screen.getByTestId('linkBrowser');
    expect(browserUpdateLink).toHaveAttribute('href', FIREFOX_UPDATE_LINK);
  });

  it('should update browser link correctly based on Edge', () => {
    jest.spyOn(hooks, 'useGetBrowserVersion').mockReturnValueOnce({ name: 'EdgeHTML', version: '44' });

    render(<UpdateBrowser history={historyMock} />);
    const browserUpdateLink = screen.getByTestId('linkBrowser');
    expect(browserUpdateLink).toHaveAttribute('href', EDGE_UPDATE_LINK);
  });

  it('Click button', async () => {
    render(<UpdateBrowser history={historyMock} />);
    const buttonClose = screen.getByTestId('errorButtonTest');
    await fireEvent.click(buttonClose);
  });
});
