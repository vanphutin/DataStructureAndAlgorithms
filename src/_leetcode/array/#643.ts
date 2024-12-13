function findMaxAverage(nums: number[], k: number): number {
  let max_avg = 0,
    sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  max_avg = sum / k;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    max_avg = Math.max(max_avg, sum / k);
  }
  return max_avg;
}
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
