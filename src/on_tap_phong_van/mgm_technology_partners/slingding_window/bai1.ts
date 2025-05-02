// Cho mảng số nguyên có n phần tử và số nguyên dương k. Tìm dãy con liên tiếp của mảng
// có độ dài k sao cho tổng các phần tử trong dãy con là lớn nhất và liệt kê dãy con đó. Nếu
// có nhiều dãy con có cùng tổng lớn nhất thì in ra dãy con đầu tiên

function findMaxSumSubarray(arr: number[], k: number): [number, number[]] {
  let maxSum = 0;
  let n = arr.length;
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;
  let startIndex = 0;

  for (let i = k; i < n; i++) {
    currentSum = currentSum + arr[i] - arr[i - k];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      startIndex = i - k + 1;
    }
  }

  const resultSubarray = arr.slice(startIndex, startIndex + k);

  return [maxSum, resultSubarray];
}

// Xử lý input mẫu

console.log(findMaxSumSubarray([1, 2, 3, 1, 5, 2, 7, 99, 9, 1], 3));
