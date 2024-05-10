import { mount } from 'enzyme';
import { FooterHome } from './FooterHome';
import routeData from 'react-router';
describe('FooterHome test atom', () => {
  beforeEach(() => {
    const mockHistory = {
      pathname: '/dashboard',
      push: jest.fn()
    };
    jest.spyOn(routeData, 'useHistory').mockReturnValue(mockHistory as any);
  });
  it('FooterHome full settings', () => {
    const wrapper = mount(<FooterHome></FooterHome>);
    expect(wrapper).toBeDefined();
  });
});
