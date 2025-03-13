// [Thuật toán sinh]. Bài 5. Sinh tổ hợp
// Cho hai số nguyên dương N và K. Nhiệm vụ của bạn là hãy liệt kê tất cả các tập
// con K phần tử của các số từ 1 tới N.

function bai5(n: number, k: number): void {
  if (n < k) return;
  let arr: number[] = Array.from({ length: k }, (_, i) => i + 1);
  let isFinal: boolean = false;

  function print(): void {
    console.log(arr.join(" "));
  }

  function sinh() {
    let i = k - 1;
    while (i >= 0 && arr[i] === n - k + i + 1) {
      --i;
    }

    if (i < 0) {
      isFinal = true;
    } else {
      arr[i]++;
      for (let j = i + 1; j < k; j++) {
        arr[j] = arr[j - 1] + 1;
      }
    }
  }
  while (!isFinal) {
    print();
    sinh();
  }
}
console.log(bai5(0, 3));
