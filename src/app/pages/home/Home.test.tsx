import { shallow, mount } from 'enzyme';
import Home from './Home';
import { historyMock } from '../../../../__mocks__/fileMock.js';
import { MemoryRouter, Router } from 'react-router';
import React from 'react';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa'
  })
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Home test page', () => {
  it('Render Home page with history', () => {
    const wrapper = shallow(<Home history={historyMock}></Home>);
    expect(wrapper).toBeDefined();
  });

  it('location useEffect', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
  });

  //   it('Render Home page with MOUNT', () => {
  //     const wrapper = mount(
  //       <MemoryRouter>
  //         <Home history={historyMock}></Home>
  //       </MemoryRouter>
  //     );
  //     expect(wrapper).toBeDefined();
  //   });
  it('click button login', () => {
    const wrapper = shallow(<Home history={historyMock}></Home>);
    const container = wrapper.find('.container__home-button');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
  it('click button register', () => {
    const wrapper = shallow(<Home history={historyMock}></Home>);
    const container = wrapper.find('#register_button');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
});
