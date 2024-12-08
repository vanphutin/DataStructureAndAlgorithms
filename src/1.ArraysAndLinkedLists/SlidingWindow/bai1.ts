// [Sliding Window]. Bài 1. Sliding Window
// Cho dãy số A[] gồm có N phần tử và số nguyên dương k. Hãy tìm dãy con liên tiếp
// có k phần tử sao cho dãy con đó có tổng các phần tử lớn nhất.

function bai1(a: number[], k: number) {
  let cur_sum = 0;
  for (let i = 0; i < k; i++) {
    cur_sum += a[i];
  }

  let res = 0;
  for (let i = k; i < a.length; i++) {
    cur_sum = cur_sum + a[i] - a[i - k];
    res = Math.max(res, cur_sum);
  }
  console.log(res);
}

bai1([3, 2, 1, 6, -5, 12], 3);
