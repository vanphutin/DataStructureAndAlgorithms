function baiTap17(nums: number[]): boolean {
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    if (nums[i] !== nums[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}

console.log(
  baiTap17([
    870, 1029, 2363, 375, 2188, 6059, 6775, 495, 643, 832, 832, 643, 495, 6775,
    6059, 2188, 375, 2363, 1069, 870,
  ])
);
