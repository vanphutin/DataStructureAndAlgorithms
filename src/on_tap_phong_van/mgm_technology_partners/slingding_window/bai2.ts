// [Sliding Window]. Bài 2. Maximum window
// Cho mảng A[] gồm N phần tử và số nguyên K, nhiệm vụ của bạn là in ra số lớn
// nhất và nhỏ nhất của mọi mảng con cỡ K của mảng A[]

function bai2(nums: number[], k: number) {
  let _max = -Infinity,
    _min = Infinity,
    max_sum = 0;
  let res: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    _max = Math.max(nums[i]);
    _min = Math.max(nums[i]);
    res.push(_max, _min);
  }

  for (let i = k; i < nums.length; i++) {}
}
