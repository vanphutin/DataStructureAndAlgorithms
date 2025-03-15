// [Thuật toán sinh]. Bài 6. Sinh hoán vị ngược
// Cho số nguyên dương N. Nhiệm vụ của bạn là hãy liệt kê tất cả các hoán vị của
// các số từ 1 tới N theo thứ tự ngược.

function bai6(n: number): string[] {
  let arr = Array.from({ length: n }, (_, i) => n - i);
  let result: string[] = [];
  function savePermutation(): void {
    result.push(arr.join(" "));
  }

  function nextPermutation(): boolean {
    let i = n - 2;
    while (i >= 0 && arr[i] < arr[i + 1]) i--;
    if (i < 0) return false; // Đã đạt hoán vị nhỏ nhất

    let j = n - 1;
    while (arr[j] > arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Đổi chỗ

    // Đảo ngược phần sau i để có hoán vị giảm dần tiếp theo
    let left = i + 1,
      right = n - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return true;
  }

  // Lưu hoán vị đầu tiên
  savePermutation();

  // Sinh tất cả hoán vị theo thứ tự giảm dần
  while (nextPermutation()) {
    savePermutation();
  }

  return result;
}

// Test case
console.log(bai6(3));
