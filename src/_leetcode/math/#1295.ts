function findNumbers(nums: number[]): number {
  let n: number = nums.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    let temp: string[] = nums[i].toString().split("");
    if (temp.length % 2 == 0) {
      cnt++;
    }
  }
  return cnt;
}
console.log(findNumbers([12, 345, 2, 6, 7896]));
