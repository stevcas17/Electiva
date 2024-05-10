require('fake-indexeddb/auto');
import axios from 'axios';
import forceLogout from '../force-logout';
jest.mock('../../tools/ngforage.config');

jest.mock('../../app/services/Api-service', () => ({
  forceLocalLogout: () => Promise.resolve({ idToken: '221254', accessToken: '123456789' })
}));

jest.mock('axios', () => {
  const mAxiosInstance = {
    post: jest.fn(),
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() }
    }
  };
  return {
    create: jest.fn(() => mAxiosInstance)
  };
});

describe('Force Logout test function', () => {
  it('Force Logout resolved', async () => {
    localStorage.setItem('username', 'test-username');
    localStorage.setItem('sessionUserImage', 'test-sessionUserImage');
    localStorage.setItem('tokens', 'test-tokens');
    localStorage.setItem('_user', 'test-_user');
    localStorage.setItem('user_info', 'test-user_info');
    localStorage.setItem('redux-store', 'test-redux-store');
    localStorage.setItem('flow-vinculation', 'test-flow-vinculation');

    expect(localStorage.getItem('username')).toBeTruthy();
    expect(localStorage.getItem('sessionUserImage')).toBeTruthy();
    expect(localStorage.getItem('tokens')).toBeTruthy();
    expect(localStorage.getItem('_user')).toBeTruthy();
    expect(localStorage.getItem('user_info')).toBeTruthy();
    expect(localStorage.getItem('redux-store')).toBeTruthy();
    expect(localStorage.getItem('flow-vinculation')).toBeTruthy();

    (axios.create().post as jest.Mocked<any>)
      .mockImplementationOnce(() => Promise.resolve('mock logoutGraphql'))
      .mockImplementationOnce(() => Promise.resolve('mock clearAuthGraphql'));
    await forceLogout();

    expect(localStorage.getItem('username')).toBeFalsy();
    expect(localStorage.getItem('sessionUserImage')).toBeFalsy();
    expect(localStorage.getItem('tokens')).toBeFalsy();
    expect(localStorage.getItem('_user')).toBeFalsy();
    expect(localStorage.getItem('user_info')).toBeFalsy();
    expect(localStorage.getItem('redux-store')).toBeFalsy();
    expect(localStorage.getItem('flow-vinculation')).toBeFalsy();
  });
});
