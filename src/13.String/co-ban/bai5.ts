// [Xâu kí tự cơ bản]. Bài 5. Chèn dấu phẩy
// Khi viết 1 số nguyên dương quá lớn, người ta thường thêm các dấu phẩy vào giữa các chữ
// số cho dễ đọc, ví dụ số N = 123456789 được viết thành 123,456,789, N = 12345 được viết
// thành 12,345. Nhiệm vụ của bạn là thêm dấu phẩy vào số N

function bai5(n: number): string {
  let convert = n.toString();
  let cnt = 1;
  let res = "";
  for (let i = convert.length - 1; i >= 0; i--) {
    res = convert[i] + res;
    if (cnt % 3 === 0 && i != 0) res = "," + res;
    cnt++;
  }
  return res;
}
console.log(bai5(123456));

//2:25
