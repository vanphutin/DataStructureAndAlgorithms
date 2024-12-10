// [Sliding Window]. Bài 8. Duplicate Window
// Cho mảng A[] gồm N phần tử và số nguyên K, bạn hãy xác định xem trong mảng
// có tồn tại 2 phần tử A[i], A[j] với i khác j sao cho A[i] = A[j] và abs(i - j) <= K hay
// không. Nếu con in ra YES, ngược lại in ra NO. Bài này các bạn có thể sử dụng sort
// hoặc sliding window

function bai8(a: number[], k: number): number {
  let d: number[] = new Array(a.length).fill(0);

  //cửa số đầu tiên - init
  for (let i = 0; i <= k; i++) {
    d[a[i]]++;
    if (d[a[i]] == 2) {
      return 1;
    }
  }

  // tiếp tục vơi các cửa sổ khác
  for (let i = k + 1; i < a.length; i++) {
    d[a[i]]++;
    d[a[i - k - 1]]--;
    if (d[a[i]] == 2) return 1;
  }
  return 0;
}

bai8([2, 8, 6, 8, 1, 3, 7, 8, 5, 6, 3, 9, 4], 7) == 1
  ? console.log("YES")
  : console.log("NO");
