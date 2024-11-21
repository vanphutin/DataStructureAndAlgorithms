// [Mảng 1 Chiều]. Bài 31. Maximum pair
// Cho mảng A[] gồm N phần tử, hãy tìm 2 chỉ số i, j khác nhau sao cho 0 <= i < j <
// N và trị tuyệt đối tổng của 2 phần tử A[i] và A[j] đạt giá trị lớn nhất.

function bai31(a: number[]): number {
  let lenghtArr = a.length;
  a.sort((a, b) => a - b);
  const res_1 = Math.abs(a[0] + a[1]);
  const res_2 = Math.abs(a[lenghtArr - 1] + a[lenghtArr - 2]);
  return Math.max(res_1, res_2);
}

console.log(bai31([-1, -2, -3, 9, -5]));
