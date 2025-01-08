// [Xâu ký tự]. Bài 9. Đếm số lượng từ trong xâu

// Cho một xâu kí tự S bao gồm các chữ cái và dấu cách, một từ được định nghĩa là
// các kí tự liên tiếp không chứa dấu cách, hãy đếm số lượng từ xuất hiện trong xâu
// S.

function bai9(s: string): number {
  return s.trim().split(/\s+/).length;
}

console.log(bai9("ngon ngu lap trinh java, python a, v, x"));
