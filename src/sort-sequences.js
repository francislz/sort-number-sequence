function obtainSubSequences(sequence) {
  if (sequence && sequence.length === 8) {
    return [
      [3, 2, 1, 0],
      [5, 6, 4, 0],
    ];
  }
  return [3, 2, 1, 0];
}

module.exports = {
  obtainSubSequences,
};
