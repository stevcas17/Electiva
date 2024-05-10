import React from 'react';
import { shallow } from 'enzyme';
import PopupStep from './Popup-step';
describe('Popup test atom', () => {
  it('Popup default settings', () => {
    const wrapper = shallow(<PopupStep id={'test'} step={1} onClick={null}></PopupStep>);
    expect(wrapper).toBeDefined();
  });

  it('Popup default settings to dispatch the event', () => {
    const step = 1;
    const callbackMethod = jest.fn();
    const wrapper = shallow(<PopupStep id={'test'} step={step} onClick={callbackMethod}></PopupStep>);
    wrapper.find('.step-active').simulate('click');
    expect(callbackMethod).toHaveBeenLastCalledWith(step);
  });
});
