// [Two Pointer]. Bài 8. 28Tech_SegCount3
// Cho mảng A[] gồm N số nguyên và số nguyên K, nhiệm vụ của bạn là đếm xem
// có bao nhiêu mảng con các phần tử liên tiếp trong mảng mà số lượng phần từ
// khác nhau trong mảng con này không vượt quá K.

function countSubarraysWithAtMostKDistinct(a: number[], k: number): number {
  let result = 0;
  let distinct = 0;
  let left = 0;
  const count: Map<number, number> = new Map();

  for (let right = 0; right < a.length; right++) {
    // Thêm phần tử a[right] vào cửa sổ
    if (!count.has(a[right])) {
      count.set(a[right], 0);
    }
    count.set(a[right], count.get(a[right])! + 1);

    // Nếu phần tử mới xuất hiện, tăng số lượng phần tử khác nhau
    if (count.get(a[right]) === 1) {
      distinct++;
    }

    // Thu hẹp cửa sổ khi số lượng phần tử khác nhau > k
    while (distinct > k) {
      const currentLeft = a[left];
      count.set(currentLeft, count.get(currentLeft)! - 1);

      // Nếu loại bỏ hoàn toàn phần tử currentLeft, giảm distinct
      if (count.get(currentLeft) === 0) {
        count.delete(currentLeft);
        distinct--;
      }
      left++;
    }

    // Tính số mảng con kết thúc tại `right`
    result += right - left + 1;
  }

  return result;
}

console.log(
  countSubarraysWithAtMostKDistinct([5, 4, 4, 5, 4, 4, 2, 1, 5, 2, 4], 3)
); // Output: 42

//1:12 video 4
