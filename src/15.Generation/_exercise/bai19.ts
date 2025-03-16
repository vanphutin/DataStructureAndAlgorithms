// [Thuật toán sinh]. Bài 19. Xâu nhị phân đối xứng
// Nhiệm vụ của bạn là hãy liệt kê các xâu nhị phân thuận nghịch có độ dài n theo
// thứ tự từ điển.

function bai19(n: number): void {
  let arr: number[] = new Array(Math.floor(n / 2)).fill(0);
  let isFinal: boolean = false;

  // Sinh cấu hình tiếp theo
  function sinh(): void {
    let i: number = Math.floor(n / 2) - 1;
    while (i >= 0 && arr[i] === 1) {
      arr[i] = 0;
      i--;
    }
    if (i < 0) {
      isFinal = true;
    } else {
      arr[i] = 1;
    }
  }

  // In xâu đối xứng
  function inCauHinh(): void {
    let half: string = arr.join("");
    let reverseHalf: string = arr.slice().reverse().join("");

    if (n % 2 === 0) {
      console.log(half + reverseHalf);
    } else {
      console.log(half + "0" + reverseHalf);
      console.log(half + "1" + reverseHalf);
    }
  }

  // In cấu hình đầu tiên (toàn 0)
  inCauHinh();

  // Sinh và in các cấu hình tiếp theo
  while (!isFinal) {
    sinh();
    inCauHinh();
  }
}

// Thử nghiệm với n = 4
bai19(5);
