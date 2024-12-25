// [Xâu kí tự cơ bản]. Bài 9. Chèn
// Cho xâu kí tự S và số nguyên K, bạn được yêu cầu chèn dòng chữ "28tech" vào chỉ số K
// của xâu S

function bai9(s: string, k: number): string {
  let init_val = "28tech";
  if (k < 0) k = 0;
  if (k > s.length) k = s.length;

  let result: string = s.substring(0, k) + init_val + s.substring(k);

  return result;
}
console.log(bai9("ClhiSYBOSg5Re", 100));
//2:26:41
