// [Mảng 1 chiều cơ bản]. Bài 6. Cặp số 1

// Cho mảng số nguyên A[] gồm N phần tử, hãy đếm xem trong mảng A[] tồn tại
// bao nhiêu cặp số A[i], A[j] với i khác j sao cho tổng của 2 phần tử này bằng số K
// cho trước.

function bai6(nums: number[], target: number): number {
  let n: number = nums.length;
  let cnt: number = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        cnt++;
      }
    }
  }
  return cnt;
}
console.log(bai6([1, 2, 3, 1, 2], 3)); // 2 (cặp (1, 2) xuất hiện 2 lần)
console.log(bai6([1, 1, 1, 1], 2)); // 6 (các cặp (1, 1) có tổng bằng 2)
console.log(bai6([5, 5, 5, 5], 10)); // 6 (các cặp (5, 5) có tổng bằng 10)
console.log(bai6([1, 3, 5, 7], 8)); // 1 (cặp (1, 7) có tổng bằng 8)
console.log(bai6([10, 20, 30, 40], 50)); // 0 (không có cặp nào có tổng bằng 50)
console.log(bai6([1, 2, 3, 4, 5], 6)); // 2 (cặp (1, 5) và (2, 4) có tổng bằng 6)
console.log(bai6([3, 2, 1, 4, 3], 6)); // 2 (cặp (3, 3) và (2, 4) có tổng bằng 6)
console.log(bai6([1, 2, 3, 4, 5, 6], 10)); // 2 (cặp (4, 6) và (5, 5) có tổng bằng 10)
console.log(bai6([3, 3, 3, 3, 3], 6)); // 10 (tất cả các cặp (3, 3) có tổng bằng 6)
