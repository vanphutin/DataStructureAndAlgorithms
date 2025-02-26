// [Mảng Cộng Dồn - Mảng Hiệu]. Bài 2. Truy vấn tổng tĩnh
// Cho mảng số nguyên A[] gồm N phần tử, có Q truy vấn, mỗi truy vấn là 2 số L, R
// bạn hãy tính tổng các số từ chỉ số L tới chỉ số R của mảng.

function bai2(nums: number[], left: number, right: number): number {
  function buildPrefixSum(nums: number[]): number[] {
    let prefix: number[] = new Array(nums.length + 1).fill(0);

    for (let i = 1; i <= nums.length; i++) {
      prefix[i] = prefix[i - 1] + nums[i - 1];
    }
    return prefix;
  }

  function thuatToan(nums: number[], left: number, right: number): number {
    let prefix: number[] = buildPrefixSum(nums);

    return left === 0 ? prefix[right + 1] : prefix[right + 1] - prefix[left];
  }

  return thuatToan(nums, left, right);
}

// Test
console.log(bai2([6, 5, 9, 7, 7, 6, 7, 7, 5, 9, 7], 0, 3));
console.log(bai2([6, 5, 9, 7, 7, 6, 7, 7, 5, 9, 7], 2, 5));
