// [Mảng 1 chiều cơ bản]. Bài 9. Tần suất

// Cho mảng số nguyên A[] gồm N phần tử, hãy liệt kê các giá trị xuất hiện trong
// mảng kèm theo tần suất tương ứng, mỗi giá trị chỉ liệt kê một lần theo thứ tự
// xuất hiện.

function bai9(nums: number[]): string[] {
  const n = nums.length;
  const marked = new Array(10001).fill(0);
  const appeared: number[] = [];
  const result: string[] = [];

  for (let i = 0; i < n; i++) {
    if (marked[nums[i]] === 0) {
      appeared.push(nums[i]);
    }
    marked[nums[i]]++;
  }

  for (let num of appeared) {
    result.push(`${num}: ${marked[num]}`);
  }

  return result;
}
