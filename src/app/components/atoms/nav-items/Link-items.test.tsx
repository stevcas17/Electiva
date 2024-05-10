import { shallow } from 'enzyme';
import LinkItems from './Link-items';

describe('Link test atom', () => {
  it('Render Link atom with class', () => {
    const item = {
      className: 'outlined',
      id: 'home.menu.buttons.login',
      text: 'home.menu.buttons.login',
      to: '/inicio'
    };
    const wrapper = shallow(
      <LinkItems className={item.className} id={item.id} to={item.to} text={item.text}></LinkItems>
    );
    expect(wrapper).toBeDefined();
  });
});
