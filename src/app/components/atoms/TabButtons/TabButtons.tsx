import React from 'react';

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button, index) => {
        return (
          <button
            key={index}
            className={button === activeTab ? 'active' : 'inactive'}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};
export default TabButtons;
