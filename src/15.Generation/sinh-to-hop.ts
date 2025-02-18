function generateCombinations(n: number, k: number): void {
  let arr: number[] = Array.from({ length: k }, (_, i) => i + 1);
  let isFinal = false;

  function printCombination() {
    console.log(arr.join(" "));
  }

  function nextCombination() {
    let i = k - 1;
    while (i >= 0 && arr[i] === n - k + i + 1) {
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

  while (!isFinal) {
    printCombination();
    nextCombination();
  }
}

generateCombinations(6, 3);
