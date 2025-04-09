function minOperations(nums: number[], k: number): number {
  let n: number = nums.length;
  let cnt: number = 0;
  nums.sort((a, b) => a - b);
  if (nums[0] < k) return -1;
  let set: Set<number> = new Set(nums);
  for (const value of set) {
    if (value === k) {
      continue;
    }
    cnt++;
  }
  return cnt;
}

console.log(minOperations([9, 7, 5, 3], 1));
