import { shallow } from 'enzyme';
import { icons } from '../../../../utils/icons/constants';
import Navbar from './Nav';
import { historyMock } from '../../../../../__mocks__/fileMock.js';

describe('Navbar test atom', () => {
  it('Render Navbar atom with class', () => {
    const wrapper = shallow(<Navbar history={historyMock}></Navbar>);
    expect(wrapper).toBeDefined();
  });
  it('onClick toogle menu', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Navbar history={historyMock}></Navbar>);
    const container = wrapper.find('.toggle-menu');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
  it('onClick toogle menu', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<Navbar history={historyMock}></Navbar>);
    const container = wrapper.find('.container__navbar-button');
    expect(container.length).toBe(2);
    container.at(0).prop('onClick')({});
    container.at(1).prop('onClick')({});
  });
});
