// [Xâu kí tự cơ bản]. Bài 4. Số đẹp
// Cho số nguyên dương N có ít nhất 2 chữ số, một số được coi là số đẹp nếu 2 chữ số liền kề
// của nó chỉ lệch nhau đúng 1 đơn vị, ví dụ về số đẹp : 12345, 121212, 78987. Hãy kiểm tra
// xem N có phải là số đẹp hay không?

function bai4(n: number): string {
  let format = n.toString();
  let j = 0,
    i = 0;
  while (i < format.length && j < format.length - 1) {
    let currentDigit = parseInt(format[i]);
    let nextDight = parseInt(format[j + 1]);
    if (Math.abs(currentDigit - nextDight) !== 1) {
      return "NO";
    }
    j++;
    i++;
  }

  return "YES";
}

console.log(bai4(1357));
