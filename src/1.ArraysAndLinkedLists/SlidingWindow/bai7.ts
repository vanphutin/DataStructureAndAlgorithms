// [Sliding Window]. Bài 7. Minimum Subarray
// Cho mảng A[] có N phần tử, bạn hãy tìm ra dãy con các phần tử liên tiếp có tổng
// tối thiểu bằng K. Nếu có nhiều dãy con thỏa mãn hãy in ra dãy con ngắn nhất
// xuất hiện đầu tiên, trong trường hợp không tồn tại dãy con thỏa mãn in ra -1.

function bai7(a: number[], k: number) {
  let l = 0,
    cur_sum = 0,
    min_len = Infinity,
    result = [-1, -1];
  for (let r = 0; r < a.length; r++) {
    cur_sum += a[r];
    while (cur_sum >= k) {
      const len = r - l + 1;
      if (len < min_len) {
        min_len = len;
        result = [l, r]; // Lưu chỉ số của dãy con
      }
      cur_sum -= a[l];
      l++;
    }
  }
  if (result[0] === -1) {
    console.log(-1); // Không tìm thấy dãy con nào
  } else {
    const subarray = a.slice(result[0], result[1] + 1);
    console.log(subarray);
  }
}

bai7([2, 4, 0, 4, 2, 3, 3, 2, 0, 0, 3], 7);
