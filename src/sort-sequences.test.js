const { obtainSubSequences } = require('./sort-sequences');

describe('obtainSubSequences', () => {
  it('should return obtainSubSequences', () => {
    expect(obtainSubSequences()).toEqual([3, 2, 1, 0]);
  });
});
