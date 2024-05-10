/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Select, { components } from 'react-select';
import { Color } from '../../../../assets/color/index';
import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown, mdiCheck } from '@mdi/js';
import { selectForm } from './interface';
import { AssistiveText, Tooltip } from '../../atoms';
import './SelectForm.scss';

/**
 * Select molecule
 * @param {string} value Value of the select
 * @param {function} onChange Function to handle the change
 * @param {options} options Options of the select
 * @param {function} onBlur Function to execute when input lose focus
 * @param {boolean} checkError If true, shows error
 * @param {string} messageError Message of error
 * @param {boolean} checkSuccess If true, shows success message
 * @param {string} messageSuccess Message of success
 * @param {string} assistiveText Assistive text
 * @param {string} label Label of the select
 * @param {string} placeholder Placeholder of the select
 * @param {string} className Class name of select
 * @param {function} eventChange Function to execute when input change
 * @param {string} name Name of the select
 * @param {string} inputId Id of the select
 * @param {string} dataTestid Data test id of the select
 * @param {boolean} disabled If true, disable the select
 *
 * @returns {JSX.Element}
 */

export const SelectForm = ({
  value,
  onChange,
  options,
  onBlur,
  checkError,
  messageError,
  checkSuccess,
  assistiveText,
  label,
  placeholder,
  className,
  tooltip = null,
  eventChange,
  name,
  inputId,
  dataTestid,
  disabled,
  searcheable = true,
  selectId,
  lightTheme = false
}: selectForm): JSX.Element => {
  const [ValueSelect, setValueSelect] = useState(null);

  const changeSelect = (e: any) => {
    const newValue = e;
    setValueSelect(newValue);
    onChange(newValue);
    eventChange && eventChange();
  };

  useEffect(() => {
    if (value && value !== ValueSelect && value.value !== '') setValueSelect(value);
  }, [value]);

  const getCSSColor = param => {
    return getComputedStyle(document.documentElement).getPropertyValue(param);
  };

  const colors = {
    GrayscaleLine: getCSSColor('--states-error'),
    StatesError: getCSSColor('--states-error'),
    StatesSuccess: getCSSColor('#00f6b4'),
    GrayscaleLabel: getCSSColor('--primary-dark-600'),
    GrayscaleInput: !lightTheme ? getCSSColor('--gou-grayscale-light-100') : '#ffffff',
    GrayscaleLight100: getCSSColor('--gou-grayscale-light-100'),
    GrayscaleLight200: '#cfd8e6',
    GrayscaleLight400: getCSSColor('--gou-grayscale-light-400')
  };

  return (
    <div className={`selectForm ${className ? className : ''}`}>
      <div className="selectForm__title">
        <label htmlFor={inputId} data-testid={inputId}>
          {label}
        </label>
        {tooltip && <Tooltip info={tooltip} theme={!lightTheme ? 'light' : 'dark'} />}
      </div>

      <Select
        id={selectId}
        name={name}
        inputId={inputId}
        data-testid={dataTestid}
        components={{
          DropdownIndicator: props => {
            return (
              <components.DropdownIndicator {...props}>
                <Icon
                  path={
                    props.selectProps.menuIsOpen
                      ? mdiChevronUp
                      : props.isDisabled
                      ? mdiChevronDown
                      : checkError
                      ? mdiChevronDown
                      : checkSuccess
                      ? mdiCheck
                      : mdiChevronDown
                  }
                  title="Menu down"
                  size={1}
                  color={
                    props.isDisabled
                      ? colors.GrayscaleLight200
                      : checkError
                      ? colors.GrayscaleLight400
                      : checkSuccess
                      ? colors.StatesSuccess
                      : colors.GrayscaleLabel
                  }
                />
              </components.DropdownIndicator>
            );
          }
        }}
        value={ValueSelect}
        onChange={(e: any) => changeSelect(e)}
        onBlur={() => (onBlur ? onBlur() : {})}
        placeholder={placeholder}
        options={options}
        isDisabled={disabled ? true : false}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: Color.Grayscale,
            primary25: colors.GrayscaleInput,
            primary50: colors.GrayscaleInput,
            neutral0: Color.White,
            neutral20: colors.GrayscaleLabel
          }
        })}
        isSearchable={searcheable}
        styles={{
          control: (provided, state) => ({
            ...provided,
            background: state.isFocused
              ? Color.White
              : state.isDisabled
              ? colors.GrayscaleLight100
              : checkError
              ? Color.StatesErrorInput
              : ValueSelect !== null
              ? colors.GrayscaleLight200
              : checkSuccess
              ? Color.StatesSuccessInput
              : colors.GrayscaleInput,
            borderColor: checkError ? Color.StatesError : checkSuccess ? Color.StatesSuccess : colors.GrayscaleInput,
            borderWidth: 0,
            minHeight: '56px',
            borderRadius: '12px'
          }),
          indicatorSeparator: provided => ({
            ...provided,
            width: '0px'
          }),
          indicatorsContainer: provided => ({
            ...provided,
            color: colors.GrayscaleLabel
          }),
          placeholder: (provided, state) => ({
            ...provided,
            color: state.isDisabled ? colors.GrayscaleLight200 : colors.GrayscaleLight400,
            fontSize: '16px',
            fontWeight: '500'
          }),
          singleValue: (provided, state) => ({
            ...provided,
            color: state.isDisabled ? colors.GrayscaleLight200 : '',
            fontWeight: '500'
          })
        }}
      />

      <AssistiveText assistiveText={assistiveText} errorValue={messageError} errorStatus={checkError} />
    </div>
  );
};
