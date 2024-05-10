import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiInformationOutline, mdiCheck } from '@mdi/js';
import { Tooltip } from '../index';
import { inputFrom } from './interface';
// style
import { Color } from '../../../../assets/color';
import './Input.scss';

const InputFrom = ({
  label,
  inputType,
  placeholder,
  value,
  onChange,
  eventChange,
  onBlur,
  pattern,
  size,
  min,
  max,
  maxLength,
  minLength,
  rules,
  disabled,
  iconLeft,
  onClickIconLeft,
  iconRightView,
  iconRightCustom,
  onClickIconRightCustom,
  assistiveText,
  success,
  onPaste,
  tooltip = null,
  infoMessage,
  showAssistiveText = false,
  errorStatusExternal,
  className
}: inputFrom): JSX.Element => {
  const [errorStatus, setErrorStatus] = React.useState(errorStatusExternal || false);
  const [ValueInput, setValueInput] = React.useState(value || '');
  const [errorValue, setErrorValue] = React.useState('');

  const checkRules = (rule: string, valueInput: string, sizeInput?: number, compare?: string): boolean => {
    const nineDigit = /^\d{9}$/;
    const numberExpretion = /^[0-9]+$/;
    const textSpaceExpretion = new RegExp(/^[a-zA-ZÀ-ÿ\s\u00f1\u00d1]+$/g);
    // const textSpaceExpretion = new RegExp(/^[a-zA-ZÀ-ÿ\s\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\s\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\s\u00f1\u00d1]+$/g);
    const textMayusExpretion = new RegExp(/(?=.*?[A-Z])/);
    const textMinusExpretion = new RegExp(/(?=.*?[a-z])/);
    const textNumberExpretion = new RegExp(/(?=.*?[0-9])/);
    const textCharSpecialExpretion = '/(?=.*?[=+-^$*.[]{}()?"!@#%&/\\,><\':;|_~])/';
    const addressExpresion = new RegExp(/^[0-9a-zA-Z \-#]*$/);
    const bussinessNameExpresion = new RegExp(/^[0-9a-zA-ZñÑáÁéÉíÍóÓúÚ ]*$/);
    const condition: any = {
      require: (): boolean => valueInput === '' || valueInput === null || valueInput === undefined,
      string: (): boolean => typeof valueInput !== 'string',
      number: (): boolean => (valueInput.match(numberExpretion) ? false : true),
      textSpace: (): boolean => !textSpaceExpretion.test(valueInput),
      fixedSize: (): boolean => valueInput.length !== sizeInput,
      minSize: (): boolean => valueInput.length < (sizeInput || 0),
      minDocSize: (): boolean => valueInput.length < (sizeInput || 6),
      maxSize: (): boolean => valueInput.length > (sizeInput || 10),
      equalTo: (): boolean => valueInput !== compare,
      nitSize: (): boolean => !nineDigit.test(valueInput),
      miniOneMayus: (): boolean => !textMayusExpretion.test(valueInput),
      address: (): boolean => !addressExpresion.test(valueInput),
      bussinessName: (): boolean => !bussinessNameExpresion.test(valueInput),
      miniOneMinus: (): boolean => !textMinusExpretion.test(valueInput),
      miniOneNumber: (): boolean => !textNumberExpretion.test(valueInput),
      miniOneSpecial: (): boolean => !new RegExp(textCharSpecialExpretion).test(valueInput),
      notCharSpecial: (): boolean => new RegExp(textCharSpecialExpretion).test(valueInput),
      notContaint: (): boolean => valueInput.includes(compare || '')
    };
    return condition[rule]();
  };

  const changeInput = (e: any) => {
    const newValue = e.target.value;
    const isValid = e.target.validity.valid;
    if (isValid) {
      setValueInput(newValue);
      onChange(newValue);
    }
    eventChange && eventChange();
    getRules(e);
  };

  const getRules = (e: any) => {
    const newValue = e.target.value;
    if (rules) {
      for (let i = 0; i < rules.length; i++) {
        if (rules[i].name === 'email') {
          e.preventDefault();
          break;
        }
        if (checkRules(rules[i].name, newValue, rules[i].size, rules[i].compare)) {
          setErrorStatus(true);
          setErrorValue(rules[i].message);
          break;
        }
        setErrorStatus(false);
      }
    }
  };

  useEffect(() => {
    if (value !== ValueInput) setValueInput(value);
  }, [value]);

  useEffect(() => {
    if (errorStatusExternal !== errorStatus) setErrorStatus(errorStatusExternal || false);
  }, [errorStatusExternal]);

  return (
    <div className={`container__input ${className} ${errorStatus && 'error'} ${!errorStatus && success && 'success'}`}>
      <div className="container__input-title">
        <label> {label || ''} </label>
        {tooltip && <Tooltip info={tooltip} theme={'dark'} />}
      </div>
      {/* {showAssistiveText && <div className="container__input-info">
        {infoMessage}
      </div>} */}
      {showAssistiveText && <div className="container__input-info">{infoMessage}</div>}
      <div className={`container__input-body ${disabled && 'disabled'}`}>
        {iconLeft && (
          <div className="container__input-bodyIcon" onClick={() => (onClickIconLeft ? onClickIconLeft() : {})}>
            <Icon
              path={iconLeft}
              title="Menu down"
              size={1}
              color={errorStatus ? Color.StatesError : Color.StatesSuccess}
            />
          </div>
        )}
        <input
          type={inputType || 'text'}
          placeholder={placeholder || ''}
          value={ValueInput || ''}
          onChange={e => changeInput(e)}
          pattern={pattern}
          size={size}
          min={min}
          max={max}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled}
          onPaste={onPaste}
          onBlur={e => {
            getRules(e);
            onBlur && onBlur();
          }}
        />
        {iconRightView && !iconRightCustom && (
          <div className="container__input-bodyIcon">
            <Icon
              path={errorStatus ? mdiInformationOutline : mdiCheck}
              title="Menu down"
              size={1}
              color={errorStatus ? Color.StatesError : Color.StatesSuccess}
            />
          </div>
        )}
        {iconRightCustom && (
          <div
            className="container__input-bodyIcon"
            onClick={() => (onClickIconRightCustom ? onClickIconRightCustom() : {})}
          >
            <Icon
              path={iconRightCustom}
              title="icon custom"
              size={1}
              color={errorStatus ? Color.StatesError : Color.GrayscaleLabel}
            />
          </div>
        )}
      </div>
      <div className={`container__input-assistiveText ${errorStatus && 'errorText'}`}>
        {errorStatus && errorValue}
        {assistiveText && <>{assistiveText}</>}
      </div>
    </div>
  );
};

export default InputFrom;
