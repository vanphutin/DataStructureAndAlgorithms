// [Mảng 1 Chiều]. Bài 12. Đếm tần suất số nguyên tố
// Cho một dãy số nguyên chưa biết trước số lượng phần tử, hãy đếm tần xuất hiện
// của các số nguyên tố trong dãy và in ra theo thứ tự xuất hiện trong dãy

function checkNgto(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function bai12(arr: number[]) {
  let mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (checkNgto(arr[i])) {
      mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
    }
  }
  // In kết quả theo thứ tự xuất hiện
  mp.forEach((count, num) => {
    console.log(`Số nguyên tố ${num} xuất hiện ${count} lần`);
  });
}

bai12([2, 3, 5, 3, 2, 5, 1]);
