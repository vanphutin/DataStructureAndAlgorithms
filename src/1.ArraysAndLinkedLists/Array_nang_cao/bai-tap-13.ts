// [Mảng 1 Chiều]. Bài 13. Đổi tiền tham lam
// Tại ngân hàng có các mệnh giá bằng 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, số
// lượng tờ tiền mỗi mệnh giá là không hạn chế. Một người cần đổi số tiền có giá trị
// bằng N. Hãy xác định xem số tờ tiền ít nhất sau khi đổi là bao nhiêu?

const monney: number[] = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000].sort(
  (a, b) => (a > b ? -1 : 1)
);

function bai13(n: number): void {
  let i = 0;
  let cnt = 0;
  while (n != 0) {
    cnt += Math.floor(n / monney[i]);
    n = n % monney[i];
    i++;
  }
  console.log(cnt);
}

bai13(98);
