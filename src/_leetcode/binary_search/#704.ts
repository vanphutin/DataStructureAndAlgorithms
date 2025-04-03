function search(nums: number[], target: number): number {
  let n: number = nums.length;
  let left = 0,
    right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
