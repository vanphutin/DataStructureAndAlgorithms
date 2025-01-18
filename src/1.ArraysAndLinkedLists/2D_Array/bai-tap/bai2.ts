// [Mảng 2 Chiều]. Bài 2. Tổng hàng, tổng cột trên ma trận

function bai2(arr: number[][]): { rowSums: number[]; colSums: number[] } {
  const rowSums: number[] = [];
  const colSums: number[] = new Array(arr[0].length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      rowSum += arr[i][j];
      colSums[j] += arr[i][j];
    }
    rowSums.push(rowSum);
  }
  return { rowSums, colSums };
}

const result = bai2([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log("Row sums:", result);
