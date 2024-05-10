import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Pasarela from './Pasarela';
import wait from 'waait';

describe('Pasarela test page', () => {
  it('Render Pasarela component', async () => {
    render(<Pasarela />);
    const text = screen.getByText('Pasarela de pagos');
    expect(text).toBeDefined();

    await act(() => wait(0));
    const button = await screen.findByTestId('vincularme');
    expect(button).toBeDefined();
    fireEvent.click(button);

    await act(() => wait(0));
    const buttonLink = await screen.findByTestId('vincularme-pasarela');
    expect(buttonLink).toBeDefined();
    fireEvent.click(buttonLink);
  });
});
