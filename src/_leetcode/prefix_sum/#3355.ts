function isZeroArray(nums: number[], queries: number[][]): boolean {
  const n = nums.length;
  const diff = new Array(n + 1).fill(0);

  for (const [li, ri] of queries) {
    diff[li] += 1;
    if (ri + 1 < n) {
      diff[ri + 1] -= 1;
    }
  }

  let decrements = 0;
  for (let i = 0; i < n; i++) {
    decrements += diff[i];
    if (decrements < nums[i]) {
      return false;
    }
  }

  return true;
}
console.log(
  isZeroArray(
    [4, 3, 2, 1],
    [
      [1, 3],
      [0, 2],
    ]
  )
);
