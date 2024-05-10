import * as ngforage from '../../tools/ngforage.config';
import { mocked } from 'ts-jest/utils';
import getDataCommerce from '../Get-data-commerce';
require('fake-indexeddb/auto');

jest.mock('../../tools/ngforage.config');

const mGetIndexeddb = mocked(ngforage.getIndexeddb);

describe('GetDataCommerce test function', () => {
  const value = 'test-value';
  it('Get data commerce resolved', () => {
    mGetIndexeddb.mockResolvedValue(value);
    getDataCommerce();
  });
});
