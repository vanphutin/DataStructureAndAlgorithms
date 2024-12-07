// [Mảng 1 Chiều]. Bài 34. Maximum distance
// Cho mảng A[] gồm N phần tử và số nguyên dương K, nhiệm vụ của bạn là tìm
// khoảng cách lớn nhất giữa 2 chỉ số i, j sao cho trị tuyệt đối của hiệu A[i] - A[j]
// bằng K.

function bai34(a: number[], k: number): number {
  const map: Map<number, number> = new Map(); // Lưu giá trị và vị trí của phần tử
  let maxDistance = -1;

  for (let i = 0; i < a.length; i++) {
    // Kiểm tra nếu tồn tại (a[i] - k) trong hash map
    if (map.has(a[i] - k)) {
      maxDistance = Math.max(maxDistance, i - map.get(a[i] - k)!);
    }
    // Kiểm tra nếu tồn tại (a[i] + k) trong hash map
    if (map.has(a[i] + k)) {
      maxDistance = Math.max(maxDistance, i - map.get(a[i] + k)!);
    }
    // Lưu giá trị hiện tại và vị trí
    if (!map.has(a[i])) {
      map.set(a[i], i);
    }
  }

  return maxDistance;
}
console.log(bai34([0, 1, 3, 0, 4, 0, 0, 3, 3, -4, 1, 0, -4, 3], 2));

// 1: 45
