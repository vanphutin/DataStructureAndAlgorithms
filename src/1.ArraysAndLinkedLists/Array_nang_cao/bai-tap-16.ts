// [Mảng 1 Chiều]. Bài 17. Truy vấn tổng trên đoạn
// Cho dãy số A[] gồm có N phần tử, nhiệm vụ của bạn là tính tổng các số trong dãy
// từ vị trí l tới chỉ số r.

function init_prefix_sum(arr: number[]): number[] {
  let prefix_sum: number[] = new Array(arr.length);
  prefix_sum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix_sum[i] = prefix_sum[i - 1] + arr[i];
  }
  return prefix_sum;
}

function bai16(prefix_sum: number[], l: number, r: number): number {
  if (l == 1) {
    return prefix_sum[r - 1];
  } else {
    return prefix_sum[r - 1] - prefix_sum[l - 2];
  }
}

console.log(bai16(init_prefix_sum([1, 2, 3, 4, 5]), 1, 3));
