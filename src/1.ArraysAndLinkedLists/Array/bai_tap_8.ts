function c1_baiTap8(arr: number[]): number[] {
  let set = new Set(arr);
  return [...set];
}

console.log(c2_baiTap8([1, 1, 2, 2, 3, 4, 5, 4, 6, 7, 8, 9]));

function c2_baiTap8(arr: number[]): number[] {
  const MAX = 1000;
  let dd = new Array(MAX + 1).fill(0);
  let res: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (dd[arr[i]] === 0) {
      res.push(arr[i]);
      dd[arr[i]] = 1; // Đánh dấu đã xuất hiện
    }
  }

  return res;
}
