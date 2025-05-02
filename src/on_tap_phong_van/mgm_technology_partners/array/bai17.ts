// [Mảng 1 chiều cơ bản]. Bài 17. Mảng đối xứng
// Cho mảng số nguyên A[] gồm N phần tử, kiểm tra xem mảng có đối xứng hay
// không?

function bai17(nums: number[]): boolean {
  let left: number = 0,
    right: number = nums.length - 1;
  while (left <= right) {
    if (nums[left] !== nums[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(
  bai17([
    870, 1069, 2363, 375, 2188, 6059, 6775, 495, 643, 832, 832, 643, 495, 6775,
    6059, 2188, 375, 2363, 1069, 870,
  ])
);
