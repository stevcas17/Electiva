import '@testing-library/jest-dom/extend-expect';
import { ITokens } from './Axios-config';
import * as ngforage from '../../tools/ngforage.config';

import {
  requestHandlerRefreshToken,
  addHeaderEnv,
  requestHandler,
  responseHandler,
  errorHandler
} from './Axios-config';
require('fake-indexeddb/auto');

import axios from 'axios';

jest.mock('axios', () => {
  const mAxiosInstance = {
    get: jest.fn(),
    post: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() }
    }
  };
  return {
    create: jest.fn(() => mAxiosInstance),
    ...mAxiosInstance
  };
});
describe('Test header env', () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    //   process.env = { ...OLD_ENV, KEY: 'ng^Lh55jmr&gW7jDi5$LJ^^yi5SGfSI9yUf7fYkP', REACT_GRAPHQL_API:"http://localhost:3000", REACT_APPSYNC_HEADER_APIKEY:"ABCApikey", REACT_APP_ENV:"dev" }; // Make a copy
  });
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    // mockAxios.reset();
  });
  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });
  it('should add header on dev env', () => {
    process.env = {
      ...OLD_ENV,
      KEY: 'ng^Lh55jmr&gW7jDi5$LJ^^yi5SGfSI9yUf7fYkP',
      REACT_GRAPHQL_API: 'http://localhost:3000',
      REACT_APPSYNC_HEADER_APIKEY: 'ABCApikey',
      REACT_APP_ENV: 'dev'
    }; // Make a copy
    let headers = {
      'Content-Type': 'application/json',
      'x-api-key': 'abc'
    };
    headers = addHeaderEnv(headers);
    expect(headers).toMatchObject({
      'Content-Type': 'application/json',
      'x-api-key': 'abc',
      endpointEnv: 'dev'
    });
  });
  it('should add header on stg env', () => {
    process.env = {
      ...OLD_ENV,
      KEY: 'ng^Lh55jmr&gW7jDi5$LJ^^yi5SGfSI9yUf7fYkP',
      REACT_GRAPHQL_API: 'http://localhost:3000',
      REACT_APPSYNC_HEADER_APIKEY: 'ABCApikey',
      REACT_APP_ENV: 'stg'
    }; // Make a copy
    let headers = {
      'Content-Type': 'application/json',
      'x-api-key': 'abc'
    };
    headers = addHeaderEnv(headers);
    expect(headers).toMatchObject({
      'Content-Type': 'application/json',
      'x-api-key': 'abc',
      endpointEnv: 'stg'
    });
  });
  it('should not add header on pro env', () => {
    process.env = {
      ...OLD_ENV,
      KEY: 'ng^Lh55jmr&gW7jDi5$LJ^^yi5SGfSI9yUf7fYkP',
      REACT_GRAPHQL_API: 'http://localhost:3000',
      REACT_APPSYNC_HEADER_APIKEY: 'ABCApikey',
      REACT_APP_ENV: 'pro'
    }; // Make a copy
    let headers = {
      'Content-Type': 'application/json',
      'x-api-key': 'abc'
    };
    headers = addHeaderEnv(headers);

    console.log(headers);
    expect(headers).not.toHaveProperty('endpointEnv');
  });
});

