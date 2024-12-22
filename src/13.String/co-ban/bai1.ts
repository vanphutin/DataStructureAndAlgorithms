// [Xâu kí tự cơ bản]. Bài 1. Chữ số đứng giữa
// Cho số nguyên không âm N, hãy xác định chữ số đứng giữa của N, trong trường hợp N
// không có chữ số đứng giữa thì in ra "NOT FOUND". Ví dụ N = 12345 thì số đứng giữa là 3,
// N = 2213 thì không có chữ số đứng giữa.

function bai1(n: number): string {
  let val = n.toString();
  if (val.length % 2 === 0) {
    return "NOT FOUND";
  } else {
    let middle = Math.floor(val.length / 2);
    return val[middle];
  }
}
console.log(bai1(12345));
