// [Two Pointer]. Bài 7. 28Tech_SegCount2
// Cho mảng A[] gồm N số nguyên và số nguyên S, nhiệm vụ của bạn là đếm xem
// có bao nhiêu mảng con các phần tử liên tiếp trong mảng mà tổng ít nhất bằng S

function bai7(a: number[], s: number): number {
  let res = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < a.length; right++) {
    sum += a[right];

    // Kiểm tra khi tổng >= S
    while (sum >= s) {
      res += a.length - right; // Mảng con kết thúc từ `right` đều thỏa mãn
      sum -= a[left];
      left++;
    }
  }

  return res;
}
console.log(bai7([2, 6, 4, 3, 6, 8, 9], 20));

//1:12 video 4
