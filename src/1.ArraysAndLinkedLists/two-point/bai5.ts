// [Two Pointer]. Bài 5. Phát quà Noel 2
// Nhân dịp lễ Giáng Sinh 2022, 28Tech tổ chức phát quà cho các bạn nhỏ. Có N
// món quà được xếp thành hàng ngang, mỗi món quà đều có khối lượng cho trước.
// Tí là một đứa trẻ không như nhiều đứa trẻ khác, Tí chỉ muốn chọn ít phần quà
// càng tốt miễn là tổng các phần quà này lớn hơn hoặc bằng S. Tí chỉ có thể lựa

// chọn các phần quà đặt cạnh nhau, bạn hãy xác định xem Tí có thể chọn tối thiểu
// bao nhiêu phần quà để tổng khối lượng của các phần quà lớn hơn hoặc bằng S.

function bai5(a: number[], s: number): number {
  let res = 1e9;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < a.length; right++) {
    sum += a[right];

    while (sum >= s) {
      res = Math.min(res, right - left + 1);
      sum -= a[right];
      -++right;
    }
  }
  if (res === 1e9) return -1;

  return res;
}
console.log(bai5([4, 4, 5, 1, 3, 1, 3, 4, 1, 1, 5, 4, 1, 4], 14));
