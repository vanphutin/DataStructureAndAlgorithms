// [Mảng 1 Chiều]. Bài 14. Liệt kê và đếm
// Cho một dãy các số nguyên dương không quá 9 chữ số, mỗi số cách nhau vài
// khoảng trống, có thể xuống dòng. Hãy tìm các số không giảm (các chữ số theo
// thứ tự từ trái qua phải tạo thành dãy không giảm) và đếm số lần xuất hiện của
// các số đó.

function khongGiam(n: number): boolean {
  while (n >= 10) {
    let r = n % 10;
    let l = Math.floor(n / 10) % 10;
    if (r < l) return false;
    n = Math.floor(n / 10);
  }
  return true;
}

function bai14(arr: number[]): void {
  const mp1 = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    if (khongGiam(arr[i])) {
      mp1.set(arr[i], (mp1.get(arr[i]) || 0) + 1);
    }
  }
  console.log(mp1);

  // In kết quả
  mp1.forEach((value, key) => {
    console.log(`Số ${key} xuất hiện ${value} lần`);
  });
}

// Ví dụ sử dụng hàm với một mảng đầu vào
const arr11 = [888, 289, 123, 321, 54, 888];
bai14(arr11);
