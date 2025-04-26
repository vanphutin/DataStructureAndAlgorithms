function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let count: number = 0;
  let left: number = 0;
  const dq_min: number[] = [];
  const dq_max: number[] = [];

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < minK || nums[i] > maxK) {
      dq_min.length = 0;
      dq_max.length = 0;
      left = i + 1;
      continue;
    }

    while (dq_min.length > 0 && nums[dq_min[dq_min.length - 1]] >= nums[i]) {
      dq_min.pop();
    }
    dq_min.push(i);

    while (dq_max.length > 0 && nums[dq_max[dq_max.length - 1]] <= nums[i]) {
      dq_max.pop();
    }
    dq_max.push(i);

    if (nums[dq_min[0]] === minK && nums[dq_max[0]] === maxK) {
      const start = Math.min(dq_min[0], dq_max[0]);
      count += start - left + 1;
    }
  }

  return count;
}
