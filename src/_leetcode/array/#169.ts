function majorityElement(nums: number[]): number {
  let value: number = 0;
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    // nếu nums[i] chưa có thì set giá trị là 0 (|| 0, nếu không có ||0 thì là undefined), ngược lại đã tồn tại trong map thì +1
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  const maxLength = nums.length / 2;

  for (const [key, val] of map) {
    if (val >= maxLength) {
      value = key;
      break;
    }
  }
  return value;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
