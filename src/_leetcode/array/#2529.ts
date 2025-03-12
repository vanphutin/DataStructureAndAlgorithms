function maximumCount(nums: number[]): number {
  const findFirstPositive = (arr: number[]): number => {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= 1) right = mid;
      else left = mid + 1;
    }
    return left;
  };

  const findFirstNonNegative = (arr: number[]): number => {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] >= 0) right = mid;
      else left = mid + 1;
    }
    return left;
  };

  let negCount = findFirstNonNegative(nums);
  let posCount = nums.length - findFirstPositive(nums);

  return Math.max(negCount, posCount);
}

// Test case
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
