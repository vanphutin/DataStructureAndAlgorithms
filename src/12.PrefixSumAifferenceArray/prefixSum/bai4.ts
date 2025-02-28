// [Mảng Cộng Dồn - Mảng Hiệu]. Bài 4. Mảng hiệu
// Cho mảng số nguyên A[] gồm N phần tử, mảng hiệu của mảng a là mảng D[] với
// D[0] = A[0] và D[i] = A[i] - A[i - 1] . Nhiệm vụ của bạn là xây dựng mảng hiệu của
// mảng A[]

function bai4(nums: number[]): number[] {
  function buildDifferenceArray(nums: number[]): number[] {
    let Diff: number[] = new Array(nums.length);
    Diff[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      Diff[i] = nums[i] - nums[i - 1];
    }
    return Diff;
  }

  return buildDifferenceArray(nums);
}

console.log(bai4([7, 6, 9, 9, 8]));
