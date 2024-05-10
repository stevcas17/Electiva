import React from 'react';
import { shallow } from 'enzyme';
import PopupFooter from './Popup-footer';
describe('Popup test atom', () => {
  const callbackMethod = jest.fn();

  const useStateMock: any = (useState: any) => [useState, jest.fn()];
  const setHookTestState = (newState: any) => {
    const setStateMockFn = () => {};
    return Object.keys(newState).reduce((acc, val) => {
      acc = acc?.mockImplementationOnce(() => [newState[val], setStateMockFn]);
      return acc;
    }, jest.fn());
  };
  let stateValue = {
    overPrev: false,
    overNext: false
  };

  beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementationOnce(useStateMock);
  });

  it('Popup void settings', () => {
    const wrapper = shallow(
      <PopupFooter id="footer" onPrev={callbackMethod} onNext={callbackMethod} step={2}></PopupFooter>
    );
    expect(wrapper).toBeDefined();
  });

  it('Popup full settings', () => {
    const wrapper = shallow(
      <PopupFooter id="footer" onPrev={callbackMethod} onNext={callbackMethod} step={2}></PopupFooter>
    );
    expect(wrapper).toBeDefined();
    stateValue = {
      overPrev: true,
      overNext: true
    };
    React.useState = setHookTestState(stateValue);
    wrapper.find('#popup-prev').at(0).props().onMouseOver();
    wrapper.find('#popup-prev').at(0).props().onMouseOut();
    wrapper.find('#popup-next').at(0).props().onMouseOver();
    wrapper.find('#popup-next').at(0).props().onMouseOut();
  });
});
