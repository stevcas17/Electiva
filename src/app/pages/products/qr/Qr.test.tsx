import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Qr from './Qr';
import wait from 'waait';

describe('Qr test page', () => {
  it('Render Qr component', async () => {
    render(<Qr />);
    const text = screen.getByText('Beneficios');
    expect(text).toBeDefined();

    await act(() => wait(0));
    const button = await screen.findByTestId('vincularme');
    expect(button).toBeDefined();
    fireEvent.click(button);

    await act(() => wait(0));
    const buttonLink = await screen.findByTestId('vincularme-link');
    expect(buttonLink).toBeDefined();
    fireEvent.click(buttonLink);
  });
});
