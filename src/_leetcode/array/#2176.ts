function countPairs(nums: number[], k: number): number {
  let n = nums.length;
  let cnt: number = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let tepm = i * j;
      if (nums[i] == nums[j] && tepm % k === 0) {
        cnt++;
      }
    }
  }

  return cnt;
}

console.log(countPairs([1, 2, 3, 4], 1));
