function numRabbits(answers: number[]): number {
  let freq: Map<number, number> = new Map();
  let ans: number = 0;
  for (let i = 0; i < answers.length; i++) {
    freq.set(answers[i], (freq.get(answers[i]) || 0) + 1);
  }
  for (const [x, count] of freq) {
    const groupSize = x + 1;
    const groupCount = Math.ceil(count / groupSize);
    ans += groupCount * groupSize;
  }

  return ans;
}
console.log(numRabbits([10, 10, 10]));
