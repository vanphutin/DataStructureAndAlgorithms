// Thành phố X có N thị trấn trên trục đường chính. Tọa độ của các thị trấn lần lượt
// là a[1],a[2], ..., a[N], các tọa độ này là phân biệt, không có 2 tọa độ nào trùng
// nhau. Chính quyền thành phố muốn xây dựng một tuyến buýt nhanh BRT để kết
// nối 2 thị trấn gần nhau nhất với nhau. Bạn hãy tính thử xem chiều dài của tuyến
// buýt này bằng bao nhiêu? Và có bao nhiêu cặp thị trấn có tiềm năng giống nhau
// để xây dựng tuyến BRT này.

function bai15(arr: number[]): void {
  let min_val = 1e9;
  let cnt = 0;
  arr.sort();
  for (let i = 1; i < arr.length; i++) {
    let kc = arr[i] - arr[i - 1];
    if (kc < min_val) {
      min_val = kc;
      cnt = 1;
    } else if (min_val === kc) {
      cnt++;
    }
  }
  console.log(min_val, cnt);
}

bai15([6, -3, 0, 4]);
