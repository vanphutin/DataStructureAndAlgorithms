// [Mảng Cộng Dồn - Mảng Hiệu]. Bài 1. Xây dựng mảng cộng dồn
// Cho mảng số nguyên A[] gồm N phần tử, mảng cộng dồn của A[] là mảng F[] với
// tính chất F[i] lưu tổng các phần tử từ chỉ số 0 tới chỉ số i của mảng A[]. Bạn hãy
// xây dựng mảng cộng dồn F[]

function bai1(nums: number[]): number[] {
  let prefix: number[] = [];
  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }
  return prefix;
}

console.log(bai1([1, 2, 3, 4, 5]));
