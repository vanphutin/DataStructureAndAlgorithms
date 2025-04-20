// [Quay lui-Nhánh cận]. Bài 1. Tập hợp có tổng bằng S
// Xét tất cả các tập hợp các số nguyên dương có các phần tử khác nhau và không
// lớn hơn số n cho trước. Nhiệm vụ của bạn là hãy đếm xem có tất cả bao nhiêu
// tập hợp có số lượng phần tử bằng k và tổng của tất cả các phần tử trong tập hợp
// bằng s? Các tập hợp là hoán vị của nhau chỉ được tính là một. Ví dụ với n = 9, k =
// 3, s = 23, {6, 8, 9} là tập hợp duy nhất thỏa mãn.

function bai1(n: number, k: number, s: number): number {
  let X: number[] = new Array(k + 1);
  let cnt: number = 0;
  function Try(i: number, start: number, sum: number) {
    for (let j = start; j <= n; j++) {
      X[i] = j;
      if (i === k) {
        if (sum + j > s) {
          break;
        } else if (sum + j == s) {
          cnt++;
        }
      } else {
        Try(i + 1, j + 1, sum + j);
      }
    }
  }
  Try(1, 1, 0);
  return cnt;
}

console.log(bai1(16, 8, 91));
