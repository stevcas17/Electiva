import React from 'react';
import { shallow } from 'enzyme';
import PopupHeader from './Popup-header';
describe('Popup test atom', () => {
  it('Popup full settings', () => {
    const wrapper = shallow(<PopupHeader id="header" src={'icon-test'}></PopupHeader>);
    expect(wrapper).toBeDefined();
  });
});
