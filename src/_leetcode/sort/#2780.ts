function minimumIndex(nums: number[]): number {
  const n = nums.length;
  let map: Map<number, number> = new Map();
  let mostFrequentNum = nums[0];
  let maxFreq = 0;

  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (const [val, freq] of map) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mostFrequentNum = val;
    }
  }
  let left_x = 0;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === mostFrequentNum) {
      left_x++;
    }
    const leftLength = i + 1;
    const rightLength = n - leftLength;
    const right_x = maxFreq - left_x;
    if (
      left_x > Math.floor(leftLength / 2) &&
      right_x > Math.floor(rightLength / 2)
    ) {
      return i;
    }
  }
  return -1;
}
console.log(minimumIndex([1, 2, 2, 2]));
