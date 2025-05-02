// [Mảng 1 chiều cơ bản]. Bài 24. Cửa sổ cỡ K
// Cho mảng số nguyên A[] gồm N phần tử và số nguyên K, nhiệm vụ của bạn là tìm
// tổng của mọi dãy con liên tiếp cỡ K của mảng A[]
// Gợi ý : Duyệt các chỉ số bắt đầu của các dãy con cỡ K của mảng, chỉ số này chạy
// từ i = 0, tới i = n - k.

function bai24(nums: number[], k: number): number[] {
  let result = [];
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  result.push(sum);
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    result.push(sum);
  }
  return result;
}
