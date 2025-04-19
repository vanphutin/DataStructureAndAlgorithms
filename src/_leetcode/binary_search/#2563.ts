function countFairPairs(nums: number[], lower: number, upper: number): number {
  let ans: number = 0;
  nums.sort((a, b) => a - b);
  let n = nums.length;

  function lower_bound(
    nums: number[],
    low: number,
    high: number,
    element: number
  ): number {
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] >= element) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  for (let i = 0; i < n; i++) {
    let low = lower_bound(nums, i + 1, n - 1, lower - nums[i]);
    let hight = lower_bound(nums, i + 1, n - 1, upper - nums[i] + 1);
    ans += hight - low;
  }
  return ans;
}

console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6));
