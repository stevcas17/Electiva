import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import { AssistiveText } from './AssistiveText';

describe('Test <AssistiveText />', () => {
  it('Render Component AssistiveText', () => {
    const wrapper = shallow(<AssistiveText />);
    expect(wrapper).toBeDefined();
  });
  it('Render Error AssistiveText', () => {
    const { container } = render(<AssistiveText errorStatus={true} />);
    expect(container.firstChild).toHaveClass('errorText');
  });
  it('Render AssistiveText text', () => {
    const text = 'test assistive test';
    const { container } = render(<AssistiveText errorStatus={true} assistiveText={text} />);
    expect(container.firstElementChild.firstChild.textContent).toBe(text);
  });
});
