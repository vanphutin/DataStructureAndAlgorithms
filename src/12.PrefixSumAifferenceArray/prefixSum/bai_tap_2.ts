// Bài 2. Truy vấn tổng tĩnh
// Cho mảng số nguyên A[] gồm N phần tử, có Q truy vấn, mỗi truy vấn là 2 số L, R
// bạn hãy tính tổng các số từ chỉ số L tới chỉ số R của mảng.
const a: number[] = [6, 5, 9, 7, 7, 6, 7, 7, 5, 9, 7];
function initPrefixSum2(arr: number[]): number[] {
  const prefixSum: number[] = new Array(arr.length);
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  return prefixSum;
}

const main = (prefixSum: number[], l: number, r: number): number => {
  if (l == 0) return prefixSum[r];
  return prefixSum[r] - prefixSum[l - 1];
};
const prefixSumArray = initPrefixSum2(a);
console.log(main(prefixSumArray, 1, 9));
console.log(main(prefixSumArray, 1, 10));
console.log(main(prefixSumArray, 0, 8));
