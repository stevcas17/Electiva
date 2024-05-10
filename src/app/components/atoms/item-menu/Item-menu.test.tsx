import ItemMenu from './Item-menu';
import { shallow } from 'enzyme';
import React from 'react';
require('fake-indexeddb/auto');

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('ItemMenu test atom', () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  it('Render ItemMenu atom with class', () => {
    const wrapper = shallow(
      <ItemMenu
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: '/enrollment/inicio',
          icon: 'dashboard',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'/dale/inicio'}
        hiddeMenuMobile={() => jest.fn()}
      ></ItemMenu>
    );
    expect(wrapper).toBeDefined();
  });
  it('useEffect', () => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    const wrapper = shallow(
      <ItemMenu
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: '/enrollment/inicio',
          icon: 'dashboard',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'/dale/inicio'}
        hiddeMenuMobile={() => jest.fn()}
      ></ItemMenu>
    );
    expect(wrapper).toBeDefined();
  });
  it('onClick classname icons-button', () => {
    delete window.location;
    window.location = {
      hash: null,
      host: null,
      hostname: null,
      href: null,
      origin: null,
      pathname: 'enrollment',
      port: null,
      protocol: null,
      search: null,
      ancestorOrigins: null,
      assign: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn()
    };
    const wrapper = shallow(
      <ItemMenu
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: '/enrollment/inicio',
          icon: 'dashboard',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'/dale/inicio'}
        hiddeMenuMobile={() => jest.fn()}
      ></ItemMenu>
    );
    const container = wrapper.find('.icons-button');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
  it('onClick classname icons-button else', () => {
    delete window.location;
    window.location = {
      hash: null,
      host: null,
      hostname: null,
      href: null,
      origin: null,
      pathname: 'enrollment',
      port: null,
      protocol: null,
      search: null,
      ancestorOrigins: null,
      assign: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn()
    };
    const wrapper = shallow(
      <ItemMenu
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: '/enrollment/inicio',
          icon: 'dashboard',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'inicio'}
        hiddeMenuMobile={() => jest.fn()}
      ></ItemMenu>
    );
    const container = wrapper.find('.icons-button');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
  it('onMouseOver classname icons-button', () => {
    const wrapper = shallow(
      <ItemMenu
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: '/enrollment/inicio',
          icon: 'dashboard',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'/dale/inicio'}
        hiddeMenuMobile={() => jest.fn()}
      ></ItemMenu>
    );
    const container = wrapper.find('.icons-button');
    expect(container.length).toBe(1);
    container.at(0).prop('onMouseOver')({});
  });
  it('onMouseLeave classname icons-button', () => {
    const wrapper = shallow(
      <ItemMenu
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: '/enrollment/inicio',
          icon: 'dashboard',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'/dale/inicio'}
        hiddeMenuMobile={() => jest.fn()}
      ></ItemMenu>
    );
    const container = wrapper.find('.icons-button');
    expect(container.length).toBe(1);
    container.at(0).prop('onMouseLeave')({});
  });
  it('onClick classname icons-button logout', () => {
    const wrapper = shallow(
      <ItemMenu
        el={{
          idOptions: '1',
          name: 'logout',
          path: 'logout',
          icon: 'logout',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => jest.fn(() => true)}
        location={'/dale/inicio'}
        hiddeMenuMobile={() => jest.fn()}
      ></ItemMenu>
    );

    const container = wrapper.find('.icons-button');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });

  it('set hook useState', () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();

    const setHookTestState = (newState: any) => {
      const setStateMockFn = () => {};
      return Object.keys(newState).reduce((acc, val) => {
        acc = acc?.mockImplementationOnce(() => [newState[val], setStateMockFn]);
        return acc;
      }, jest.fn());
    };
    const state = {
      outLinedIcon: {
        dashboard: 'test-state'
      },
      activeDropdown: ''
    };
    React.useState = setHookTestState(state);
    const wrapper = shallow(
      <ItemMenu
        el={{
          idOptions: '1',
          name: 'dashboard',
          path: 'logout',
          icon: 'dashboard',
          order: '1',
          optionsList: [],
          group: '1'
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'/dale/inicio'}
        hiddeMenuMobile={() => jest.fn()}
      ></ItemMenu>
    );
    expect(wrapper).toBeDefined();
  });

  it('onClick dropdown menu', () => {
    delete window.location;
    window.location = {
      hash: null,
      host: null,
      hostname: null,
      href: null,
      origin: null,
      pathname: 'enrollment',
      port: null,
      protocol: null,
      search: null,
      ancestorOrigins: null,
      assign: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn()
    };
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();

    const setHookTestState = (newState: any) => {
      const setStateMockFn = () => {};
      return Object.keys(newState).reduce((acc, val) => {
        acc = acc?.mockImplementationOnce(() => [newState[val], setStateMockFn]);
        return acc;
      }, jest.fn());
    };
    const state = {
      outLinedIcon: {
        dashboard: 'test-state'
      },
      activeDropdown: '9'
    };
    React.useState = setHookTestState(state);
    const wrapper = shallow(
      <ItemMenu
        el={{
          idOption: '7',
          name: 'settings',
          path: '/enrollment/ajustes',
          icon: 'mdiCog',
          order: '3',
          optionsList: [
            {
              idOption: '9',
              name: 'profile',
              path: '/enrollment/perfil-cliente',
              icon: 'mdiAccount',
              order: '1',
              optionsList: [],
              group: '2',
              firstLevel: null
            },
            {
              idOption: '10',
              name: 'changePassword',
              path: '/enrollment/ajustes/cambiar-contrasena',
              icon: 'mdiHelpCircle',
              order: '1',
              optionsList: [],
              group: '2',
              firstLevel: null
            },
            {
              idOption: '11',
              name: 'brand',
              path: '/enrollment/brand',
              icon: 'mdiHelpCircle',
              order: '1',
              optionsList: [],
              group: '2',
              firstLevel: null
            }
          ],
          group: '2',
          firstLevel: true
        }}
        i={0}
        divisor={true}
        className={'icons-button'}
        logout={() => 'executeLogout'}
        location={'perfil-cliente'}
        hiddeMenuMobile={() => jest.fn()}
      ></ItemMenu>
    );

    const container = wrapper.find('.icons-button');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});

    const container2 = wrapper.find('.dropdown-menu-item');
    expect(container2.length).toBe(3);
    container2.at(0).prop('onClick')({});
  });
});
