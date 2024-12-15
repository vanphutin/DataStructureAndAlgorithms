function thirdMax(nums: number[]): number {
  //   let set = ;
  let res = Array.from(new Set<number>(nums));
  res.sort((a, b) => b - a);
  if (res.length < 3) {
    return res[0];
  }

  return res[2];
}
thirdMax([2, 1]);
