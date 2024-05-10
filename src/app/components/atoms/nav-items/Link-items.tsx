import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Link-items.scss';

export default ({ className, id, to, text }) => {
  const { t } = useTranslation();

  return (
    <Link className={`container__link ${className}`} id={id} to={to}>
      {t(text)}
    </Link>
  );
};
