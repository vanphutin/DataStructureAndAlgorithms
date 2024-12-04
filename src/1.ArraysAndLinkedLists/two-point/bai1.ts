// [Two Pointer]. Bài 1. Trộn 2 dãy
// Cho 2 mảng A[] và B[] có N và M phần tử đã được sắp xếp theo thứ tự tăng dần,
// nhiệm vụ của bạn là trộn 2 mảng này thành một mảng và sắp xếp theo thứ tự
// tăng dần. Độ phức tạp mong muốn là tuyến tính.

function bai1(arrA: number[], arrB: number[]): number[] {
  let newArray: number[] = [];
  let i = arrA[0],
    j = arrB[0];
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      newArray.push(arrA[i]);
      i++;
    } else if (arrA[i] > arrB[j]) {
      newArray.push(arrB[j]);
      j++;
    }
  }
  while (i < arrA.length) {
    newArray.push(arrA[i]);
    i++;
  }
  while (j < arrB.length) {
    newArray.push(arrB[j]);
    j++;
  }

  return newArray;
}
console.log(bai1([1, 2, 4, 4, 9, 10], [4, 4, 5, 6, 6, 8]));
