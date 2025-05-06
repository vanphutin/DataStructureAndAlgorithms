function buildArray(nums: number[]): number[] {
  let res: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    res.push(nums[nums[i]]);
  }
  return res;
}

console.log(buildArray([5, 0, 1, 2, 3, 4]));
