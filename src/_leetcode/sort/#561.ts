function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let num = 0;
  for (let i = 0; i < nums.length; i += 2) {
    num += nums[i];
  }
  return num;
}

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
