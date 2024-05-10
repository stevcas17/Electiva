import React from 'react';
import './Popup-body.scss';

export default ({ id, label }) => {
  return (
    <>
      {label && (
        <div className="popup-body" id={id}>
          <label>{label}</label>
        </div>
      )}
    </>
  );
};
