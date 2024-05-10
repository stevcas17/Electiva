export interface IProgressToastAlert {
  showAlert: boolean;
  handleShowAlert: Function;
  value: number;
  alertIcons: IIconsProgressToast;
  labels: ILabels;
  redirects: IRedirects;
  error: boolean;
  onCloseToast: Function;
}

interface IIconsProgressToast {
  iconFinished: string;
  iconInProgress: string;
  iconError: string;
}

interface ILabels {
  labelFinished: string;
  labelInProgress: string;
  labelError: string;
}
interface IRedirects {
  successRedirect: IDataRedirects;
  errorRedirect: IDataRedirects;
}

interface IDataRedirects {
  label: string;
  link: string;
}
