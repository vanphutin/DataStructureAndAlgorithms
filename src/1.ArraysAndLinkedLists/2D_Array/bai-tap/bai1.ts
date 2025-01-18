// [Mảng 2 Chiều]. Bài 1. Liệt kê các số nguyên tố trong mảng 2
// chiều

function chk_ngt(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function bai1(arr: number[][]): number[] {
  let prime: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (chk_ngt(arr[i][j])) {
        prime.push(arr[i][j]);
      }
    }
  }
  return prime;
}

console.log(
  bai1([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
