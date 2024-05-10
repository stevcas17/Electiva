import { shallow } from 'enzyme';
import { images } from '../../../../utils/icons/constants';
import NavItems from './Nav-items';

describe('Navbar test atom', () => {
  it('Render Navbar atom with class', () => {
    const item = {
      exact: true,
      activeClassName: 'active',
      id: 'home.page_products_button',
      to: '/productos',
      content: {
        text: 'home.menu.buttons.products',
        icon: images.InstagramImage
      }
    };
    const wrapper = shallow(
      <NavItems
        activeClassName={item.activeClassName}
        className={'menu-item'}
        id={item.id}
        to={item.to}
        text={item.content.text}
        classnameText={'menu-item-title'}
        image={item.content.icon}
        classNameImage={null}
        altImage={null}
        widthImage={null}
        heightImage={null}
      ></NavItems>
    );
    expect(wrapper).toBeDefined();
  });
});
