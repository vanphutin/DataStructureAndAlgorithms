function baiTap6(arr: number[], target: number): number {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        cnt++;
      }
    }
  }

  return cnt;
}

console.log(baiTap6([1, 2, 3, 1, 2], 3));

// 1 1 2 2 3
