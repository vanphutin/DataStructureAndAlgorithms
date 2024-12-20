function getConcatenation(nums: number[]): number[] {
  let res: number[] = [...nums];
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i]);
  }
  return res;
}
console.log(getConcatenation([1, 2, 1]));
