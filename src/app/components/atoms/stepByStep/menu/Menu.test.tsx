import * as ngforage from '../../../../../tools/ngforage.config';
import { menuMock } from '../../../../../../__mocks__/menuMock';
import { mocked } from 'ts-jest/utils';
import { shallow } from 'enzyme';
import Menu from './Menu';
import React from 'react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('MenuDesktop test', () => {
  it('MenuDesktop full settings', () => {
    const wrapper = shallow(<Menu username="jestUsername" listOptions={menuMock} location={'inicio'}></Menu>).html();
    expect(wrapper).toBeDefined();
  });
});
