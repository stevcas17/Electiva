import { setTealium } from '../tealium';

describe('Tealium test function', () => {
  it('Set tealium fuction', () => {
    delete window['GlobalStoreInstance'];
    window['GlobalStoreInstance'] = {
      DispatchAction: jest.fn()
    };
    const structureTest: IDataTealiumStructure = {
      path_name: 'name-test',
      tealium_event: 'event-test',
      event_category: 'category-test',
      event_label: 'label-test'
    };
    setTealium('type-test', structureTest, 'type-test');
  });
});
