// [Thuật toán sinh]. Bài 7. Xếp vị trí
// Cho N bạn học sinh, giáo viên muốn xếp các bạn học sinh này vào một hàng
// ngang gồm N chiếc ghế. Nhiệm vụ của bạn là liệt kê các cách sắp xếp N bạn học
// sinh này theo thứ tự tên người tăng dần về thứ tự từ điển.

function bai7(n: number, names: string[]): string[] {
  names.sort();
  let result: string[] = [];

  function savePermutation(): void {
    result.push(names.join(" "));
  }

  function sinh(): boolean {
    let i = n - 2;
    while (i >= 0 && names[i] > names[i + 1]) --i;
    if (i < 0) return false;

    let j = n - 1;
    while (names[j] <= names[i]) --j;
    [names[i], names[j]] = [names[j], names[i]];

    let left = i + 1,
      right = n - 1;
    while (left < right) {
      [names[left], names[right]] = [names[right], names[left]];
      left++;
      right--;
    }
    return true;
  }

  savePermutation();

  // Sinh tất cả hoán vị kế tiếp theo thứ tự từ điển
  while (sinh()) {
    savePermutation();
  }

  return result;
}

// Test case

console.log(bai7(3, ["Lan", "Ngoc", "Nhung"]));
