/**
 * Select interface
 */
export interface selectForm {
  /**
   * Value of the select
   */
  value: options | null;
  /**
   * Function to handle the change
   */
  onChange: Function;
  /**
   * On blur function to execute when input lose focus
   */
  onBlur?: Function;
  /**
   * Event change function to execute when input change
   */
  eventChange?: Function;
  /**
   * Options of the select array
   */
  options: options[];
  /**
   * If true, shows error
   */
  checkError?: boolean;
  /**
   * If true, shows success message
   */
  checkSuccess?: boolean;
  /**
   * Message of error
   */
  messageError?: string;
  /**
   * Tooltip Message select
   */
  tooltip?: string;
  /**
   * Message of success
   */
  messageSuccess?: string;
  /**
   * Assistive text
   */
  assistiveText?: string;
  /**
   * Label of the select
   */
  label?: string;
  /**
   * Placeholder of the select
   */
  placeholder?: string;
  /**
   * Class name of select
   */
  className?: string;
  /**
   * Name of the select
   */
  name: string;
  /**
   * Id of the select
   */
  inputId: string;
  /**
   * Data test id of the select
   */
  dataTestid: string;
  /**
   * If true, disable the select
   */
  disabled?: boolean;

  /**
   * If true, enables the search function in the select
   */
  searcheable?: boolean;

  /**
   * Id of the select
   */
  selectId?: string;
  /**
   * lightTheme the select
   */
  lightTheme?: boolean;
}

/**
 * Options interface
 */

export interface options {
  /**
   * Label of the option
   */
  label: string;
  /**
   * Value of the option
   */
  value: string;
}
