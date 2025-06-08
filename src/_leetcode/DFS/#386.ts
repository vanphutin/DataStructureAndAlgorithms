function lexicalOrder(n: number): number[] {
  const result: number[] = [];

  const generateLexicalNumbers = (currentNumber: number): void => {
    // Nếu số hiện tại vượt quá giới hạn, dừng đệ quy
    if (currentNumber > n) return;

    // Thêm số hiện tại vào kết quả
    result.push(currentNumber);

    // Thử nối thêm các chữ số từ 0 đến 9 vào số hiện tại
    for (let nextDigit = 0; nextDigit <= 9; ++nextDigit) {
      const nextNumber = currentNumber * 10 + nextDigit;
      if (nextNumber <= n) {
        generateLexicalNumbers(nextNumber);
      } else {
        break; // Không cần tiếp tục nếu nextNumber vượt quá giới hạn
      }
    }
  };

  // Bắt đầu tạo số từ 1 đến 9
  for (let start = 1; start <= 9; ++start) {
    generateLexicalNumbers(start);
  }

  return result;
}

// Ví dụ sử dụng
console.log(lexicalOrder(50)); // Kết quả: [1, 10, 11, ..., 50]
