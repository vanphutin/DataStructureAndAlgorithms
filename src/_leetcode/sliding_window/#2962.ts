function countSubarrays(nums: number[], k: number): number {
  const maxElement = Math.max(...nums); // Tìm giá trị lớn nhất trong mảng
  let ans = 0; // Biến lưu số lượng dãy con thỏa mãn
  let start = 0; // Điểm bắt đầu cửa sổ
  let maxElementsInWindow = 0; // Số lượng phần tử lớn nhất trong cửa sổ hiện tại

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === maxElement) {
      maxElementsInWindow++;
    }
    while (maxElementsInWindow === k) {
      if (nums[start] === maxElement) {
        maxElementsInWindow--;
      }
      start++;
    }
    ans += start;
  }

  return ans;
}
