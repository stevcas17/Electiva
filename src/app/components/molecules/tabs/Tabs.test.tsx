import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';

describe('Tabs test atom', () => {
  it('Render Tabs atom with class', () => {
    const Tab = props => {
      return <>{props.children}</>;
    };

    render(
      <Tabs>
        <Tab label="Link de pagos - Micrositios - Pasarela">Test</Tab>

        <Tab label="Link de pagos">Test 2</Tab>
      </Tabs>
    );
    const text = screen.getByText('Test');
    expect(text).toBeDefined();
  });
});
