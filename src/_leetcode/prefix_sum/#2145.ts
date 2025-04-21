function numberOfArrays(
  differences: number[],
  lower: number,
  upper: number
): number {
  let x = 0,
    y = 0,
    cur = 0;
  for (let d of differences) {
    cur += d;
    x = Math.min(x, cur);
    y = Math.max(y, cur);
    if (y - x > upper - lower) {
      return 0;
    }
  }
  return upper - lower - (y - x) + 1;
}
console.log(numberOfArrays([3, -4, 5, 1, -2], -4, 5));
