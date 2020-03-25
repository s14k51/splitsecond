const splitsecond = require('../src/splitsecond');

describe('splitsecond', () => {
  it('valid modules', () => {
    Object.keys(splitsecond).forEach((funcKey) => {
      const func = splitsecond[funcKey];

      expect(func).toEqual(expect.any(Function));
    });
  });
});
