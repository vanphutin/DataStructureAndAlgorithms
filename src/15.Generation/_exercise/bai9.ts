// [Thuật toán sinh]. Bài 9. Số thứ tự tổ hợp
// Cho 2 số nguyên dương N và K và một tổ hợp K phần tử của tập N phần tử các số
// từ 1 tới N. Bạn hãy xác định xem tổ hợp đã cho có số thứ tự bao nhiêu nếu xếp
// các tổ hợp chập K của N theo thứ tự ngược. Ví dụ N = 5, K = 3 và tổ hợp đã cho là
// (2, 3, 4) sẽ là tổ hợp có số thứ tự 4.

function bai9(n: number, k: number, targetArr: number[]): number {
  let arr: number[] = Array.from({ length: k }, (_, i) => i + 1);
  let isFinal = false;
  let result: string[] = [];

  function saveCombination(): void {
    result.push(arr.join(" "));
  }

  function nextCombination(): void {
    let i = k - 1;
    while (i >= 0 && arr[i] == n - k + i + 1) {
      i--;
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

  // Sinh tất cả các tổ hợp
  while (!isFinal) {
    saveCombination();
    nextCombination();
  }

  // Đảo ngược danh sách tổ hợp (số thứ tự tính từ cuối lên)
  result.reverse();

  // Tìm vị trí của tổ hợp targetArr
  let targetStr = targetArr.join(" ");
  let index = result.indexOf(targetStr);

  // Trả về số thứ tự (bắt đầu từ 1)
  return index + 1;
}

// Ví dụ: Tìm số thứ tự của tổ hợp (2, 3, 4) trong tập {1, 2, 3, 4, 5} chập 3
console.log(bai9(5, 3, [2, 3, 4])); // Output: 4
