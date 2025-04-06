function largestDivisibleSubset(nums: number[]): number[] {
  if (nums.length === 0) return [];

  nums.sort((a, b) => a - b);
  const n = nums.length;
  const dp: number[] = new Array(n).fill(1);
  const prev: number[] = new Array(n).fill(-1);

  let maxIdx = 0;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > dp[maxIdx]) {
      maxIdx = i;
    }
  }

  const result: number[] = [];
  while (maxIdx >= 0) {
    result.push(nums[maxIdx]);
    maxIdx = prev[maxIdx];
  }

  return result.reverse();
}
