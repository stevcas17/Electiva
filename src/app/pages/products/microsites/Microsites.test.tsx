import { fireEvent, render, screen } from '@testing-library/react';
import Microsites from './Microsites';
import { URL_PATHS } from '../../../../utils/url-routes';

describe('Microsites test page', () => {
  it('Render Microsites component', () => {
    render(<Microsites />);
    const text = screen.getByText('Micrositios');
    expect(text).toBeDefined();
  });
  it('Test linkVinculation', async () => {
    jest.mock('../../../../utils/url-routes');
    const url = window.location.origin + URL_PATHS.PORTAL_REGISTER;
    render(<Microsites />);
    const button = screen.getByTestId('vincularme');
    fireEvent.click(button);
    expect(window.location.href).toBeDefined();
  });
});
