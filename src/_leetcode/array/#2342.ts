function maximumSum(nums: number[]): number {
  const sumMap = new Map<number, number>();
  let maxSum = -1;

  function getDigitSum(n: number): number {
    if (n == 0) return 0;
    return getDigitSum(Math.floor(n / 10)) + (n % 10);
  }

  for (const num of nums) {
    const digitSum = getDigitSum(num);

    if (sumMap.has(digitSum)) {
      maxSum = Math.max(maxSum, sumMap.get(digitSum)! + num);
      sumMap.set(digitSum, Math.max(sumMap.get(digitSum)!, num));
    } else {
      sumMap.set(digitSum, num);
    }
  }

  return maxSum;
}

console.log(
  maximumSum([
    229, 398, 269, 317, 420, 464, 491, 218, 439, 153, 482, 169, 411, 93, 147,
    50, 347, 210, 251, 366, 401,
  ])
);
