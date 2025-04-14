function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let n: number = arr.length;
  let cnt: number = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          cnt++;
        }
      }
    }
  }

  return cnt;
}
countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3);
