function lenLongestFibSubseq(arr: number[]): number {
  let numSet: Set<number> = new Set<number>(arr);
  let maxLen = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let x = arr[i],
        y = arr[j];
      let len = 2; // Dãy Fibonacci cần ít nhất 2 số
      while (numSet.has(x + y)) {
        // Kiểm tra xem tổng có trong mảng không
        let sum = x + y;
        x = y;
        y = sum;
        len++;
      }
      maxLen = Math.max(maxLen, len);
    }
  }

  return maxLen >= 3 ? maxLen : 0;
}

console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18]));
