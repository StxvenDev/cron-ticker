const { syncDB } = require("../../tasks/sync-db");

describe('test in sync-db.js', () => {
  test('should execute task twice', async () => {
    syncDB();
    const times = syncDB();
    expect(times).toBe(2);
  });
});