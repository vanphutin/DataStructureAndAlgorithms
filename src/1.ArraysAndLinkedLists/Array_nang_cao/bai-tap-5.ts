// [Mảng 1 Chiều]. Bài 5. Gửi thư
// Tất cả các thành phố của Lineland đều nằm trên trục tọa độ Ox. Do đó, mỗi thành
// phố được liên kết với vị trí xi - tọa độ trên trục Ox. Không có hai thành phố được
// đặt tại một điểm. Cư dân Lineland thích gửi thư cho nhau. Một người chỉ có thể
// gửi thư nếu người nhận sống ở một thành phố khác. Chi phí gửi thư chính xác
// bằng khoảng cách giữa thành phố của người gửi và thành phố của người nhận.
// Đối với mỗi thành phố, hãy tính hai giá trị mini và maxi, trong đó mini là chi phí
// tối thiểu để gửi thư từ thành phố thứ i đến một thành phố khác và maxi là chi phí
// tối đa để gửi thư từ thành phố thứ i đến một số thành phố khác
const arr = [-5, -2, 2, 7];
function bai_5(a: number[]): void {
  console.log(a[1] - a[0], a[a.length - 1] - a[0]);

  for (let i = 1; i < a.length - 1; i++) {
    let mini = Math.min(a[i] - a[i - 1], a[i + 1] - a[i]);
    let maxi = Math.max(a[i] - a[0], a[a.length - 1] - a[i]);
    console.log(mini, maxi);
  }

  console.log(a[a.length - 1] - a[a.length - 2], a[a.length - 1] - a[0]);
}

bai_5(arr);
