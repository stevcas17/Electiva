import Sitemap from './Sitemap';
import { shallow, mount } from 'enzyme';
import { historyMock } from '../../../../__mocks__/fileMock.js';
import React from 'react';
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));
describe('Sitemap test page', () => {
  let windowSpy;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });
  it('Render Sitemap page with history', () => {
    const wrapper = shallow(<Sitemap history={historyMock}></Sitemap>);
    expect(wrapper).toBeDefined();
  });

  it('Set useState mock and check onChange of accordion', async () => {
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const wrapper = shallow(<Sitemap history={historyMock}></Sitemap>);
    const container = await wrapper.find('.accordion__card');
    expect(container.length).toBe(7);
    container.at(0).prop('onChange')({});

    expect(setStateMock).toHaveBeenCalledWith(false);

    windowSpy.mockImplementation(() => ({
      location: {
        origin: 'http://example'
      }
    }));

    expect(window.location.origin).toEqual('http://example');
  });

  it('click some link', async () => {
    const wrapper = shallow(<Sitemap history={historyMock}></Sitemap>);
    const container = await wrapper.find('.link');
    expect(container.length).toBe(22);
    container.at(0).prop('onClick')({});
  });

  it('click on security tips', async () => {
    const wrapper = shallow(<Sitemap history={historyMock}></Sitemap>);
    const container = await wrapper.find('.accordion__card-title-btn');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
});
