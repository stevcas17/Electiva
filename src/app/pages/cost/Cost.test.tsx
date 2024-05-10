import { shallow } from 'enzyme';
import { screen } from '@testing-library/react';
import Cost from './Cost';
import { historyMock } from '../../../../__mocks__/fileMock.js';

describe('Cost test page', () => {
  it('Render Cost page with history', () => {
    const wrapper = shallow(<Cost history={historyMock}></Cost>);
    expect(wrapper).toBeDefined();
  });

  // it('Clic start button', () => {
  //   const wrapper = shallow(<Cost history={historyMock}></Cost>);
  //   const container = wrapper.find('.cost-button');
  //   expect(container.length).toBe(2);
  //   container.at(0).prop('onClick')({});
  // });

  // it('Clic register button', () => {
  //   const wrapper = shallow(<Cost history={historyMock}></Cost>);
  //   const container = wrapper.find('.cost-button');
  //   expect(container.length).toBe(2);
  //   container.at(1).prop('onClick')({});
  // });
});
