function putMarbles(weights: number[], k: number): number {
  const n = weights.length;
  if (k <= 1) return 0;

  // Collect and sort the value of all n - 1 pairs.
  const pairWeights: number[] = new Array(n - 1);
  for (let i = 0; i < n - 1; i++) {
    pairWeights[i] = weights[i] + weights[i + 1];
  }
  pairWeights.sort((a, b) => a - b);

  // Get the difference between the largest k - 1 values and the smallest k - 1 values.
  let answer = 0;
  for (let i = 0; i < k - 1; i++) {
    answer += pairWeights[n - 2 - i] - pairWeights[i];
  }

  return answer;
}
