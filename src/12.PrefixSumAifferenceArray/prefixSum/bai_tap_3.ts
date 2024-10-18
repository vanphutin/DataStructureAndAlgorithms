function harvestCarrots(
  N: number,
  M: number,
  garden: number[][],
  queries: number[][]
): number[] {
  // Tạo mảng cộng dồn
  const prefixSum: number[][] = Array.from({ length: N + 1 }, () =>
    Array(M + 1).fill(0)
  );

  // Tính toán mảng cộng dồn
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      prefixSum[i][j] =
        garden[i - 1][j - 1] +
        prefixSum[i - 1][j] +
        prefixSum[i][j - 1] -
        prefixSum[i - 1][j - 1];
    }
  }

  const results: number[] = [];

  // Xử lý các truy vấn
  for (const [x1, x2, y1, y2] of queries) {
    let total = prefixSum[x2][y2];
    if (x1 > 1) total -= prefixSum[x1 - 1][y2];
    if (y1 > 1) total -= prefixSum[x2][y1 - 1];
    if (x1 > 1 && y1 > 1) total += prefixSum[x1 - 1][y1 - 1];

    results.push(total);
  }

  return results;
}

// Sample Input
const N = 8;
const M = 8;
const garden = [
  [1, 1, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0, 0, 1, 0],
  [1, 1, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 0, 1, 0, 1],
];
const queries = [
  [2, 3, 1, 7],
  [2, 2, 2, 7],
  [1, 2, 1, 8],
];

// Sample Output
console.log(harvestCarrots(N, M, garden, queries));
// Expected output: [8, 3, 10]
