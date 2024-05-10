import { shallow } from 'enzyme';
import { icons } from '../../../../utils/icons/constants';
import TabPanels from './TabPanels';

describe('TabPanels test atom', () => {
  it('Render TabPanels atom with class', () => {
    const wrapper = shallow(<TabPanels value={'valueQuestions'} index={0}></TabPanels>);
    expect(wrapper).toBeDefined();
  });

  it('Render TabPanels  ===', () => {
    const wrapper = shallow(<TabPanels value={1} index={1}></TabPanels>);
    expect(wrapper).toBeDefined();
  });
});
