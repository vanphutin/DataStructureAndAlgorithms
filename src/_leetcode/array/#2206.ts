function divideArray(nums: number[]): boolean {
  let map: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (let [key, val] of map.entries()) {
    if (val % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(divideArray([1, 2, 2, 4]));
