// [Xâu kí tự cơ bản]. Bài 12. Đếm từ in hoa
// Cho một xâu S bao gồm chữ cái và dấu cách, thực hiện đếm các từ là in hoa trong xâu S.

function bai12(s: string): number {
  let cnt = 0;
  let convert = s.split(" ");
  for (let i = 0; i < convert.length; i++) {
    if (convert[i] !== "" && convert[i] === convert[i].toUpperCase()) {
      cnt++;
    }
  }

  return cnt;
}

console.log(bai12("HELLO World JAVA SCRIPT"));
