function threeConsecutiveOdds(arr: number[]): boolean {
  let n: number = arr.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) {
      cnt++;
    } else {
      cnt = 0;
    }
    if (cnt === 3) {
      return true;
    }
  }
  return false;
}

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
