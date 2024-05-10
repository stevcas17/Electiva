import { menuMock } from '../../../../../__mocks__/menuMock';
import { shallow, mount } from 'enzyme';
import StepByStep from './StepByStep';
import React from 'react';

describe('StepByStep test', () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation(f => f());
  };

  it('StepByStep full settings', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { scrollIntoView: jest.fn() } });
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    const wrapper = shallow(
      <StepByStep onClose={jest.fn()} id={'test-step'} username={'test-user'} listOptions={menuMock}></StepByStep>
    );
    expect(wrapper).toBeDefined();
  });

  it('StepByStep void settings', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { scrollIntoView: jest.fn() } });
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    const wrapper = shallow(
      <StepByStep onClose={jest.fn()} id={'test-step'} username={'test-user'} listOptions={[]}></StepByStep>
    );
    expect(wrapper).toBeDefined();
  });
});
