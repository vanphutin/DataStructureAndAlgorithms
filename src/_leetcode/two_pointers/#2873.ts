function maximumTripletValue(nums: number[]): number {
  let max = 0;

  for (let k = 2; k < nums.length; k++) {
    let maxPrefix = nums[0];

    for (let j = 1; j < k; j++) {
      max = Math.max((maxPrefix - nums[j]) * nums[k], max);
      maxPrefix = Math.max(maxPrefix, nums[j]);
    }
  }

  return max;
}
console.log(maximumTripletValue([12, 6, 1, 2, 7]));
