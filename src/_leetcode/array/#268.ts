// BAD ========

// function missingNumber(nums: number[]): number {
//   let val: number = 0;
//   let i = 0,
//     j = 0;
//   let sorted = nums.sort((a, b) => a - b);
//   while (i <= sorted.length && j <= sorted.length) {
//     if (sorted[0] === 1) return 0;
//     if (sorted[j + 1] - sorted[i] === 1) {
//       i++;
//       j++;
//     } else {
//       val = sorted[i] + 1;

//       break;
//     }
//   }

//   return val;
// }

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // Tổng lý thuyết của dãy từ 0 đến n
  const actualSum = nums.reduce((acc, num) => acc + num, 0); // Tổng thực tế của mảng| nó tương tự như sum+= a[i]

  return expectedSum - actualSum; // Số bị thiếu
}

console.log(missingNumber([5, 6, 7]));
