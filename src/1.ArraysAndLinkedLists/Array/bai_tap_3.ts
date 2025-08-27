function baiTap3(arr: number[]): number {
  let _min = arr[0],
    cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < _min) {
      _min = arr[i];
      cnt = 1;
    } else if (arr[i] === _min) {
      cnt++;
    }
  }
  return cnt;
}

console.log(baiTap3([-854, 600, 222, 472, 207]));
