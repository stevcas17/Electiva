import * as ngforage from './ngforage.config';

require('fake-indexeddb/auto');

describe('testing indexeddb', () => {
  const value = 'test-value';

  it('Store information into db', async () => {
    const dbResp = await ngforage.setIndexeddb('productBond', 'test-key', value);
    expect(dbResp).toBeDefined();
  });

  it('Read information into db', async () => {
    const dbResp = await ngforage.getIndexeddb('productBond', 'test-key');
    expect(dbResp).toBeDefined();
    expect(dbResp).toBe(value);
  });

  it('Read all information into db', async () => {
    await ngforage.setIndexeddb('productBond', 'test-other-key', 'test-other-value');
    const dbResp = await ngforage.getAllIndexeddb('productBond');
    expect(dbResp).toBeDefined();
    expect(dbResp).toContain(value);
    expect(dbResp.length).toBe(2);
  });

  it('Delete information into db', async () => {
    await ngforage.setIndexeddb('productBond', 'test-some-key', 'test-some-value');
    await ngforage.delIndexeddb('productBond', 'test-some-key');
    const dbResp = await ngforage.getAllIndexeddb('productBond');
    expect(dbResp).toBeDefined();
    expect(dbResp).not.toContain('test-some-value');
    expect(dbResp).toContain(value);
    expect(dbResp.length).toBe(2);
  });

  it('Delete all information into db', async () => {
    await ngforage.dropIndexeddb('productBond');
    const dbResp = await ngforage.getAllIndexeddb('productBond');
    expect(dbResp).toBeDefined();
    expect(dbResp).not.toContain(value);
    expect(dbResp.length).toBe(0);
    await ngforage.closeddb();
  });
});
