function toHopKeTiep(n: number, k: number, current: number[]): number[] {
  let element: number[] = [...current];

  function sinh(): number[] {
    let i: number = k - 1;
    while (i >= 0 && element[i] === n - k + i + 1) {
      --i;
    }

    if (i < 0) {
      for (let j = 0; j < k; j++) {
        element[j] = j + 1;
      }
    } else {
      element[i]++;
      for (let j = i + 1; j < k; j++) {
        element[j] = element[i + 1] + 1;
      }
    }
    return element;
  }
  return sinh();
}

// Test ví dụ
let n1: number = 6,
  k1: number = 5;
let current1: number[] = [2, 3, 4, 5, 6];
console.log(toHopKeTiep(n1, k1, current1)); // Output: [1, 2, 3, 4, 5]

let n2: number = 11,
  k2: number = 7;
let current2: number[] = [1, 3, 5, 6, 7, 8, 9];
console.log(toHopKeTiep(n2, k2, current2)); // Output: [1, 3, 5, 6, 7, 8, 10]
