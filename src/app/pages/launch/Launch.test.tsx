import { shallow, mount } from 'enzyme';
import Launch from './Launch';
import { historyMock } from '../../../../__mocks__/fileMock.js';
describe('Launch test page', () => {
  it('Render Launch page with history', () => {
    const wrapper = shallow(<Launch history={historyMock}></Launch>);
    expect(wrapper).toBeDefined();
  });
});
