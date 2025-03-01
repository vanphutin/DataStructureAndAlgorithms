function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      //   [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
      let temp = nums[i];
      nums[i] = nums[nonZeroIndex];
      nums[nonZeroIndex] = temp;
      nonZeroIndex++;
    }
  }
  return nums;
}
console.log(applyOperations([1, 2, 2, 1, 1, 0]));
