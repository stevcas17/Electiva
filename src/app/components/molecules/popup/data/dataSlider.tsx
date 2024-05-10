import { images } from '../../../../../utils/icons/constants';

/**
 * Data slider information
 */
const dataSlider = [
  {
    step: 0,
    offset: 0,
    location: '/enrollment/inicio',
    name: 'dashboard',
    title: 'Recibir pagos',
    label: 'Aquí puedes elegir el (los) productos (s) Gou que más se adapte (n) a tu negocio',
    src: images.PopupDiscovery
  },
  {
    step: 0,
    offset: 0,
    location: '/dashboard/',
    name: 'reports',
    title: 'Reportes',
    label: 'Aquí puedes ver todos los movimientos de tu cuenta Gou',
    src: images.PopupAccountant
  },
  {
    step: 0,
    offset: 0,
    location: '/payments/inventory',
    name: 'inventory',
    title: 'Inventario',
    label: 'Aquí podrás manejar el inventario de tus productos',
    src: images.PopupSell
  },
  {
    step: 0,
    offset: 0,
    location: '/enrollment/ajustes',
    name: 'settings',
    title: 'Configuración',
    label: 'Aquí podrás ajustar diferentes opciones de configuración',
    src: images.PopupFix
  },
  {
    step: 0,
    offset: 0,
    location: '/enrollment/ayuda',
    name: 'help',
    title: 'Ayuda',
    label: 'Aquí puedes aclarar dudas y hablar con nosotros',
    src: images.PopupHelp
  }
];

export default dataSlider;
