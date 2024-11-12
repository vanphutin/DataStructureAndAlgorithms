// [Mảng 1 Chiều]. Bài 18. Đếm số lượng cặp số bằng nhau trong
// mảng
// Cho dãy số A[] gồm có N phần tử, nhiệm vụ của bạn là đếm số lượng cặp số bằng
// nhau trong mảng.
let dd: number[] = new Array(100005).fill(0);

function bai18(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    dd[arr[i]]++;
  }

  let cnt: number = 0;
  for (let val = 0; val < dd.length; val++) {
    if (dd[val] > 1) {
      cnt += (dd[val] * (dd[val] - 1)) / 2;
    }
  }

  return cnt;
}

// function bai18(arr: number[]): number {
//   let cnt = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         cnt++;
//       }
//     }
//   }
//   return cnt;
// }
console.log(bai18([2, 2, 1, 3, 2, 3])); // Kết quả: 4
