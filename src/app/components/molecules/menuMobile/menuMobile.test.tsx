import React, { useRef } from 'react';
import { shallow, mount } from 'enzyme';
import { MenuMobile } from './menuMobile';
import Options from '../menuOptions/Options';
import { menuMock } from '../../../../../__mocks__/menuMock';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('MenuMobile test', () => {
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
    Play: false,
    ShowMenu: false
  };
  it('MenuMobile full settings', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    const ref = React.createRef();
    const wrapper = mount(
      <MenuMobile listOptions={menuMock} ref={ref} lastLogin={1666706924} userSessionIp={'127.0.0.1'}></MenuMobile>
    ).html();
    expect(wrapper).toBeDefined();
    jest.runAllTimers();
    jest.useRealTimers();
  });

  it('test use state show', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    testState.ShowMenu = true;
    React.useState = setHookTestState(testState);
    const wrapper = shallow(
      <MenuMobile listOptions={menuMock} lastLogin={1666706924} userSessionIp={'127.0.0.1'}></MenuMobile>
    );
    expect(wrapper).toBeDefined();
    wrapper.find('.hamburguer-menu-container__menu-close').at(0).props().onClick();
  });

  it('test use state play', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    testState.ShowMenu = true;
    testState.Play = true;
    React.useState = setHookTestState(testState);
    const wrapper = shallow(
      <MenuMobile listOptions={menuMock} lastLogin={1666706924} userSessionIp={'127.0.0.1'}></MenuMobile>
    );
    expect(wrapper).toBeDefined();
    wrapper.find(Options).at(0).props().hiddeMenuMobile();
  });
});
