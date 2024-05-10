import React from 'react';
import { shallow, mount } from 'enzyme';
import Menu from './Menu';
import { mocked } from 'ts-jest/utils';
import CryptoJS from 'crypto-js';
import { getIndexeddb } from '../../../../tools/ngforage.config';
import { Header } from '../../atoms';
import GetDataUser from '../../../../functions/Get-data-user';
import GetUserLastLogin from '../../../../functions/Get-data-user-last-login';

const status = {
  globalState: {
    Shell: {
      dataSession: {
        status: true
      },
      dataHeader: {
        status: true
      },
      dataMenu: {
        status: true
      },
      dataShowStep: {
        status: true
      }
    }
  }
};

jest.mock('../../../../tools/ngforage.config');
jest.mock('../../../../functions/Get-data-menu');
jest.mock('../../../../functions/Get-data-user');
jest.mock('../../../../functions/Get-data-user-last-login');
jest.mock('crypto-js');
const mGetIndexeddb = mocked(getIndexeddb);
const mDecrypt = mocked(CryptoJS.AES.decrypt);
const mEncrypt = mocked(CryptoJS.AES.encrypt);
const mGetDataUser = mocked(GetDataUser);
const mGetDataUserLastLogin = mocked(GetUserLastLogin);

jest.mock('redux-micro-frontend', () => ({
  GlobalStore: {
    Get: () => {
      return {
        RegisterStore: () => jest.fn(),
        RegisterGlobalActions: () => jest.fn(),
        SubscribeToGlobalState: (store: string, callback: (value) => void) => callback(status)
      };
    }
  }
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Menu test', () => {
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
    headerStatus: false,
    showStepByStep: false,
    menuStatus: false,
    menuOptions: [],
    username: null,
    lastLoginDate: 1666706924,
    userSessionIp: '127.0.0.1'
  };

  it('Menu full settings', () => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/payments/inicio'
      }
    });

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    jest.spyOn(React, 'useContext').mockReturnValue({
      Shell: {
        dataSession: { status: true },
        dataHeader: { status: true },
        dataMenu: { status: true },
        dataShowStep: { status: true }
      }
    });

    mGetIndexeddb.mockReturnValueOnce('test' as any);
    mDecrypt.mockReturnValueOnce('active' as any);
    mGetDataUser.mockReturnValueOnce({ firstName: 'test' } as any);
    mGetDataUserLastLogin.mockReturnValueOnce({ lastLogin: 1666706924, lastLoginIp: '127.0.0.1' } as any);
    mEncrypt.mockReturnValueOnce('test' as any);

    const wrapper = mount(
      <Menu>
        <div className="test">test</div>
      </Menu>
    );
    expect(wrapper).toBeDefined();
  });

  it('Menu build menu inactive', () => {
    mGetIndexeddb.mockReturnValueOnce('test' as any);
    mDecrypt.mockReturnValueOnce('inactive' as any);

    const wrapper = mount(
      <Menu>
        <div className="test">test</div>
      </Menu>
    );
    expect(wrapper).toBeDefined();
  });

  it('Menu get username fail', () => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/payments/inicio'
      }
    });

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    jest.spyOn(React, 'useContext').mockReturnValue({
      Shell: null
    });

    mGetIndexeddb.mockReturnValueOnce('test' as any);
    mDecrypt.mockReturnValueOnce('active' as any);
    mGetDataUser.mockRejectedValue(null as any);
    mGetDataUserLastLogin.mockReturnValueOnce({ lastLogin: 1666706924, lastLoginIp: '127.0.0.1' } as any);

    const wrapper = mount(
      <Menu>
        <div className="test">test</div>
      </Menu>
    );
    expect(wrapper).toBeDefined();
  });

  it('Menu get last login data fail', () => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/payments/inicio'
      }
    });

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    jest.spyOn(React, 'useContext').mockReturnValue({
      Shell: null
    });

    mGetIndexeddb.mockReturnValueOnce('test' as any);
    mDecrypt.mockReturnValueOnce('active' as any);
    mGetDataUser.mockReturnValueOnce({ firstName: 'test' } as any);
    mGetDataUserLastLogin.mockRejectedValue({ lastLogin: 1666706924, lastLoginIp: '127.0.0.1' } as any);

    const wrapper = mount(
      <Menu>
        <div className="test">test</div>
      </Menu>
    );
    expect(wrapper).toBeDefined();
  });

  it('Menu get seasson fail', () => {
    mGetIndexeddb.mockRejectedValue(null as any);

    const wrapper = mount(
      <Menu>
        <div className="test">test</div>
      </Menu>
    );
    expect(wrapper).toBeDefined();
  });

  it('Menu with status', () => {
    const openMenu = jest.fn();
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { openMenu } });
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    testState.headerStatus = true;
    testState.menuStatus = true;
    React.useState = setHookTestState(testState);

    const wrapper = shallow(
      <Menu>
        <div className="test">test</div>
      </Menu>
    );
    expect(wrapper).toBeDefined();
    wrapper.find(Header).at(0).props().showMenu();
  });

  it('Menu with step by step', () => {
    // Object.defineProperty(location, 'reload', {
    //   value: jest.fn()
    // });

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

    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    testState.showStepByStep = true;
    React.useState = setHookTestState(testState);

    const wrapper = shallow(
      <Menu>
        <div className="test">test</div>
      </Menu>
    );
    expect(wrapper).toBeDefined();
    wrapper.find('#step-by-step').at(0).props().onClose();
  });
});
