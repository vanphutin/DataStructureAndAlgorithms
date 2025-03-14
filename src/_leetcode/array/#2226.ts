function maximumCandies(candies: number[], k: number): number {
  if (candies.reduce((sum, c) => sum + c, 0) < k) return 0;

  let left = 1,
    right = Math.max(...candies);
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = candies.reduce((sum, c) => sum + Math.floor(c / mid), 0);

    if (count >= k) {
      result = mid; // Cập nhật kết quả tạm thời
      left = mid + 1; // Thử tìm số lớn hơn
    } else {
      right = mid - 1; // Giảm số lượng để tìm giá trị nhỏ hơn
    }
  }

  return result;
}
