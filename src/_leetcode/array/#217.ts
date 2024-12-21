function containsDuplicate(nums: number[]): boolean {
  const seem = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (seem.has(nums[i])) return true;
    seem.add(nums[i]);
  }
  return false;
}
console.log(containsDuplicate([3, 3]));

// function containsDuplicate(nums: number[]): boolean {
//     const set = new Set(nums);
//     return set.size !== nums.length;
// }
