import { shallow } from 'enzyme';
import { Buttons } from './Button';

describe('Image test atom', () => {
  it('Render Image atom with class', () => {
    const wrapper = shallow(
      <Buttons
        label={'button'}
        data-testid={'button'}
        className={null}
        onClick={() => 'fn-test'}
        disabled={false}
      ></Buttons>
    );
    expect(wrapper).toBeDefined();
  });

  it('Render Image with Loading', () => {
    const wrapper = shallow(
      <Buttons
        label={'button'}
        data-testid={'button'}
        className={null}
        onClick={() => 'fn-test'}
        disabled={false}
        loading={true}
      ></Buttons>
    );
    expect(wrapper).toBeDefined();
  });
});
