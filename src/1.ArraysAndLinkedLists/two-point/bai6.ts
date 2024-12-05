// [Two Pointer]. Bài 6. 28Tech_SegCount1
// Cho mảng A[] gồm N số nguyên và số nguyên S, nhiệm vụ của bạn là đếm xem
// có bao nhiêu mảng con các phần tử liên tiếp trong mảng mà tổng không vượt quá
// S.

function bai6(a: number[], s: number): number {
  let res = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < a.length; right++) {
    sum += a[right];

    while (sum > s) {
      sum -= a[left];
      ++left;
    }
    res += right - left + 1;
  }

  return res;
}
console.log(bai6([5, 4, 5, 2, 4, 5, 1, 1, 2, 5, 5, 2, 2], 14));
