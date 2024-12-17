function runningSum(nums: number[]): number[] {
  let prefixSum: number[] = [];
  let sum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixSum.push(sum);
  }
  return prefixSum;
}

console.log(runningSum([3, 1, 2, 10, 1]));
