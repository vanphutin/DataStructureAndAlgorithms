// [Two Pointer]. Bài 4. Phát quà Noel
// Nhân dịp lễ Giáng Sinh 2022, 28Tech tổ chức phát quà cho các bạn nhỏ. Có N
// món quà được xếp thành hàng ngang, mỗi món quà đều có khối lượng cho trước.
// Tèo là một đứa trẻ cũng như nhiều đứa trẻ khác chỉ muốn có càng nhiều phần
// quà càng tốt, không cần biết tới khối lượng của từng mốn quà nặng nhẹ ra sao.
// Tuy nhiên chiếc túi của Tèo chỉ mảng được trọng lượng tối đa là S. Bạn hãy xác
// định xem số lượng phần quà mà Tèo có thể lựa chọn tối đa là bao nhiêu để có thể
// không vượt quá trọng lượng tối đa mà cái túi có thể chịu được. Ngoài ra trong lúc
// chọn quà Tèo chỉ có thể chọn các phần quà xếp cạnh nhau mà thôi.

function bai4(a: number[], s: number): number {
  let sum = 0;
  let left = 0;
  let res = 0;
  for (let right = 0; right < a.length; right++) {
    sum += a[right];
    while (sum > s) {
      sum -= a[left];
      left++;
    }
    res = right - left + 1 > res ? right - left + 1 : res;
  }
  return res;
}

console.log(bai4([3, 1, 4, 1, 5, 3, 4, 1, 5, 2, 2], 15));
