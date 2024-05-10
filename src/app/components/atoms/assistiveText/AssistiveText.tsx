import React from 'react';
import IAssistiveText from './interface';
import './AssistiveText.scss';

/**
 * AssistiveText atom
 * @param {boolean} errorStatus - Status of error
 * @param {string} errorValue - Value of error
 * @param {string} assistiveText - Assistive text for user
 * @returns {JSX.Element}
 */

export const AssistiveText = ({ errorStatus, errorValue, assistiveText }: IAssistiveText): JSX.Element => {
  return (
    <div className={`assistiveText ${errorStatus && 'errorText'}`}>
      {errorStatus && errorValue}
      {assistiveText && <>{assistiveText}</>}
    </div>
  );
};
