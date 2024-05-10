import SessionSocketServices from './Session-socket';
import wait from 'waait';
import { act } from 'react-dom/test-utils';
import { getIndexeddb, getTokensIndexDB, setIndexeddb } from '../../tools/ngforage.config';
import { mocked } from 'ts-jest/utils';

jest.mock('../../functions/eventsMF', () => ({
  emitEventMF: () => jest.fn()
}));

jest.mock('../../functions/commons', () => ({
  encryptMessage: value => value
}));

jest.mock('axios', () => {
  const mAxiosInstance = {
    post: jest.fn(() => ({ data: { data: { getStateVinculationQr: { status: '05' } } } })),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() }
    }
  };
  return {
    create: jest.fn(() => mAxiosInstance)
  };
});

jest.mock('./Api-service', () => ({
  getStateVinculationQr: () =>
    Promise.resolve({
      status: '200',
      data: {
        data: {
          getStateVinculationQr: {
            status: '06'
          }
        }
      }
    }),
  getStateGenerationQr: () => Promise.resolve({ status: '200' }),
  getStateTxReversing: () =>
    Promise.resolve({
      status: '200',
      data: { data: { getStateTxReversing: { status: '04', updateDate: 212121112112 } } }
    }),
  startGenerationQR: () => Promise.resolve({ status: '200' })
}));

jest.mock('../../functions/Get-data-user', () => {
  const originalModule = jest.requireActual('../../functions/Get-data-user');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => ({ commerceId: '55AS4C8EWERWE78' }))
  };
});

jest.mock('../../utils/constants', () => ({
  successVinculationQrValues: {
    QR_REGISTER_BEGIN_TRACE: '00',
    QR_REGISTER_OK_FIND_ACCOUNT_TRACE: '01',
    QR_REGISTER_SEND_CONSUMER_TRACE: '03'
  },
  successTxReverseValues: {
    QR_REGISTER_BEGIN_TRACE: '00',
    QR_REGISTER_OK_FIND_ACCOUNT_TRACE: '01',
    QR_REGISTER_SEND_CONSUMER_TRACE: '03'
  },
  errorVinculationQrValues: {
    QR_REGISTER_BEGIN_TRACE: '04',
    QR_REGISTER_OK_FIND_ACCOUNT_TRACE: '05',
    QR_REGISTER_SEND_CONSUMER_TRACE: '06'
  }
}));

jest.mock('../../tools/ngforage.config');
// jest.mock('../../tools/ngforage.config', () => ({
//   getIndexeddb: () => Promise.resolve('{sub:"prueba",accessToken:"token",idToken:"idToken", user-ip: "1.1.1.1"}'),
//   getTokensIndexDB: () => Promise.resolve('{sub:"prueba",accessToken:"token",idToken:"idToken"}')
// }));

const mock1 = mocked(getIndexeddb);
const mock2 = mocked(getTokensIndexDB);
const mock3 = mocked(setIndexeddb);

describe('Session socket test service', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    //jest.resetModules(); // Most important - it clears the cache
    process.env = {
      ...OLD_ENV,
      API_URL: 'https://localhost.com',
      APPSYNC_HEADER_APIKEY: '0011S55AWWS',
      WS_URL: 'wss://mkm2fjy2ubfzzjx642so2rojrm.appsync-realtime-api.us-east-2.amazonaws.com/graphql'
    }; // Make a copy
    mock1.mockClear();
    mock2.mockClear();
    mock3.mockClear();
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  it('service qrVinculationProgress', async () => {
    JSON.parse = jest.fn(() => ({ sub: 'test-sub' }));
    const sessionSocketService = new SessionSocketServices();
    sessionSocketService.qrVinculationProgress(() => jest.fn());
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
  }, 20000);
  it('service txReverseProgress', async () => {
    JSON.parse = jest.fn(() => ({ sub: 'test-sub' }));
    const sessionSocketServiceReverse = new SessionSocketServices();
    sessionSocketServiceReverse.txReverseProgress(() => jest.fn());
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
  }, 20000);

  it('service requestGetStateVinculationQr', async () => {
    await mock1.mockResolvedValue('{sub:"prueba",accessToken:"token",idToken:"idToken", user-ip: "1.1.1.1"}');
    await mock2.mockResolvedValue('{sub:"prueba",accessToken:"token",idToken:"idToken"}');
    await mock3.mockResolvedValue(undefined);
    JSON.parse = jest.fn(() => ({
      sub: 'test-sub',
      dateExpirationAccessToken: '3211',
      accessToken: 'accessToken',
      idToken: 'idToken'
    }));
    JSON.stringify = jest.fn(val => val);
    const sessionSocketService = new SessionSocketServices();
    sessionSocketService.requestGetStateVinculationQr('commerceId');
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
  }, 20000);

  it('service requestGetStateReversingTx', async () => {
    // await mock1.mockResolvedValue('{sub:"prueba",accessToken:"token",idToken:"idToken", user-ip: "1.1.1.1"}');
    // await mock1.mockResolvedValue(undefined);
    // await mock1.mockResolvedValue(11111111111);
    // await mock3.mockResolvedValue(undefined);
    JSON.parse = jest.fn(() => ({
      sub: 'test-sub',
      dateExpirationAccessToken: '3211',
      accessToken: 'accessToken',
      idToken: 'idToken'
    }));
    JSON.stringify = jest.fn(val => val);
    const sessionSocketService = new SessionSocketServices();
    sessionSocketService.requestGetStateReversingTx('commerceId');
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
    await act(() => wait(0));
  }, 20000);
});
