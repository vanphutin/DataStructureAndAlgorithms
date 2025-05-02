// [Mảng 1 chiều cơ bản]. Bài 15. Số lớn thứ nhất và lớn thứ 2

// Cho mảng số nguyên A[] gồm N phần tử, tìm số lớn nhất và lớn thứ 2 trong mảng.
// Chú ý 2 giá trị này có thể giống nhau

function bai15(nums: number[]): number[] {
  let result: number[] = [];
  nums.sort((a, b) => a - b);

  return [nums[0], nums[1]];
}
console.log(bai15([996817, 993012, 990914, 998837]));
