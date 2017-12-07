const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var isRealStringRes = isRealString(4);
    expect(isRealStringRes).toBe(false);
  });
  it('should reject strings with only spaces', () => {
    var isRealStringRes = isRealString('      ');
    expect(isRealStringRes).toBe(false);
  });
  it('should allow strings with non-space characters', () => {
    var isRealStringRes = isRealString('  Pippo   ');
    expect(isRealStringRes).toBe(true);
  });
});
