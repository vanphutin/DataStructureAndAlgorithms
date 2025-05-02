// [Mảng 1 chiều cơ bản]. Bài 3. Số nhỏ nhất

// Cho mảng số nguyên A[] gồm N phần tử, hãy đếm xem trong mảng của bạn có
// bao nhiêu số có cùng giá trị nhỏ nhất. Ví dụ mảng A = {1, 2, 1, 3, 5} thì số nhỏ
// nhất trong mảng là 1 xuất hiện 2 lần.

function bai3(nums: number[]): number {
  let n: number = nums.length;
  let isMin: number = nums[0];
  let countMin: number = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] < isMin) {
      isMin = nums[i];
      countMin = 1;
    } else if (isMin === nums[i]) {
      countMin++;
    }
  }
  return countMin;
}

// console.log(bai3([-854, 600, 222, 472, 207]));
// console.log(bai3([1, 2, 1, 3, 5]));

function bai3_map(nums: number[]): number {
  let n: number = nums.length;
  let map: Map<number, number> = new Map();
  let isMin: number = nums[0];
  let result: number = 0;
  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (nums[i] < isMin) {
      isMin = nums[i];
    }
  }
  for (const [key, val] of map) {
    if (isMin === key) {
      result = val;
    }
  }
  return result;
}
console.log(bai3([-854, 600, 222, 472, 207]));
