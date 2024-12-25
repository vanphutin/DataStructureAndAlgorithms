// [Xâu kí tự cơ bản]. Bài 6. Sắp xếp chữ số
// Cho số nguyên không âm N, hãy tiến hành sắp xếp các chữ số của N theo thứ tự tăng dần
// rồi in ra màn hình, trong trường hợp số sau khi sắp xếp xuất hiện các chữ số 0 ở đầu thì ra
// không in những chữ số 0 vô nghĩa này.

function bai6(ss: number) {
  let s: string = ss
    .toString()
    .split("")
    .sort((a, b) => parseInt(a) - parseInt(b))
    .join("");
  let k = 0;
  while (k < s.length - 1 && s[k] === "0") {
    k++;
  }
  return s.substring(k);
}

console.log(bai6(23432542000));
