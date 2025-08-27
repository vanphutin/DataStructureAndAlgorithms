function baiTap24(nums: number[], k: number): number[] {
  let res: number = 0;
  let sld: number[] = [];
  for (let i = 0; i < k; i++) {
    res += nums[i];
  }

  sld.push(res);
  for (let i = k; i < nums.length; i++) {
    res = res - nums[i - k] + nums[i];
    sld.push(res);
  }
  return sld;
}
console.log(baiTap24([5, 9, 4, 5, 5, 8, 7], 5));
