// [Quay lui-Nhánh cận]. Bài 4. Dãy con có tổng bằng K
// Cho dãy số A[] = (a1, a2, .., an) và số tự nhiên K. Hãy đưa ra tất cả các dãy con
// của dãy số A[] sao cho tổng các phần tử của dãy con đó đúng bằng K. Các phần
// tử của dãy số A[] được giả thuyết là nguyên dương và không có các phần tử giống
// nhau. Ví dụ với dãy con A[] = {5, 10, 15, 20, 25}, K = 50 ta có 3 dãy con {5, 10,
// 15, 20}, {5, 20, 25}, {10, 15, 25}.

function bai4(arr: number[], k: number): void {
  let X: number[] = new Array();
  arr.sort((a, b) => a - b);

  function Try(i: number, start: number, sum: number) {
    for (let j = start; j < arr.length; j++) {
      X[i] = arr[j];
      if (sum + arr[j] === k) {
        console.log("[", X.slice(1, i + 1).join(" "), "]");
      } else if (sum + arr[j] < k) {
        Try(i + 1, j + 1, sum + arr[j]);
      }
    }
  }

  Try(1, 0, 0);
}

// Test
bai4([5, 10, 15, 20, 25], 50);
