// [Xâu kí tự cơ bản]. Bài 14. Tí và 28tech
// Mặc dù là 2 người bạn thân nhưng Tí và Tèo lại rất khác nhau khi nói đến 28tech, Tí thì lại là
// người rất thích 28tech. Vì thế Tí nhờ bạn đếm các từ 28tech xuất hiện trong một xâu S cho
// trước.

function bai14(s: string): number {
  let cnt = 0;
  const works = s.toLowerCase().split(" ");
  for (const work of works) {
    if (work === "28tech") {
      cnt++;
    }
  }

  return cnt;
}

console.log(bai14("zzA 28TecH AAAa AAW Dobc czo 28tECH zIo bic"));
