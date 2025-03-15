function minCapability(nums: number[], k: number): number {
  let left: number = Math.min(...nums);
  let right: number = Math.max(...nums);

  function canRob(cap: number): boolean {
    let count: number = 0,
      i: number = 0;
    while (i < nums.length) {
      if (nums[i] <= cap) {
        count++;
        i++;
      }
      i++;
    }
    return count >= k;
  }

  while (left < right) {
    let mid: number = Math.floor((left + right) / 2);
    if (canRob(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
}
console.log(minCapability([2, 3, 5, 9], 2));
