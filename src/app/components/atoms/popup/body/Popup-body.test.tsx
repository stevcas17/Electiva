import React from 'react';
import { shallow } from 'enzyme';
import PopupBody from './Popup-body';
describe('Popup test atom', () => {
  it('Popup full settings', () => {
    const wrapper = shallow(<PopupBody id={'id-test'} label={'test'}></PopupBody>);
    expect(wrapper).toBeDefined();
  });
});
