import React from 'react';
import { shallow, mount } from 'enzyme';
import * as ngforage from '../../../../tools/ngforage.config';
import { mocked } from 'ts-jest/utils';
import MenuDesktop from './menuDesktop';
import { menuMock } from '../../../../../__mocks__/menuMock';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));
jest.mock('../../../../tools/ngforage.config');

const mGetIndexeddb = mocked(ngforage.getIndexeddb);

jest.mock('redux-micro-frontend', () => ({
  GlobalStore: {
    Get: () => {
      return {
        RegisterStore: () => jest.fn(),
        RegisterGlobalActions: () => jest.fn(),
        SubscribeToGlobalState: () => jest.fn()
      };
    }
  }
}));

describe('MenuDesktop test', () => {
  let useEffect: any;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
  });
  it('MenuDesktop full settings', () => {
    const value = 'test-value';
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    mGetIndexeddb.mockResolvedValue(value);

    jest.spyOn(React, 'useContext').mockReturnValue({
      Shell: { dataUserImage: { status: true } }
    });

    const wrapper = mount(
      <MenuDesktop
        username="jestUsername"
        listOptions={menuMock}
        lastLogin={1666706924}
        userSessionIp={'127.0.0.1'}
      ></MenuDesktop>
    ).html();
    expect(wrapper).toBeDefined();
  });
  it('MenuDesktop no data context', () => {
    const value = 'test-value';
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    mGetIndexeddb.mockResolvedValue(value);

    jest.spyOn(React, 'useContext').mockReturnValue({
      Shell: undefined
    });

    const wrapper = mount(
      <MenuDesktop
        username="jestUsername"
        listOptions={menuMock}
        lastLogin={1666706924}
        userSessionIp={'127.0.0.1'}
      ></MenuDesktop>
    ).html();
    expect(wrapper).toBeDefined();
  });
});
