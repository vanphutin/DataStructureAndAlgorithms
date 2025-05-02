// [Mảng 1 chiều cơ bản]. Bài 11. Liệt kê và đếm số fibonacci.

// Cho mảng số nguyên A[] gồm N phần tử, hãy liệt kê các số trong mảng là số
// Fibonacci.

function isFibo(n: number): boolean {
  function isPerfectSquare(x: number): boolean {
    let sqrtX = Math.sqrt(x);
    return sqrtX === Math.floor(sqrtX);
  }

  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

function bai11(nums: number[]): { fiboList: number[]; count: number } {
  const fiboList: number[] = [];
  let count = 0;

  for (let num of nums) {
    if (isFibo(num)) {
      fiboList.push(num);
      count++;
    }
  }

  return { fiboList, count };
}
