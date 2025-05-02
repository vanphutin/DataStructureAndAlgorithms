// [Mảng 1 chiều cơ bản]. Bài 7. Cặp số 2

// Cho mảng số nguyên A[] gồm N phần tử, hãy tìm độ chênh lệch nhỏ nhất giữa 2
// phần tử trong mảng.

function bai7(nums: number[]): number {
  let minDiff = 1e9;
  let n: number = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    let val: number = Math.abs(nums[i] - nums[i + 1]);
    minDiff = Math.min(minDiff, val);
  }
  return n > 1 ? minDiff : -1;
}

console.log(bai7([10, 15, 3, 7, 12]));
