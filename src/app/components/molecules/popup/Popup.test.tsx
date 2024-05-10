import React from 'react';
import { mount } from 'enzyme';
import Popup from './Popup';

describe('Popup test molecule', () => {
  const callbackMethod = jest.fn();
  const timeoutCallback = jest.spyOn(global, 'setTimeout');
  let useEffect: any;
  let retFunc: any;
  let wrapper: any;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  const setStateMock = jest.fn();
  const useStateMock: any = (useState: any) => [useState, setStateMock];

  const setHookTestState = (newState: any) => {
    const setStateMockFn = () => {};
    return Object.keys(newState).reduce((acc, val) => {
      acc = acc?.mockImplementationOnce(() => [newState[val], setStateMockFn]);
      return acc;
    }, jest.fn());
  };

  const testState = {
    step: 0,
    counter: true,
    overPrev: false,
    overNext: false
  };

  beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    useEffect = jest.spyOn(React, 'useEffect').mockImplementationOnce(func => {
      retFunc = func();
    });
    mockUseEffect();
  });

  it('Popup full settings', () => {
    wrapper = mount(<Popup showPopup={callbackMethod} id={'test'} onChange={callbackMethod}></Popup>);
    expect(wrapper).toBeDefined();
    retFunc();
  });

  it('Popup set step', () => {
    wrapper = mount(<Popup showPopup={callbackMethod} id={'test'} onChange={callbackMethod}></Popup>);
    expect(wrapper).toBeDefined();
    wrapper.find('#popup-step').at(0).props().onClick();
  });

  it('Popup next step', () => {
    wrapper = mount(<Popup showPopup={callbackMethod} id={'test'} onChange={callbackMethod}></Popup>);
    expect(wrapper).toBeDefined();
    wrapper.find('#popup-footer').at(0).props().onNext();
  });

  it('Popup final step', () => {
    testState.step = 4;
    testState.counter = true;
    React.useState = setHookTestState(testState);
    wrapper = mount(<Popup showPopup={callbackMethod} id={'test'} onChange={callbackMethod}></Popup>);
    expect(wrapper).toBeDefined();
    wrapper.find('#popup-footer').at(0).props().onNext();
  });

  it('Popup close function', () => {
    wrapper = mount(<Popup showPopup={callbackMethod} id={'test'} onChange={callbackMethod}></Popup>);
    expect(wrapper).toBeDefined();
    wrapper.find('#popup-close').at(0).props().onClick();
    expect(callbackMethod).toHaveBeenCalled();
  });

  it('Popup prev function step 0', () => {
    wrapper = mount(<Popup showPopup={callbackMethod} id={'test'} onChange={callbackMethod}></Popup>);
    expect(wrapper).toBeDefined();
    wrapper.find('#popup-footer').at(0).props().onPrev();
    expect(callbackMethod).toHaveBeenCalled();
  });

  it('Popup prev function step 2', () => {
    testState.step = 2;
    testState.counter = false;
    React.useState = setHookTestState(testState);

    wrapper = mount(<Popup showPopup={callbackMethod} id={'test'} onChange={callbackMethod}></Popup>);
    expect(wrapper).toBeDefined();
    wrapper.find('#popup-footer').at(0).props().onPrev();
    expect(callbackMethod).toHaveBeenCalled();
  });

  it('Popup timeout active', () => {
    jest.useFakeTimers();
    wrapper = mount(<Popup showPopup={callbackMethod} id={'test'} onChange={callbackMethod}></Popup>);
    expect(wrapper).toBeDefined();

    jest.advanceTimersByTime(5000);
    expect(timeoutCallback).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it('Popup timeout expired', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    testState.step = 4;
    testState.counter = true;
    React.useState = setHookTestState(testState);

    wrapper = mount(<Popup showPopup={callbackMethod} id={'test'} onChange={callbackMethod}></Popup>);
    expect(wrapper).toBeDefined();

    jest.advanceTimersByTime(12000);
    jest.useRealTimers();
  });
});
