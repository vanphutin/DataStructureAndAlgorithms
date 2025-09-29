function singleNumber(nums: number[]): number {
  let map: Map<number, number> = new Map();
  let res: number;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (value == 1) {
      res = key;
    }
  }
  return res!;
}

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
