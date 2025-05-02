// [Mảng 1 chiều cơ bản]. Bài 23. Mảng cộng dồn

// Cho mảng số nguyên A[] gồm N phần tử, nhiệm vụ của bạn là xây dựng mảng F
// cũng có N phần tử trong đó F[0] = A[0] và F[i] = F[i -1] + A[i] với mọi i >= 1. Như
// vậy bạn thử nghĩ xem F[i] lưu giá trị gì?

function bai23(nums: number[]): number[] {
  // khoi tao mang cong don
  const F: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    F[i] = F[i - 1] + nums[i];
  }
  return F;
}
console.log(bai23([1, 2, 3, 4, 5, 6]));
