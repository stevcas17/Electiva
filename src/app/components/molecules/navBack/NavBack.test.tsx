import React from 'react';
import { shallow } from 'enzyme';
import NavBack from './NavBack';
import { historyMock } from '../../../../../__mocks__/fileMock.js';

describe('NavBack test atom', () => {
  beforeEach(() => {
    jest.spyOn(historyMock, 'push');
  });

  it('NavBack full settings', () => {
    const wrapper = shallow(<NavBack onNavBackFunction={() => 'fn-test'}></NavBack>);
    expect(wrapper).toBeDefined();
  });
  it('onClick navBack with params', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<NavBack onNavBackFunction={() => 'fn-test'}></NavBack>);
    const container = wrapper.find('.btn');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });

  it('onClick navBack with params FALSE', () => {
    const mockPush = jest.fn();
    jest.mock('react-router-dom', () => ({
      useHistory: () => {
        const push = () => mockPush();
        return { push };
      }
    }));

    const wrapper = shallow(<NavBack></NavBack>);
    const container = wrapper.find('.btn');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
});
