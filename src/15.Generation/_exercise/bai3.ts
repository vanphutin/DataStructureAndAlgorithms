// [Thuật toán sinh]. Bài 3. Hoán vị kế tiếp 1
// Cho số tự nhiên N, bạn được cung cấp một hoán vị của N phần tử từ 1 tới N.
// Nhiệm vụ của bạn là sinh ra hoán vị kế tiếp của hoán vị được cho, nếu hoán vị
// được cho là hoán vị cuối cùng thì yêu cầu in ra hoán vị đầu tiên.

function bai3(n: number, nums: number[]): number[] {
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    --i;
  }
  if (i >= 0) {
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      --j;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let l = i + 1,
    r = n - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
  return nums;
}

console.log(bai3(6, [3, 1, 5, 6, 4, 2]));
