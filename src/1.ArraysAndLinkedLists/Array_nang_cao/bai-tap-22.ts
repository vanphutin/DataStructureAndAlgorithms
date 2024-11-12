// [Mảng 1 Chiều]. Bài 22. Số bị lặp đầu tiên
// Cho mảng các số nguyên. Tìm phần tử lặp đầu tiên trong mảng.

// function bai22(arr: number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       console.log(arr[i]);
//     }
//   }
// }

let ddd: number[] = new Array(100001).fill(0);
function bai22(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    ddd[arr[i]]++;
    if (ddd[arr[i]] === 2) {
      console.log(arr[i]);
      break;
    }
  }
}

bai22([1, 2, 4, 3, 9, 1]);
