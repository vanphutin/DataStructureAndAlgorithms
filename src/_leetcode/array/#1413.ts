function minStartValue(nums: number[]): number {
  let prefixSum: number[] = [nums[0]],
    itr = 0,
    hasMin: boolean = true;

  for (let i = 1; i < nums.length; i++) {
    prefixSum.push(nums[i] + prefixSum[prefixSum.length - 1]);
  }

  while (true) {
    itr++;
    for (let i = 0; i < prefixSum.length; i++) {
      if (prefixSum[i] + itr < 1) {
        hasMin = false;
        break;
      }
    }
    if (!hasMin) {
      hasMin = true;
      continue;
    } else {
      break;
    }
  }

  return itr;
}
console.log(minStartValue([-3, 2, -3, 4, 2]));
