function finalValueAfterOperations(operations: string[]): number {
  let res = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "X++" || operations[i] === "++X") {
      res += 1; // x++
    } else {
      res -= 1; // x--
    }
  }
  return res;
}

console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
