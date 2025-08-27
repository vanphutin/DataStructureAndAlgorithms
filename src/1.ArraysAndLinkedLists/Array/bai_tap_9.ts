function baiTap9(nums: number[]) {
  let dd = new Array(1001).fill(0);
  for (let i = 0; i < nums.length; i++) {
    dd[nums[i]]++;
  }
  for (let i = 0; i < dd.length; i++) {
    if (dd[i] > 0) {
      console.log(i + "->", dd[i]);
    }
  }
}

console.log(baiTap9([2, 1, 2, 3, 4, 8, 2, 3]));
