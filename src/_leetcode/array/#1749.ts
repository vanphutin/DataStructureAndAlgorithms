function maxAbsoluteSum(nums: number[]): number {
  let minPrefix: number = 0,
    maxPrefix: number = 0,
    prefixsum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixsum += nums[i];

    maxPrefix = Math.max(maxPrefix, prefixsum);
    minPrefix = Math.min(minPrefix, prefixsum);
  }

  return maxPrefix - minPrefix;
}

console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2]));
