import { shallow } from 'enzyme';
import { Modal } from './index';

describe('Test modal', () => {
  it('Render open modal', () => {
    const wrapper = shallow(<Modal showModal={true} />);
    expect(wrapper).toBeDefined();
  });
  it('Render close modal', () => {
    const wrapper = shallow(<Modal showModal={false} />);
    expect(wrapper).toBeDefined();
  });
});
