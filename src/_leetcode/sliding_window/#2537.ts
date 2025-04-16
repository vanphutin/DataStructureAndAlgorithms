function countGood(nums: number[], k: number): number {
  const freq: Record<number, number> = {};
  let start = 0;
  let count = 0;
  let result = 0;

  for (let end = 0; end < nums.length; end++) {
    freq[nums[end]] = (freq[nums[end]] || 0) + 1;
    count += freq[nums[end]] - 1;

    while (count >= k) {
      result += nums.length - end;

      freq[nums[start]] -= 1;

      count -= freq[nums[start]];

      start++;
    }
  }

  return result;
}

console.log(countGood([1, 1, 1, 1, 1], 10));
