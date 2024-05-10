import React from 'react';
import { mocked } from 'ts-jest/utils';

import { getDataMenu } from './functions/Get-data-menu';
import getDataCommerce from './functions/Get-data-commerce';
import GetDataUser from './functions/Get-data-user';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('./functions/Get-data-menu');
jest.mock('./functions/Get-data-commerce');
jest.mock('./functions/Get-data-user');

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

const mMenu = mocked(getDataMenu);
const mCommerce = mocked(getDataCommerce);
const mUser = mocked(GetDataUser);
let useEffect: any;
let retFunc;
const mockUseEffect = () => {
  useEffect.mockImplementationOnce(f => f());
};
describe('App test', () => {
  const setData = (value: any) => {
    mMenu.mockResolvedValue(value);
    mCommerce.mockResolvedValue(value);
    mUser.mockResolvedValue(value);
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect').mockImplementationOnce(func => {
      retFunc = func();
    });
    mockUseEffect();

    global.window = Object.create(window);
    const url = 'http://dummy.com';
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    });
  });

  it('app full settings', async () => {
    setData('test-data');
    const wrapper = shallow(<App></App>);
    expect(wrapper).toBeDefined();
    retFunc();
  });
  it('app void settings', () => {
    setData(null);
    const wrapper = shallow(<App></App>);
    expect(wrapper).toBeDefined();
  });
});
