function singleNumber(nums: number[]): number {
  let map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  for (const [key, val] of map) {
    if (val === 1) {
      return key;
    }
  }
  return -1;
}

// sử dụng phép toán XOR

// function singleNumber(nums: number[]): number {

//     return nums.reduce((a, c) => a ^ c);

// }

console.log(singleNumber([2, 2, 1]));
