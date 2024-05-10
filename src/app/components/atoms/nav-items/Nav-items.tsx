import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Image } from '../image/Image';

export default ({
  activeClassName,
  className,
  id,
  to,
  text,
  classnameText,
  image,
  classNameImage,
  widthImage,
  heightImage,
  altImage
}) => {
  const { t } = useTranslation();

  return (
    <NavLink exact activeClassName={activeClassName} className={className} id={id} to={to}>
      {image && <Image src={image} className={classNameImage} alt={altImage} width={widthImage} height={heightImage} />}
      {text && <div className={classnameText}>{t(text)}</div>}
    </NavLink>
  );
};
