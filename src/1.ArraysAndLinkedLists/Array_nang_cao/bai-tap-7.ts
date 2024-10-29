// Cho 2 mảng đã được sắp xếp tăng dần, thực hiện trộn 2 dãy trên thành một dãy
// được sắp xếp.
const arr_a = [2, 6, 8, 11, 45, 66];
const arr_b = [1, 2, 4, 9, 12, 65, 66];

function bai7(arr_a: number[], arr_b: number[]): void {
  let i = 0;
  let j = 0;

  // Kết hợp 2 mảng sắp xếp với kỹ thuật 2 con trỏ
  while (i < arr_a.length && j < arr_b.length) {
    if (arr_a[i] <= arr_b[j]) {
      console.log(arr_a[i]);
      i++;
    } else {
      console.log(arr_b[j]);
      j++;
    }
  }

  // In ra phần còn lại của arr_a (nếu còn phần tử)
  while (i < arr_a.length) {
    console.log(arr_a[i]);
    i++;
  }

  // In ra phần còn lại của arr_b (nếu còn phần tử)
  while (j < arr_b.length) {
    console.log(arr_b[j]);
    j++;
  }
}

bai7(arr_a, arr_b);
