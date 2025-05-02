// [Mảng 1 chiều cơ bản]. Bài 2. Trung bình cộng nguyên tố
// Cho mảng số nguyên A[] gồm N phần tử, nhiệm vụ của bạn là tính trung bình
// cộng của các số là số nguyên tố trong dãy. Dữ liệu đảm bảo có ít nhất 1 phần tử
// là số nguyên tố trong dãy.

function isNguyenTo(n: number): boolean {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function bai2(arr: number[]) {
  let avg: number = 0;
  let cnt: number = 0;
  let n: number = arr.length;
  for (let i = 0; i < n; i++) {
    if (isNguyenTo(arr[i])) {
      cnt++;
      avg += arr[i];
    }
  }
  return (avg / cnt).toFixed(3);
}
console.log(bai2([-911, 234, 151, 347, 231]));
