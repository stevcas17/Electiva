export const emitEventMF = (type: string, status?: boolean, data?: any): void => {
  const action = {
    SET_ERROR: {
      type: type,
      dataError: {
        status: status,
        data: data
      }
    },
    CHANGE_MENU: {
      type: type,
      dataMenu: {
        status: status
      }
    },
    CHANGE_HEADER: {
      type: type,
      dataHeader: {
        status: status
      }
    },
    SESSION_ACTIVE: {
      type: type,
      dataSession: {
        status: status
      }
    },
    SHOW_STEP: {
      type: type,
      dataShowStep: {
        status: status
      }
    },
    SET_NAVIGATION: {
      type: type,
      dataNavigation: {
        route: data
      }
    },
    CHANGE_USER_IMAGE: {
      type: type,
      dataUserImage: {
        status: status
      }
    },
    QR_VINCULATION_EVENT: {
      type: type,
      dataVinculation: {
        status: status
      }
    },
    TX_REVERSO_EVENT: {
      type: type,
      dataTxReverso: {
        status: status
      }
    },
    START_SOCKET_ACT_QR_EVENT: {
      type: type,
      dataStartSocketQr: {
        status: status
      }
    },

    DATA_VINCULATION_QR_STATE: {
      type: type,
      dataVinculationQrState: {
        status: status
      }
    }
  };
  window['GlobalStoreInstance'] !== undefined && window['GlobalStoreInstance'].DispatchAction('Shell', action[type]);
};
