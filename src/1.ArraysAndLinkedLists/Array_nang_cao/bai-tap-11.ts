// [Mảng 1 Chiều]. Bài 11. Tìm hợp và giao của 2 mảng 2
// Cho 2 mảng số nguyên a và b gồm n và m phần tử, các phần tử trong mảng là
// đôi một khác nhau, các phần tử trong 2 mảng đã được sắp xếp theo thứ tự tăng
// dần. Hãy tìm mảng giao và mảng hợp của 2 mảng.

// KỸ THUẬT HAI CON TRỎ
function bai11(arrA: number[], arrB: number[]): void {
  let hop = new Set();
  let giao = new Set();

  let i = 0,
    j = 0;
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] === arrB[j]) {
      // nếu a[i] và a[j] bằng nhau thì thêm vào cả hợp và giao -> tăng i j
      hop.add(arrA[i]);
      giao.add(arrB[j]);
      i++, j++;
    } else if (arrA[i] < arrB[i]) {
      hop.add(arrA[i]);
      i++;
    } else {
      hop.add(arrB[j]);
      j++;
    }
  }

  while (i < arrA.length) {
    hop.add(arrA[i++]);
  }
  while (j < arrB.length) {
    hop.add(j++);
  }

  console.log("Hop ", hop);
  console.log("giao ", giao);
}

const arrAA: number[] = [1, 2, 3, 4, 9];
const arrBB: number[] = [2, 3, 5, 6, 7, 8, 9];
bai11(arrAA, arrBB);
