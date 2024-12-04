// [Two Pointer]. Bài 2. 28Tech_Smaller
// Cho 2 mảng A[] và B[] có N và M phần tử đã được sắp xếp theo thứ tự tăng dần,
// nhiệm vụ của bạn là đối với
// mỗi phần tử trong mảng B[] hãy đếm xem trong mảng A[] có bao nhiêu phần tử
// nhỏ hơn nó.

function bai2(arrA: number[], arrB: number[]): void {
  let i = 0,
    j = 0;
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] >= arrB[j]) {
      console.log(i);
      j++;
    } else if (arrA[i] < arrB[j]) {
      i++;
    }
  }
  while (j < arrB.length) {
    console.log(j);
    j++;
  }
}

console.log(bai2([2, 3, 6, 6, 6, 8], [5, 5, 5, 6, 6, 7, 10]));
