import { shallow } from 'enzyme';

import TabButtons from './TabButtons';

describe('TabButtons test atom', () => {
  it('Render TabButtons atom with class', () => {
    const wrapper = shallow(
      <TabButtons activeTab={'Label tAB'} buttons={['buttons']} changeTab={jest.fn()}></TabButtons>
    );
    expect(wrapper).toBeDefined();
  });
});