describe('Test request handler for interceptor', () => {
  let originalHeaders = {
    'Content-Type': 'application/json',
    'x-api-key': 'ABCApikey'
  };
  let originalRequest = {
    headers: originalHeaders
  };

  const expectedObject = {
    'Content-Type': 'application/json',
    'x-api-key': 'ABCApikey',
    authorization: 'Bearer abc',
    endpointEnv: 'dev',
    idToken: 'abc',
    sessionid: '6100d814810736c8c8532bc3'
  };
  const expectedRefreshedTokensObject = {
    'Content-Type': 'application/json',
    'x-api-key': 'ABCApikey',
    authorization: 'Bearer def',
    endpointEnv: 'dev',
    idToken: 'ghi',
    sessionid: '6100d814810736c8c8532bc3'
  };

  const OLD_ENV = process.env;
  window.localStorage.setItem('id', JSON.stringify('6100d814810736c8c8532bc3'));
  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = {
      ...OLD_ENV,
      KEY: 'ng^Lh55jmr&gW7jDi5$LJ^^yi5SGfSI9yUf7fYkP',
      REACT_GRAPHQL_API: 'http://localhost:3000',
      REACT_APPSYNC_HEADER_APIKEY: 'ABCApikey',
      REACT_APP_ENV: 'dev'
    }; // Make a copy
  });

  afterEach(() => {
    (axios.create().get as jest.Mocked<any>).mockRestore();
    (axios.create().post as jest.Mocked<any>).mockRestore();
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });
  it('should add tokens to headers', async () => {
    await ngforage.saveTokensIndexDB({
      accessToken: 'abc',
      idToken: 'abc',
      refreshToken: 'abc123',
      dateExpirationAccessToken: new Date().getTime().toString()
    });
    const resultRequest = await requestHandler(originalRequest);
    console.log('RESULT REQUEST:', resultRequest);
    expect(resultRequest.headers).toMatchObject(expectedObject);
  });

  it('should call refresh token on expired tokens', async () => {
    const actualDate = new Date();
    let validateOk = {
      data: {
        data: {
          refreshToken: {
            accessToken: 'def',
            dateExpirationAccessToken: new Date().getTime().toString(),
            idToken: 'ghi',
            kpri: 'Ghi',
            menubar: '',
            pwExpired: 'N',
            refreshToken: 'abc123',
            sessionExpirationIn: '3600',
            sub: 'ABC123'
          }
        }
      }
    };
    actualDate.setMinutes(actualDate.getMinutes() - 1);
    let tokens: ITokens = {
      accessToken: 'abc',
      dateExpirationAccessToken: (actualDate.getTime() / 1000).toString(),
      idToken: 'abc',
      kpri: 'Ghi',
      menubar: '',
      pwExpired: 'N',
      refreshToken: 'abc123',
      sessionExpirationIn: '3600',
      sub: 'ABC123'
    };

    await ngforage.saveTokensIndexDB({
      ...tokens
    });

    await ngforage.setIndexeddb('session', 'username', 'cc12345678');

    (axios.create().post as jest.Mocked<any>).mockResolvedValueOnce(validateOk); //.mockResolvedValueOnce(accountOk);
    const resultRequest = await requestHandler(originalRequest);

    expect(resultRequest.headers).toMatchObject(expectedRefreshedTokensObject);
  });

  it('should not call refresh token on valid tokens tokens', async () => {
    const actualDate = new Date();

    actualDate.setMinutes(actualDate.getMinutes() + 7);
    let tokens: ITokens = {
      accessToken: 'abc',
      dateExpirationAccessToken: (actualDate.getTime() / 1000).toString(),
      idToken: 'abc',
      kpri: 'Ghi',
      menubar: '',
      pwExpired: 'N',
      refreshToken: 'abc123',
      sessionExpirationIn: '3600',
      sub: 'ABC123'
    };

    await ngforage.saveTokensIndexDB({
      ...tokens
    });

    await ngforage.setIndexeddb('session', 'username', 'cc12345678');

    const resultRequest = await requestHandler(originalRequest);

    expect(resultRequest.headers).toMatchObject(expectedObject);
  });
});
describe('Test request handler for refresh token client interceptor', () => {
  let originalHeaders = {
    'Content-Type': 'application/json',
    'x-api-key': 'ABCApikey'
  };
  let originalRequest = {
    headers: originalHeaders
  };

  const expectedObject = {
    'Content-Type': 'application/json',
    'x-api-key': 'ABCApikey',
    endpointEnv: 'dev'
  };

  const OLD_ENV = process.env;
  window.localStorage.setItem('id', JSON.stringify('6100d814810736c8c8532bc3'));
  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = {
      ...OLD_ENV,
      KEY: 'ng^Lh55jmr&gW7jDi5$LJ^^yi5SGfSI9yUf7fYkP',
      REACT_GRAPHQL_API: 'http://localhost:3000',
      REACT_APPSYNC_HEADER_APIKEY: 'ABCApikey',
      REACT_APP_ENV: 'dev'
    }; // Make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });
  it('should add tokens to headers', async () => {
    const resultRequest = await requestHandlerRefreshToken(originalRequest);
    console.log('RESULT REQUEST:', resultRequest);
    expect(resultRequest.headers).toMatchObject(expectedObject);
  });
});

describe('Tests for response handler for interceptor', () => {
  const OLD_ENV = process.env;
  window.localStorage.setItem('id', JSON.stringify('6100d814810736c8c8532bc3'));
  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = {
      ...OLD_ENV,
      KEY: 'ng^Lh55jmr&gW7jDi5$LJ^^yi5SGfSI9yUf7fYkP',
      REACT_GRAPHQL_API: 'http://localhost:3000',
      REACT_APPSYNC_HEADER_APIKEY: 'ABCApikey',
      REACT_APP_ENV: 'dev'
    }; // Make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });
  it('should return original response when no error is present', async () => {
    let originalResponse = {
      data: {
        data: {
          test: 'test response from services'
        }
      }
    };

    const expectedObject = {
      data: {
        errors: [
          {
            errorInfo: {
              code: 403,
              message: 'Error 403'
            }
          }
        ]
      }
    };
    const resultResponse = await responseHandler(originalResponse);
    console.log('RESULT REQUEST:', resultResponse);
    expect(resultResponse).not.toMatchObject(expectedObject);
    expect(resultResponse).toMatchObject(originalResponse);
  });
  it('should emmit a redux error when error is present and is unhandled', async () => {
    let originalResponse = {
      data: {
        errors: [
          {
            errorInfo: {
              code: 403,
              message: 'Error 403'
            }
          }
        ]
      }
    };

    const expectedObject = {
      data: {
        errors: [
          {
            errorInfo: {
              code: 403,
              message: 'Error 403'
            }
          }
        ]
      }
    };
    await expect(responseHandler(originalResponse)).rejects.toMatchObject(expectedObject.data.errors[0]);
  });

  it('should return an error when error is present and is expected', async () => {
    let originalResponse = {
      data: {
        errors: [
          {
            errorInfo: {
              code: 412,
              message: 'Error 412'
            }
          }
        ]
      }
    };

    const expectedObject = {
      data: {
        errors: [
          {
            errorInfo: {
              code: 412,
              message: 'Error 412'
            }
          }
        ]
      }
    };

    await expect(responseHandler(originalResponse)).rejects.toMatchObject(expectedObject.data.errors[0]);
  });
});

describe('Test for error handler for interceptor', () => {
  it('should response with a generic error when axios throw a network exception', async () => {
    let originalResponse = {
      data: {
        errors: [
          {
            errorInfo: {
              code: 500,
              message: 'Error 500'
            }
          }
        ]
      }
    };

    const expectedObject = {
      data: {
        errors: [
          {
            errorInfo: {
              code: 500,
              message: 'Error 500'
            }
          }
        ]
      }
    };
    await expect(errorHandler(originalResponse)).rejects.toMatchObject(expectedObject);
  });
});
