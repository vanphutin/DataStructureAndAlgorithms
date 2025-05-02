// [Mảng 1 chiều cơ bản]. Bài 17. Mảng đối xứng
// Cho mảng số nguyên A[] gồm N phần tử, kiểm tra xem mảng có đối xứng hay
// không?

function bai18(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    if (
      (i > 0 && arr[i] * arr[i - 1] < 0) ||
      (i < n - 1 && arr[i] * arr[i + 1] < 0)
    ) {
      result.push(arr[i]);
    }
  }

  return result;
}
