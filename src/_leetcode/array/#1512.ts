function numIdenticalPairs(nums: number[]): number {
  let res = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        res++;
      }
    }
  }
  return res;
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
