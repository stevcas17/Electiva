interface IDataMenu {
  status: boolean;
  rendered: boolean;
}
interface IDataHeader {
  status: boolean;
  rendered: boolean;
}

interface IDataSession {
  status: boolean;
}

interface IDataError {
  show: boolean;
  code: string;
}

interface IDataNavigation {
  route: string;
}

interface IDataShowStep {
  status: boolean;
}

interface IDataFinishRegister {
  status: boolean;
}

interface IDataTealium {
  status: boolean;
  type: string;
  event_type?: string;
  structure: IDataTealiumStructure;
}

interface IDataTealiumStructure {
  path_name?: string;
  tealium_event?: string;
  event_category?: string;
  event_label?: string;
}
interface IDataStep {
  status: boolean;
  amount?: number;
  stepActive?: number;
  stepActiveStatus?: string;
  progress?: number;
}

interface IDataBackPBG {
  previousRoute: string;
  validation: boolean;
  stepActive: number;
  stepActiveStatus: string;
  push: boolean;
  flow?: boolean;
}

interface IDataUserImage {
  status: boolean;
}
interface IDataVinculation {
  status: any;
}
interface IDataTxReverso {
  status: any;
}
interface IDataStartSocketQr {
  status: any;
}

interface IDataStartSocketReversoTx {
  status: any;
}
interface IDataVinculationQrState {
  status: any;
}

type EventState = {
  dataMenu?: IDataMenu;
  dataHeader?: IDataHeader;
  dataSession?: IDataSession;
  dataTealium?: IDataTealium;
  dataBackPBG: IDataBackPBG;
  dataStep: IDataStep;
  dataError?: IDataError;
  dataNavigation?: IDataNavigation;
  dataShowStep?: IDataShowStep;
  dataFinishRegister?: IDataFinishRegister;
  dataUserImage?: IDataUserImage;
  dataVinculation?: IDataVinculation;
  dataTxReverso?: IDataTxReverso;
  dataStartSocketQr?: IDataStartSocketQr;
  dataStartSocketReversoTx?: IDataStartSocketReversoTx;
  dataVinculationQrState?: IDataVinculationQrState;
};

type EventAction = {
  type: string;
  dataMenu?: IDataMenu;
  dataHeader?: IDataHeader;
  dataSession?: IDataSession;
  dataTealium?: IDataTealium;
  dataBackPBG?: IDataBackPBG;
  dataStep?: IDataStep;
  dataError?: IDataError;
  dataNavigation?: IDataNavigation;
  dataShowStep?: IDataShowStep;
  dataFinishRegister?: IDataFinishRegister;
  dataUserImage?: IDataUserImage;
  dataVinculation?: IDataVinculation;
  dataTxReverso?: IDataTxReverso;
  dataStartSocketQr?: IDataStartSocketQr;
  dataStartSocketReversoTx?: IDataStartSocketReversoTx;
  dataVinculationQrState?: IDataVinculationQrState;
};

type DispatchType = (args: EventAction) => EventAction;
