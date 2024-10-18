// Bài 1. Xây dựng mảng cộng dồn
// Cho mảng số nguyên A[] gồm N phần tử, mảng cộng dồn của A[] là mảng F[] với
// tính chất F[i] lưu tổng các phần tử từ chỉ số 0 tới chỉ số i của mảng A[]. Bạn hãy
// xây dựng mảng cộng dồn F[]

const doanhThu: number[] = [1, 2, 3, 4, 5, 6, 7];
function initPrefixSum1(arr: number[]): number[] {
  const prefixSum: number[] = new Array(arr.length);
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  return prefixSum;
}

console.log(initPrefixSum1(doanhThu));
