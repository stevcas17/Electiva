import { shallow } from 'enzyme';
import Security from './Security';
import { historyMock } from '../../../../__mocks__/fileMock.js';

describe('Security test page', () => {
  it('Render Security page with history', () => {
    const wrapper = shallow(<Security history={historyMock}></Security>);
    expect(wrapper).toBeDefined();
  });
});
