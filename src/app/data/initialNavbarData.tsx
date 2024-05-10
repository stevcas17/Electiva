import { images } from '../../utils/icons/constants';

const initialNavbarData: any = [
  // {
  //   id: 'home.page_bussines_button',
  //   to: '/negocio',
  //   content: {
  //     text: 'home.menu.buttons.bussines',
  //     icon: images.InstagramImage
  //   }
  // },
  {
    id: 'home.page_products_button',
    to: '/productos',
    content: {
      text: 'home.menu.buttons.products',
      icon: images.PaymentGatewayIcon
    }
  },
  {
    id: 'home.page_cost_button',
    to: '/cuanto-cuesta',
    content: {
      text: 'home.menu.buttons.cost',
      icon: images.PaidIcon
    }
  },
  {
    id: 'home.page_security_button',
    to: '/tips-de-seguridad',
    content: {
      text: 'home.menu.buttons.security',
      icon: images.PrivacyIcon
    }
  },
  {
    id: 'home.page_help_button',
    to: '/ayuda',
    content: {
      text: 'home.menu.buttons.help',
      icon: images.HelpIcon
    }
  }
];
export default initialNavbarData;
