function minimumOperations(nums: number[]): number {
  let n: number = nums.length;
  const seen = new Set<number>();
  for (let i = n - 1; i >= 0; i--) {
    if (seen.has(nums[i])) {
      return Math.ceil((i + 1) / 3);
    }
    seen.add(nums[i]);
  }
  return 0;
}

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]));
