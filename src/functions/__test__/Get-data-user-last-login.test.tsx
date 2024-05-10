import * as ngforage from '../../tools/ngforage.config';
import { mocked } from 'ts-jest/utils';
import GetDataLastLogin from '../Get-data-user-last-login';
require('fake-indexeddb/auto');

jest.mock('../../tools/ngforage.config');

const mGetIndexeddb = mocked(ngforage.getIndexeddb);

describe('GetDataLastLogin test function', () => {
  const value = 'test-value';
  it('Get data commerce resolved', () => {
    mGetIndexeddb.mockResolvedValue(value);
    GetDataLastLogin();
  });
});
