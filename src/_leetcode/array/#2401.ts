function longestNiceSubarray(nums: number[]): number {
  let maxLength = 0;
  let bitCount = new Array(32).fill(0);
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    let currNum = nums[right];
    for (let i = 0; i < 32; i++) {
      if (currNum & (1 << i)) {
        bitCount[i]++;
      }
    }

    while (left <= right && bitCount.some((count) => count > 1)) {
      let removeNum = nums[left];
      for (let i = 0; i < 32; i++) {
        if (removeNum & (1 << i)) {
          bitCount[i]--;
        }
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Testcase
console.log(longestNiceSubarray([1, 3, 8, 48, 10]));
