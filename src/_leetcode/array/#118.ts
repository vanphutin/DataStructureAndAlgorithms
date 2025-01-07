let C: number[][] = [];
let mod = 1e9 + 7;
function init() {
  C = Array.from({ length: 1000 }, () => Array(1000).fill(0)); // Khởi tạo mảng hai chiều

  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j <= i; j++) {
      // tinh C[i][j] to hop chap j cua i
      if (j == 0 || i == j) {
        C[i][j] = 1;
      } else {
        C[i][j] = (C[i - 1][j - 1] + C[i - 1][j]) % mod; // Công thức Pascal
      }
    }
  }
}

function generate(numRows: number): number[][] {
  init();
  let triangle: number[][] = []; // Mảng hai chiều để lưu Pascal's Triangle
  for (let i = 0; i < numRows; i++) {
    let row: number[] = []; // Mảng con cho mỗi hàng
    for (let j = 0; j <= i; j++) {
      row.push(C[i][j]); // Thêm giá trị từ bảng C
    }
    triangle.push(row); // Thêm hàng vào tam giác
  }
  return triangle;
}

console.log(generate(5));
