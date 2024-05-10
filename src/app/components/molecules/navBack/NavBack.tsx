import { useTranslation } from 'react-i18next';
// img
import { images } from '../../../../utils/icons/constants';

import { NavBackInterface } from './interface';
import './NavBack.scss';

const NavBack = ({ onNavBackFunction }: NavBackInterface) => {
  const { t } = useTranslation();

  return (
    <nav className="container__navBack">
      <div
        data-testid="btn"
        className="btn"
        onClick={e => (onNavBackFunction ? onNavBackFunction(e) : window.history.back())}
      >
        <img alt="" src={images.ArrowBack} className="img-back" />
        <span className="nav-text">{t('verifyPhone.backButtonText')}</span>
      </div>
    </nav>
  );
};

export default NavBack;
