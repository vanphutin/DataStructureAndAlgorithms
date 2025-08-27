// Với tất cả các chỉ số i, 0 <= i < dimensions.length, dimensions[i][0] biểu diễn chiều dài và dimensions[i][1] biểu diễn chiều rộng của hình chữ nhật i. Trả về diện tích của hình chữ nhật có đường chéo dài nhất. Nếu có nhiều hình chữ nhật có đường chéo dài nhất, hãy trả về diện tích của hình chữ nhật có diện tích lớn nhất.

function areaOfMaxDiagonal(dimensions: number[][]): number {
  let _maxWidth: number = 0;
  let _maxArea: number = 0;
  let temp = 0;
  let cnt = 0;
  for (let i = 0; i < dimensions.length; i++) {
    for (let j = 0; j < dimensions[i].length - 1; j++) {
      _maxWidth = Math.sqrt(
        dimensions[i][j] * dimensions[i][j] +
          dimensions[i][j + 1] * dimensions[i][j + 1]
      );
      if (_maxWidth > temp) {
      }

      _maxArea = dimensions[i][j] * dimensions[i][j + 1];
      temp = Math.max(temp, _maxWidth);
    }
  }
  return temp;
}

console.log(
  areaOfMaxDiagonal([
    [9, 3],
    [8, 6],
  ])
);
