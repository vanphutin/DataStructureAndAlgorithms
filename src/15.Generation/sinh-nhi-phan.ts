let final: number = 0;
let n: number = 3; // Giả sử n = 3
let arrays: number[] = new Array(100);

// Hàm khởi tạo
function khoiTao(): void {
  for (let i = 1; i <= n; i++) {
    arrays[i] = 0;
  }
}

// Thuật toán sinh
function sinh(): void {
  let i = n; // Lấy bits cuối cùng (chạy từ bit cuối cùng đến đầu bit)
  while (i >= 1 && arrays[i] == 1) {
    arrays[i] = 0;
    --i;
  }
  if (i == 0) {
    final = 1;
  } else {
    arrays[i] = 1;
  }
}

// Hàm in cấu hình hiện tại
function inCauHinh(): void {
  for (let i = 1; i <= n; i++) {
    console.log(arrays[i]);
  }
  console.log("\n");
}

// Hàm chính
function _main(): void {
  khoiTao();
  while (final == 0) {
    inCauHinh();
    sinh();
  }
}

// Chạy chương trình
_main();
