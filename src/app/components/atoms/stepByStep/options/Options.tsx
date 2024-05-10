import Item from '../item/Item';
import React from 'react';
import './Options.scss';

const Options = ({ listOptions, location }) => {
  return (
    <div className="options">
      {listOptions.map((el, i) => (
        <div key={i}>
          <Item
            logout={null}
            el={el}
            i={i}
            divisor={listOptions[i - 1] && el.group != listOptions[i - 1].group ? true : false}
            className={`options__menu-item options__menu-short ${
              el.path == location || (el.optionsList && el.optionsList.some(subEl => subEl.path == location))
                ? 'active'
                : ''
            }`}
            location={location}
          ></Item>
        </div>
      ))}
    </div>
  );
};

export default Options;
