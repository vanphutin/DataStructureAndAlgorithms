function findRelativeRanks(score: number[]): string[] {
  const sortedScores = score
    .map((value, idx) => ({ idx, value }))
    .sort((a, b) => b.value - a.value);

  const result: string[] = new Array(score.length);

  for (let i = 0; i < sortedScores.length; i++) {
    let rank = i + 1;
    if (rank === 1) {
      result[sortedScores[i].idx] = "Gold Medal";
    } else if (rank === 2) {
      result[sortedScores[i].idx] = "Silver Medal";
    } else if (rank === 3) {
      result[sortedScores[i].idx] = "Bronze Medal";
    } else {
      result[sortedScores[i].idx] = rank.toString();
    }
  }
  return result;
}
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
