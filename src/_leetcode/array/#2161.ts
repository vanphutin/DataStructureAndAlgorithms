function pivotArray(nums: number[], pivot: number): number[] {
  const less: number[] = [];
  const equal: number[] = [];
  const greater: number[] = [];

  for (const num of nums) {
    if (num < pivot) {
      less.push(num);
    } else if (num === pivot) {
      equal.push(num);
    } else {
      greater.push(num);
    }
  }

  return [...less, ...equal, ...greater];
}

// Test case
const nums = [9, 12, 5, 10, 14, 3, 10];
const pivot = 10;
console.log(pivotArray(nums, pivot)); // Output: [9, 5, 3, 10, 10, 12, 14]
