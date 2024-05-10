import { shallow } from 'enzyme';
import { icons } from '../../../../utils/icons/constants';
import UnderConstruction from './UnderConstruction';
import { historyMock } from '../../../../../__mocks__/fileMock.js';

describe('UnderConstruction test atom', () => {
  it('Render UnderConstruction atom with class', () => {
    const wrapper = shallow(<UnderConstruction history={historyMock}></UnderConstruction>);
    expect(wrapper).toBeDefined();
  });
  it('Render UnderConstruction atom with class', () => {
    const wrapper = shallow(<UnderConstruction footer={false} history={historyMock}></UnderConstruction>);
    expect(wrapper).toBeDefined();
  });
  it('go back', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<UnderConstruction footer={false} history={historyMock}></UnderConstruction>);
    const container = wrapper.find('.container__underConstruction-button');
    console.log('N', container.length);
    expect(container.length).toBe(1);
    console.log('M', container.at(0));
    container.at(0).prop('onClick')({});
  });
});
