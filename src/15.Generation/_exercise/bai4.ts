// [Thuật toán sinh]. Bài 4. Xâu AB
// Nhiệm vụ của bạn ở bài tập này là sinh ra các xâu chỉ bao gồm 2 kí tự A và B theo
// thứ tự từ điển giảm dần.

function bai4(n: number): string[] {
  let arr: string[] = new Array(n);
  let isFinal: boolean = false;
  let result: string[] = [];

  function init() {
    for (let i = 0; i < n; i++) {
      arr[i] = "B";
    }
  }

  function sinh() {
    let i = n - 1;
    while (i >= 0 && arr[i] === "A") {
      arr[i] = "B";
      --i;
    }
    if (i >= 0) {
      arr[i] = "A";
    } else {
      isFinal = true;
    }
  }

  init();
  while (!isFinal) {
    result.push(arr.join(""));
    sinh();
  }
  return result;
}

console.log(bai4(3));
