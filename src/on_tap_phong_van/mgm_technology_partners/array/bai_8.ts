// [Mảng 1 chiều cơ bản]. Bài 8. Liệt kê các giá trị khác nhau

// Cho mảng số nguyên A[] gồm N phần tử, hãy liệt kê các giá trị khác nhau trong
// mảng theo thứ tự xuất hiện, mỗi giá trị chỉ liệt kê 1 lần. Ở thời điểm hiện tại các
// bạn có thể for trâu để giải bài này, sau này sẽ dùng cách tối ưu hơn.

function bai8(nums: number[]): number[] {
  let n: number = nums.length;
  let marked: number[] = new Array(100000).fill(0);
  let res: number[] = [];

  for (let i = 0; i <= n; i++) {
    if (marked[nums[i]] === 0) {
      marked[nums[i]] = 1;
      res.push(nums[i]);
    }
  }

  return res;
}

function bai8_useSet(nums: number[]): number[] {
  let set: Set<number> = new Set(nums);
  return [...set];
}

// console.log(bai8([-5, -6, -3, -3, -2, 1, 2, 3, 4, 1, 2, 3, 4, 5]));
console.log(bai8_useSet([-5, -6, -3, -3, -2, 1, 2, 3, 4, 1, 2, 3, 4, 5]));
