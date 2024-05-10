import cleanDataLogout from '../clean-data-logout';
import * as ngforage from '../../tools/ngforage.config';
import { mocked } from 'ts-jest/utils';

jest.mock('../../tools/ngforage.config');

const mDropIndexed = mocked(ngforage.dropIndexeddb);

describe('testing clean data logout', () => {
  it('service post logout', () => {
    cleanDataLogout(true);
  });

  it('catch clean data', () => {
    mDropIndexed.mockRejectedValue(null);
    cleanDataLogout(false);
  });

  it('should clean the data when function executed', async () => {
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

    await cleanDataLogout(false);

    expect(localStorage.getItem('username')).toBeFalsy();
    expect(localStorage.getItem('sessionUserImage')).toBeFalsy();
    expect(localStorage.getItem('tokens')).toBeFalsy();
    expect(localStorage.getItem('_user')).toBeFalsy();
    expect(localStorage.getItem('user_info')).toBeFalsy();
    expect(localStorage.getItem('redux-store')).toBeFalsy();
    expect(localStorage.getItem('flow-vinculation')).toBeFalsy();
  });
});
