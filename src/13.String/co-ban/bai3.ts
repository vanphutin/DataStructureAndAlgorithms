// [Xâu kí tự cơ bản]. Bài 3. Kí tự trong đoạn
// Cho một xâu kí tự S chỉ bao gồm chữ số và chữ cái, hãy tính tổng chữ số xuất hiện trong
// xâu.

function isDigit(char: string): boolean {
  return /^\d$/.test(char); // Regex kiểm tra ký tự có phải là chữ số (0-9)
}

function bai3(n: string): number {
  let sum: number = 0;
  let format = n.split("");
  for (let i = 0; i < format.length; i++) {
    if (isDigit(format[i])) {
      sum += parseInt(format[i]);
    }
  }

  return sum;
}

console.log(bai3("1dd3fed5"));
