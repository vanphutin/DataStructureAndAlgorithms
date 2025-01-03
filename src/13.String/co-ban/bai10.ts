// [Xâu kí tự cơ bản]. Bài 10. Kí tự lặp lại đầu tiên
// Cho xâu kí tự S, bạn hãy tìm kí tự được lặp lại đầu tiên trong xâu S. Nếu xâu S không có kí
// tự bị lặp lại thì in ra NONE

function bai10(s: string): string {
  let cnt = 0;
  let dd: number[] = new Array(256).fill(0);

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    dd[charCode]++;

    if (dd[charCode] === 2) {
      return s[i];
    }
  }
  return "NONE";
}

console.log(bai10("abba"));

// chuyen sang 6
