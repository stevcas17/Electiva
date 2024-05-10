export interface inputFrom {
  label?: string;
  inputType?: string;
  placeholder?: string;
  value: any;
  onChange: Function;
  eventChange?: Function;
  onBlur?: Function;
  pattern?: string;
  size?: number;
  min?: string;
  max?: string;
  maxLength?: number;
  minLength?: number;
  rules?: rulesInput[];
  disabled?: boolean;
  iconLeft?: any;
  onClickIconLeft?: Function;
  iconRightCustom?: any;
  onClickIconRightCustom?: Function;
  iconRightView?: boolean;
  assistiveText?: string;
  onPaste?: any;
  tooltip?: string;
  infoMessage?: string;
  showAssistiveText?: boolean;
  success?: boolean;
  errorStatusExternal?: boolean;
  className?: any;
}

export interface rulesInput {
  name: string;
  message: string;
  size?: number;
  compare?: string;
}
