import { emitEventMF } from '../eventsMF';

describe('testing funcion emit redux', () => {
  it('funcion emit redux', () => {
    emitEventMF('CHANGE_MENU', false);
  });
  it('funcion emit redux with rendered', () => {
    emitEventMF('CHANGE_MENU', false, true);
  });
  it('dispatch action', () => {
    delete window['GlobalStoreInstance'];
    window['GlobalStoreInstance'] = {
      DispatchAction: jest.fn()
    };
    emitEventMF('CHANGE_MENU', false, true);
  });
});
