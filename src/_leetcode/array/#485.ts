function findMaxConsecutiveOnes(nums: number[]): number {
  let res: number = 0;
  let tmp: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      tmp = 0;
    } else {
      tmp++;
      //  res = Math.max(tmp, res)
      if (tmp > res) {
        res = tmp;
      }
    }
  }
  return res;
}

console.log(findMaxConsecutiveOnes([0, 0, 0, 1, 0, 1]));
