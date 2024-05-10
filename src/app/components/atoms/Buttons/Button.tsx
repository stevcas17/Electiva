import React from 'react';
// style
import './Button.scss';
// interface
import { BtnInterface } from './interface';
export const Buttons = ({ label, dataTestid, id, className, onClick, disabled, loading }: BtnInterface) => {
  return (
    <button
      id={id}
      data-testid={dataTestid}
      className={`container__button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <div className="loadingButton">Loading...</div> : label}
    </button>
  );
};
