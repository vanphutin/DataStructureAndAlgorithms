// [Mảng 1 Chiều]. Bài 33. Minimum subarray
// Cho mảng A[] gồm N phần tử và số nguyên K, nhiệm vụ của bạn là tìm mảng con
// liên tiếp ngắn nhất có tổng các phần tử bằng K. Ví dụ với mảng A[] = {1, 1, 3, 1,
// 2, 4, 1, 1, 2} và K = 6 thì mảng con ngắn nhất có tổng bằng 6 là 2.

function bai33(a: number[], k: number): number {
  let minLength = Number.MAX_SAFE_INTEGER; // Độ dài nhỏ nhất ban đầu là vô hạn
  let prefixSum = 0; // Tổng cộng dồn
  const hashMap: Map<number, number> = new Map(); // Hash map để lưu tổng cộng dồn và chỉ số
  // Thêm giá trị 0 vào hash map với chỉ số -1
  hashMap.set(0, -1);

  for (let i = 0; i < a.length; i++) {
    prefixSum += a[i];
    // Tìm (prefixSum - k) trong hash map
    if (hashMap.has(prefixSum - k)) {
      const prevIndex = hashMap.get(prefixSum - k)!;
      const length = i - prevIndex;
      minLength = Math.min(minLength, length);
    }

    // Nếu tổng cộng dồn chưa có trong hash map, thêm vào
    if (!hashMap.has(prefixSum)) {
      hashMap.set(prefixSum, i);
    }
  }

  return minLength === Number.MAX_SAFE_INTEGER ? -1 : minLength;
}

console.log(bai33([1, 1, 1, 3, 2, 4], 6));
