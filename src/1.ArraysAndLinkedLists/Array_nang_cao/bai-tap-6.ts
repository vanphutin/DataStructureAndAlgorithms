// [Mảng 1 Chiều]. Bài 6. Đếm cặp số nguyên tố cùng nhau
// Cho một dãy số nguyên dương có n phần tử. Hãy đếm các cặp số nguyên tố cùng
// nhau trong mảng.

let arr1 = [2, 4, 8, 3, 6];
function gcd(a: number, b: number): number {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

function bai6(a: number[]): number {
  let cnt = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (gcd(a[i], a[j]) == 1) {
        cnt++;
        console.log(a[i], a[j]);
      }
    }
  }
  return cnt;
}

console.log(bai6(arr1));
