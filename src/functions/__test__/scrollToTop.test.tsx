import ScrollToTop from '../scrollToTop';
import { shallow } from 'enzyme';
import React from 'react';
import { historyMock } from '../../../__mocks__/fileMock.js';

describe('ScrollToTop test function', () => {
  let useEffect: any;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
  });
  it('Render ScrollToTop', () => {
    global.scrollTo = jest.fn();
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const wrapper = shallow(<ScrollToTop history={historyMock}></ScrollToTop>);
    expect(wrapper).toBeDefined();
  });
});
