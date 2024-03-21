const { obtainSubSequences } = require('./sort-sequences');

describe('obtainSubSequences', () => {
  it('should return obtainSubSequences', () => {
    expect(obtainSubSequences()).toEqual([3, 2, 1, 0]);
  });
  it('should provide the sub sequences [3,2,1,0] and [5,6,4,0] given the sequence [3,2,1,0,5,6,4,0]', () => {
    const sequence = [3, 2, 1, 0, 5, 6, 4, 0];
    expect(obtainSubSequences(sequence)).toEqual([
      [3, 2, 1, 0],
      [5, 6, 4, 0],
    ]);
  });
});
