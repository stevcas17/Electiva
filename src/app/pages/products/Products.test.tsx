import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';
import { historyMock } from '../../../../__mocks__/fileMock.js';

describe('Products test page', () => {
  let useEffect: any;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();

    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        search: 'search-test'
      }
    });
  });

  it('Render Cost page with history', () => {
    const wrapper = shallow(<Products history={historyMock}></Products>);
    expect(wrapper).toBeDefined();
  });
  // it('Render Products page with history', () => {
  //   const wrapper = shallow(<Products history={historyMock}></Products>);
  //   expect(wrapper).toBeDefined();
  // });

  // it('Going link me', () => {
  //   const wrapper = shallow(<Products history={historyMock}></Products>);
  //   const container = wrapper.find('#vincularme');
  //   wrapper.find('#vincularme').at(0).props().onClick();
  //   expect(container.exists()).toBe(true);
  // });
  // it('Going link me to link', () => {
  //   const wrapper = shallow(<Products history={historyMock}></Products>);
  //   const container = wrapper.find('#vincularme-link');
  //   wrapper.find('#vincularme-link').at(0).props().onClick();
  //   expect(container.exists()).toBe(true);
  // });
  // it('Going link me to pasarela', () => {
  //   const wrapper = shallow(<Products history={historyMock}></Products>);
  //   const container = wrapper.find('#vincularme-pasarela');
  //   wrapper.find('#vincularme-pasarela').at(0).props().onClick();
  //   expect(container.exists()).toBe(true);
  // });
});
