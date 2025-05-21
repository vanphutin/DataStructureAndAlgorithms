/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let zeroinFirstCol = false;

  // Duyệt qua ma trận để đánh dấu các hàng và cột cần chuyển thành 0
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) zeroinFirstCol = true;
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0; // Đánh dấu hàng
        matrix[0][col] = 0; // Đánh dấu cột
      }
    }
  }

  // Duyệt ngược lại ma trận để đặt các giá trị thành 0
  for (let row = matrix.length - 1; row >= 0; row--) {
    for (let col = matrix[0].length - 1; col >= 1; col--) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
    if (zeroinFirstCol) {
      matrix[row][0] = 0;
    }
  }
}

// Ví dụ sử dụng:
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setZeroes(matrix);
console.log(matrix);
// Kết quả: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
