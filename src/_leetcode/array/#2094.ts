function findEvenNumbers(digits: number[]): number[] {
  let X: number[] = [];
  let res: number[] = [];
  let init: number = 3;

  function Try(i: number, used: boolean[]) {
    if (i === init) {
      console.log("i", i);
      let number = parseInt(X.join(""));
      if (!X[0] && X[0] === 0) return;
      if (number % 2 === 0) res.push(number);
      return;
    }

    for (let j = 0; j < digits.length; j++) {
      if (!used[j]) {
        X[i] = digits[j];
        used[j] = true;
        Try(i + 1, used);
        used[j] = false;
      }
    }
  }

  Try(0, new Array(digits.length).fill(false));
  return [...new Set(res)];
}

console.log(findEvenNumbers([2, 1, 3, 0]));
