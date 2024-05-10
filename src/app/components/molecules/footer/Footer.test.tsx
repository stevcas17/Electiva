import { mount } from 'enzyme';
import Footer from './Footer';
import routeData from 'react-router';
describe('Footer test atom', () => {
  beforeEach(() => {
    const mockHistory = {
      pathname: '/dashboard',
      push: jest.fn()
    };
    jest.spyOn(routeData, 'useHistory').mockReturnValue(mockHistory as any);
  });
  it('Footer full settings', () => {
    const wrapper = mount(<Footer></Footer>);
    expect(wrapper).toBeDefined();
  });
  it('Footer disabled settings', () => {
    const wrapper = mount(<Footer id={'footer'} disableSitemap={false}></Footer>);
    expect(wrapper).toBeDefined();
  });
  it('Footer click options', () => {
    const wrapper = mount(<Footer id={'footer'} disableSitemap={true}></Footer>);
    const container = wrapper.find('.btn-menu');
    expect(container.length).toBe(1);
    container.at(0).prop('onClick')({});
  });
});
