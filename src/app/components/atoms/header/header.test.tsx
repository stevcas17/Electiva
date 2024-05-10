import { shallow } from 'enzyme';
import { Header } from './header';

describe('Header test atom', () => {
  let windowSpy;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });
  it('Render Header atom with function', () => {
    const wrapper = shallow(<Header menuStatus={true} showMenu={() => 'Open menu on click test'}></Header>);
    expect(wrapper).toBeDefined();
  });
  it('Render Header atom without status', () => {
    windowSpy.mockImplementation(() => ({
      location: {
        origin: 'http://example'
      }
    }));
    const wrapper = shallow(<Header menuStatus={false} showMenu={() => 'Open menu on click test'}></Header>);
    expect(wrapper).toBeDefined();
    wrapper.find('.header-mobile__item--brand-mobile').at(0).prop('onClick')({});
  });
});
