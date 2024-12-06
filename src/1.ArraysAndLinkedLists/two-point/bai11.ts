// [Two Pointer]. Bài 11. Sum of three values
// Cho mảng A[] gồm N phần tử và số nguyên K, hãy kiểm tra xem trong mảng có 3
// phần tử A[i], A[j], A[k] với i, j, k khác nhau và A[i] + A[j] + A[k] = K hay không ?

// CỐ ĐỊNH 1 THẰNG TRONG 3 THẰNG LẠI
function sumOfThreeValues(a: number[], k: number): string {
  // Sắp xếp mảng tăng dần
  const sortedArr = a.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 2; i++) {
    let l = i + 1, // Con trỏ trái
      r = sortedArr.length - 1; // Con trỏ phải

    // Two Pointer
    while (l < r) {
      const currentSum = sortedArr[i] + sortedArr[l] + sortedArr[r];

      if (currentSum === k) {
        return "Yes"; // Tìm thấy bộ ba
      } else if (currentSum > k) {
        r--; // Giảm tổng
      } else {
        l++; // Tăng tổng
      }
    }
  }

  return "No"; // Không tìm thấy bộ ba
}

// Test case
console.log(sumOfThreeValues([1, 7, 6, 3, 3, 1, 8], 13)); // Output: "Yes"
// done
