// [Mảng 1 Chiều]. Bài 10. Tìm hợp và giao của 2 mảng 1
// Cho 2 mảng số nguyên a và b gồm n và m phần tử. Gọi mảng c và d lần lượt là
// mảng chỉ bao gồm các phần tử khác nhau của a và b. Hãy tìm mảng giao và hợp
// của mảng c và d và liệt kê theo thứ tự tăng dần.
// Hướng dẫn tìm giao : Dùng 1 map để đánh dấu những giá trị xuất hiện trong
// mảng a, Dùng 1 map để đánh dấu những giá trị xuất hiện trong mảng b. Duyệt 1
// trong 2 map và kiểm tra xem phần tử của map hiện tại có nằm trong map thứ 2
// hay không => giao. Tìm hợp : Đưa các phần tử trong 2 mảng vào 1 cái set

// mang danh dau

let dA: number[] = new Array(100001).fill(0);
let dB: number[] = new Array(100001).fill(0);
function bai10(arrA: number[], arrB: number[]): void {
  let hop = new Set();
  let giao = new Set();

  for (let i = 0; i < arrA.length; i++) {
    dA[arrA[i]]++;
  }

  for (let i = 0; i < arrB.length; i++) {
    dB[arrB[i]]++;
  }

  for (let val = 0; val <= 1e7; val++) {
    if (dA[val] && dB[val]) {
      hop.add(val);
    }
    if (dA[val] || dB[val]) {
      giao.add(val);
    }
  }
  console.log("Hop ", hop);
  console.log("giao ", giao);
}

const arrA: number[] = [1, 2, 1, 2, 7];
const arrB: number[] = [1, 2, 3, 4, 5, 6];

bai10(arrA, arrB);
