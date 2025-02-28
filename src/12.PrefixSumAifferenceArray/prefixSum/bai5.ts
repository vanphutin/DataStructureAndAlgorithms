// [Mảng Cộng Dồn - Mảng Hiệu]. Bài 5. Update Operation
// Cho mảng số nguyên A[] gồm N phần tử, có Q thao tác, mỗi thao tác yêu cầu các
// bạn tăng tất cả các phần tử từ chỉ số L tới chỉ số R lên K đơn vị. Bạn hãy in ra
// mảng sau khi thực hiện các thao tác trên.

function bai5(A: number[], operations: [number, number, number][]): number[] {
  let N = A.length;
  let D: number[] = new Array(N + 1).fill(0);

  // Bước 1: Cập nhật mảng hiệu dựa trên các thao tác
  for (let [L, R, K] of operations) {
    D[L] += K;
    if (R + 1 < N) {
      D[R + 1] -= K;
    }
  }
  // Bước 2: Cộng dồn để khôi phục mảng A
  let currentSum = 0;
  for (let i = 0; i < N; i++) {
    currentSum += D[i];
    A[i] += currentSum;
  }

  return A;
}

// Test case
let operations: [number, number, number][] = [
  [1, 3, 3],
  [2, 4, 2],
];

console.log(bai5([0, 0, 0, 0, 0], operations));
