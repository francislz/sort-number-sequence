const { obtainSubSequences } = require('./sort-sequences');

describe('Given a sequence, we shoudl obtain the sub sequences', () => {
  it('should provide the sub sequence [3,2,1,0] for given the sequence [3,2,1,0]', () => {
    expect(obtainSubSequences([3, 2, 1, 0])).toEqual([[3, 2, 1, 0]]);
  });
  it('should provide the sub sequences [3,2,1,0] and [5,6,4,0] given the sequence [3,2,1,0,5,6,4,0]', () => {
    const sequence = [3, 2, 1, 0, 5, 6, 4, 0];
    expect(obtainSubSequences(sequence)).toEqual([
      [3, 2, 1, 0],
      [5, 6, 4, 0],
    ]);
  });
});
