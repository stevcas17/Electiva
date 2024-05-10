import React, { useEffect } from 'react';
import { images } from '../../../../utils/icons/constants';
import { useTranslation } from 'react-i18next';
import { emitEventMF } from '../../../../functions/eventsMF';

export default ({ el, i, divisor, className, logout, location, hiddeMenuMobile }) => {
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = React.useState('');
  const [outLinedIcon, setOutlinedIcon] = React.useState({});

  useEffect(() => {
    const initialState = { ...outLinedIcon, [el.name]: el.path !== 'logout' };
    setOutlinedIcon(initialState);
    if (el.optionsList && el.optionsList.some(subEl => subEl.path.split('/')[2] == location)) {
      setActiveDropdown(el.idOption);
    }
  }, []);

  const navigateOption = option => {
    if (option.toLowerCase().includes('enrollment') && window.location.pathname.includes('enrollment')) {
      emitEventMF('SET_NAVIGATION', false, option);
      hiddeMenuMobile();
    } else {
      window.location.href = option;
    }
  };

  return (
    <>
      {divisor && <div className="nav-hr"></div>}
      {el.path !== 'logout' ? (
        <>
          <div
            onClick={() => {
              if (el.optionsList.length > 0) {
                activeDropdown !== '' ? setActiveDropdown('') : setActiveDropdown(el.idOption);
                return;
              }
              navigateOption(el.path);
            }}
            onMouseOver={() => setOutlinedIcon({ ...outLinedIcon, [el.name]: false })}
            onMouseLeave={() => setOutlinedIcon({ ...outLinedIcon, [el.name]: true })}
            className={className + ' ' + (activeDropdown === el.idOption ? 'active' : '')}
          >
            <img src={images[el.icon]} alt="" className="menu-item-image" />
            <div className="menu-item-title" key={i}>
              {t(`DashboardLayout.menu.options.${el.name}`)}
            </div>
            {el.optionsList.length > 0 && (
              <img
                src={images['ArrowUp']}
                className={`dropdown-menu-arrow ${activeDropdown === el.idOption ? 'active' : ''}`}
              />
            )}
            {el.path.split('/')[2] == location && <div className="dropdown-menu-point"></div>}
          </div>
          {el.optionsList.length > 0 && (
            <div className={`dropdown-menu ${activeDropdown === el.idOption ? 'show' : ''}`}>
              {el.optionsList.map(subEl => (
                <div
                  className={`dropdown-menu-item ${subEl.path.split('/')[2] == location ? 'active' : ''}`}
                  key={subEl.idOption}
                  onClick={() => navigateOption(subEl.path)}
                >
                  <div className="dropdown-menu-icon">
                    <div className="dropdown-menu-dot"></div>
                  </div>
                  <div className="dropdown-menu-title">{t(`DashboardLayout.menu.options.${subEl.name}`)}</div>
                  {subEl.path.split('/')[2] == location && <div className="dropdown-menu-point"></div>}
                  {subEl.path.split('/')[2] != location && (
                    <img src={images['ArrowRight']} className="dropdown-menu-arrow" />
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div onClick={logout} className={`${className} logout`}>
          <img src={images[el.icon]} alt="" className="menu-item-image" />
          <div className="menu-item-title" key={i}>
            {t(`DashboardLayout.menu.options.${el.name}`)}
          </div>
        </div>
      )}
    </>
  );
};
