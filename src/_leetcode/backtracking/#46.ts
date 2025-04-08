function permute(nums: number[]): number[][] {
  const n = nums.length;
  const X: number[] = new Array(n);
  const used: boolean[] = new Array(n).fill(false);
  const result: number[][] = [];

  function Try(i: number) {
    for (let j = 0; j < n; j++) {
      if (!used[j]) {
        X[i] = nums[j];
        used[j] = true;

        if (i === n - 1) {
          result.push([...X]);
        } else {
          Try(i + 1);
        }
        used[j] = false;
      }
    }
  }
  Try(0);
  return result;
}
console.log(permute([1, 2, 3]));
