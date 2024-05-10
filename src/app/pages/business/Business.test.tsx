import { shallow } from 'enzyme';
import Business from './Business';
import { historyMock } from '../../../../__mocks__/fileMock.js';

describe('Business test page', () => {
  it('Render Business page with history', () => {
    const wrapper = shallow(<Business history={historyMock}></Business>);
    expect(wrapper).toBeDefined();
  });
});
