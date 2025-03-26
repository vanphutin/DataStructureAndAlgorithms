function minOperations(grid: number[][], x: number): number {
  const arr = grid.flat();
  if (arr.length === 1) return 0; // Nếu chỉ có 1 phần tử, đã là uni-value

  // Kiểm tra tính khả thi
  const base = arr[0];
  for (const val of arr) {
    if (Math.abs(val - base) % x !== 0) return -1;
  }

  // Sắp xếp mảng
  arr.sort((a, b) => a - b);

  // Lấy trung vị
  const median = arr[Math.floor(arr.length / 2)];

  // Tính số bước
  let operations = 0;
  for (const num of arr) {
    const diff = Math.abs(num - median);
    if (diff % x !== 0) return -1;
    operations += diff / x;
  }

  return operations;
}

// Test cases
console.log(
  minOperations(
    [
      [1, 5],
      [2, 3],
    ],
    1
  )
); // Output: 5
