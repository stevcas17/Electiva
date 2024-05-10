export const setTealium = (type: string, structure: IDataTealiumStructure, event_type?: string): void => {
  const action = {
    type: 'SET_TEALIUM',
    dataTealium: {
      status: true,
      type: type,
      event_type: event_type,
      structure: structure
    }
  };
  window['GlobalStoreInstance'] !== undefined && window['GlobalStoreInstance'].DispatchAction('Shell', action);
};
