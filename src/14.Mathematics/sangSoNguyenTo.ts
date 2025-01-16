let prime: number[] = new Array(1000000).fill(1); // Mảng khởi tạo với tất cả các giá trị là 1
prime[0] = prime[1] = 0; // Đánh dấu 0 và 1 không phải là số nguyên tố

function sang_snt(n: number) {
  for (let i = 2; i * i <= n; i++) {
    // Chỉ cần duyệt tới sqrt(n)
    if (prime[i] === 1) {
      // Nếu i là số nguyên tố
      for (let j = i * i; j <= n; j += i) {
        // Đánh dấu các bội số của i là không phải nguyên tố
        prime[j] = 0;
      }
    }
  }
}

// Gọi hàm để tìm các số nguyên tố từ 1 đến 1000000
sang_snt(1000000);

// Kiểm tra các số nguyên tố
for (let i = 0; i < 20; i++) {
  // In ra 20 số nguyên tố đầu tiên
  if (prime[i] === 1) {
    console.log(i);
  }
}
