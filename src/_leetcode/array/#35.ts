function searchInsert(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
}

console.log(searchInsert([1, 3, 5, 6], 2));
