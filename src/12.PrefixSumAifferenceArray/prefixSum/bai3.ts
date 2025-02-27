// [Mảng Cộng Dồn - Mảng Hiệu]. Bài 3. Thu hoạch cà rốt
// Tèo hiện tại đã bỏ làm lập trình viên và trở về về quê trồng rau nuôi cá, anh ta có
// một mảnh vườn hình chữ nhật có kích thước NxM. Anh ta chia vườn của mình
// thành NXM ô vuông và trồng vào đó một cây cà rốt, tới vụ thu hoạch có những
// cây cà rốt bị chết và có những cây cà rốt có củ, anh ta muốn biết với mỗi mảnh
// vườn hình chữ nhật bắt đầu từ hàng x1 tới hàng x2 và từ cột y1 tới cột y2 thì số
// cà rốt thu hoạch được là bao nhiêu.
// Biết rằng mảnh vườn được mô tả bởi một ma trận nhị phân, 0 tương ứng với cây
// cà rốt chất và 1 tương ứng với cây cà rốt có củ.

function bai3(
  arr: number[][],
  x1: number,
  x2: number,
  y1: number,
  y2: number
): number {
  function buildPrefixSum(arr: number[][]): number[][] {
    let N = arr.length,
      M = arr[0].length;
    let prefix: number[][] = Array.from({ length: N + 1 }, () =>
      Array(M + 1).fill(0)
    );

    // Tạo mảng prefix sum
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= M; j++) {
        prefix[i][j] =
          arr[i - 1][j - 1] +
          prefix[i - 1][j] +
          prefix[i][j - 1] -
          prefix[i - 1][j - 1];
      }
    }
    return prefix;
  }

  let prefix = buildPrefixSum(arr);

  // Tránh truy cập ngoài phạm vi mảng
  let total =
    prefix[x2][y2] -
    (x1 > 0 ? prefix[x1 - 1][y2] : 0) -
    (y1 > 0 ? prefix[x2][y1 - 1] : 0) +
    (x1 > 0 && y1 > 0 ? prefix[x1 - 1][y1 - 1] : 0);

  return total;
}

// 📌 Ví dụ sử dụng
console.log(
  bai3(
    [
      [1, 0, 1, 1],
      [0, 1, 1, 0],
      [1, 1, 0, 1],
      [0, 1, 1, 1],
    ],
    1,
    3,
    1,
    3
  )
);
