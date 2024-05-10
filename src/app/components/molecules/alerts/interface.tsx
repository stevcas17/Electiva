export interface AlertInterface {
  message: string;
  showModal: boolean;
  onCloseFunction?: Function;
  onButtonClickFunction?: Function;
  type?: 'SUCCESS' | 'ALERT' | 'ERROR';
  showButton?: boolean;
  showCloseButton?: boolean;
  buttonContinueText?: string;
  description?: string;
  className?: string;
  loadingButton?: boolean;
  showSecondaryButton?: boolean;
  buttonSecondaryText?: string;
  onButtonSecondaryClickFunction?: Function;
  loadingSecondaryButton?: boolean;
}
