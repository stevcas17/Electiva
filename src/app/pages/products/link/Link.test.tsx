import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Link from './Link';
import wait from 'waait';

describe('Link test page', () => {
  it('Render Link component', async () => {
    render(<Link />);
    const text = screen.getByText('Link de pagos');
    expect(text).toBeDefined();

    // await act(() => wait(0));
    // const button = await screen.findByTestId('vincularme');
    // expect(button).toBeDefined();
    // fireEvent.click(button);

    // await act(() => wait(0));
    // const buttonLink = await screen.findByTestId('vincularme-link');
    // expect(buttonLink).toBeDefined();
    // fireEvent.click(buttonLink);
  });
});
