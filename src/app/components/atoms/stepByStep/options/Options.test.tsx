import React from 'react';
import Options from './Options';
import { shallow } from 'enzyme';
import { menuMock } from '../../../../../../__mocks__/menuMock';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Options test', () => {
  it('Options full settings', async () => {
    const wrapper = shallow(<Options listOptions={menuMock} location={'inicio'} />);
    expect(wrapper).toBeDefined();
  });
  it('Options full settings other location', async () => {
    const wrapper = shallow(<Options listOptions={menuMock} location={'other'} />);
    expect(wrapper).toBeDefined();
  });
});
