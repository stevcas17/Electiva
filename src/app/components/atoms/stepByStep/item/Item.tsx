import { images } from '../../../../../utils/icons/constants';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';

const Item = ({ el, i, divisor, className, logout, location }) => {
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = React.useState('');
  const [outLinedIcon, setOutlinedIcon] = React.useState({});

  useEffect(() => {
    const initialState = { ...outLinedIcon, [el.name]: el.path !== 'logout' };
    setOutlinedIcon(initialState);
    if (el.optionsList && el.optionsList.some(subEl => subEl.path == location)) {
      setActiveDropdown(el.idOption);
    }
  }, []);

  return (
    <>
      {divisor && <div className="nav-hr"></div>}
      {el.path !== 'logout' ? (
        <>
          <div className={className + ' ' + (activeDropdown === el.idOption ? 'active' : '')}>
            <img src={images[el.icon]} alt="" className="menu-item-image" />
            <div className="menu-item-title" key={i}>
              {t(`DashboardLayout.menu.options.${el.name}`)}
            </div>
            {el.optionsList.length > 0 && (
              <img
                src={images['ArrowUp']}
                alt={'arrow-up-menu'}
                className={`dropdown-menu-arrow ${el.path == location ? 'active' : ''}`}
              />
            )}
            {el.path == location && el.optionsList.length == 0 && <div className="dropdown-menu-point"></div>}
          </div>
        </>
      ) : (
        <div className={`${className} logout`}>
          <img src={images[el.icon]} alt="" className="menu-item-image" />
          <div className="menu-item-title" key={i}>
            {t(`DashboardLayout.menu.options.${el.name}`)}
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
