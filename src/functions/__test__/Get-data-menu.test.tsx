import * as ngforage from '../../tools/ngforage.config';
import { mocked } from 'ts-jest/utils';
import { getDataMenu } from '../Get-data-menu';
require('fake-indexeddb/auto');

jest.mock('../../tools/ngforage.config');

const mGetIndexeddb = mocked(ngforage.getIndexeddb);

describe('GetDataMenu test function', () => {
  const value =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjpbeyJpZE9wdGlvbnMiOiIxIiwibmFtZSI6ImRhc2hib2FyZCIsInBhdGgiOiIvZGFsZS1wb3J0YWwtZnJvbnRlbmQtcG9ydGFsLWVucm9sbG1lbnQvaW5pY2lvIiwiaWNvbiI6ImRhc2hib2FyZCIsIm9yZGVyIjoiMSIsIm9wdGlvbnNMaXN0IjpbXSwiZ3JvdXAiOiIxIn0seyJpZE9wdGlvbnMiOiIyIiwibmFtZSI6InJlcG9ydHMiLCJwYXRoIjoiL2RhbGUtcGFzYXJlbGEtZnJvbnRlbmQtcmVwb3J0cy1kYXNoYm9hcmQiLCJpY29uIjoicmVwb3J0cyIsIm9yZGVyIjoiMiIsIm9wdGlvbnNMaXN0IjpbXSwiZ3JvdXAiOiIxIn1dfQ.OHY9mCJzWi_jolfKnGay5Bz29t_U9HutPY8m9mbk10c';
  afterEach(() => {
    mGetIndexeddb.mockRestore();
    mGetIndexeddb.mockClear();
    mGetIndexeddb.mockReset();
  });
  it('Get data menu resolved', () => {
    mGetIndexeddb.mockResolvedValue(value);
    getDataMenu();
  });
  it('Get data menu reject', () => {
    mGetIndexeddb.mockRejectedValue(value);
    getDataMenu();
  });
  it('Get data menu null resolved', () => {
    mGetIndexeddb.mockResolvedValue(null);
    getDataMenu();
  });
  it('Get data menu null reject', () => {
    mGetIndexeddb.mockRejectedValue(null);
    getDataMenu();
  });
});
