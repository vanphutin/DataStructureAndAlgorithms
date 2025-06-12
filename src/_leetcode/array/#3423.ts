function maxAdjacentDistance(nums: number[]): number {
  let n: number = nums.length;
  let lastIdx = nums[n - 1],
    firstIdx = nums[0];
  let res = Math.abs(firstIdx - lastIdx);

  for (let i = 0; i < n - 1; i++) {
    res = Math.max(res, Math.abs(nums[i] - nums[i + 1]));
  }
  return res;
}

console.log(maxAdjacentDistance([3, 2, -5, -3]));
