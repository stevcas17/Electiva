import { URL_PATHS } from '../../utils/url-routes';

const initialLinkData: any = [
  {
    className: 'filled',
    id: 'home.menu.buttons.register',
    text: 'home.menu.buttons.register',
    to: URL_PATHS.PORTAL_REGISTER
  },
  // {
  //   className: 'filled',
  //   id: 'home.menu.buttons.userAval',
  //   text: 'home.menu.buttons.userAval',
  //   to: URL_PATHS.PORTAL_USER_AVAL
  // },
  {
    className: 'outlined',
    id: 'home.menu.buttons.login',
    text: 'home.menu.buttons.login',
    to: URL_PATHS.PORTAL_LOGIN
  }
];
export default initialLinkData;
