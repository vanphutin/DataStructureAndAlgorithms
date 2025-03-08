function minimumRecolors(blocks: string, k: number): number {
  let minOperations = Infinity;
  let currentWCount = 0;

  // Đếm số 'W' trong cửa sổ đầu tiên có độ dài k
  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") currentWCount++;
  }

  minOperations = currentWCount; // Gán giá trị ban đầu

  // Dùng sliding window để kiểm tra tất cả các đoạn con độ dài k
  for (let i = k; i < blocks.length; i++) {
    // Nếu phần tử bị loại ra là 'W', giảm số đếm
    if (blocks[i - k] === "W") currentWCount--;
    // Nếu phần tử mới thêm vào là 'W', tăng số đếm
    if (blocks[i] === "W") currentWCount++;

    // Cập nhật giá trị nhỏ nhất
    minOperations = Math.min(minOperations, currentWCount);
  }

  return minOperations;
}

// Kiểm thử
console.log(minimumRecolors("WBBWWBBWBW", 7)); // Output: 3
