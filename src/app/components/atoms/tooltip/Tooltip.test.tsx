import { Tooltip } from './Tooltip';
import { shallow } from 'enzyme';

describe('Tooltip test atom', () => {
  it('Tooltip component exists', () => {
    const wrapper = shallow(<Tooltip theme={'dark'} info={'info-test'} />);
    expect(wrapper).toBeDefined();
  });
  it('Tooltip component expanded', () => {
    const wrapper = shallow(<Tooltip theme={'dark'} info={'info-test'} expand={true} />);
    expect(wrapper).toBeDefined();
  });
});
