function pivotIndex(nums: number[]): number {
  let totalSum = nums.reduce((sum, num) => {
    return sum + num;
  }, 0);
  let leftSum: number = 0;
  for (let index = 0; index < nums.length; index++) {
    if (2 * leftSum + nums[index] === totalSum) {
      return index;
    }
    leftSum += nums[index];
  }
  return -1;
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
