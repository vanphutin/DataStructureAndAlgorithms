function test_01(n: number): number {
  let res: number = 0;

  return Math.pow(n, n);
}

console.log(test_01(3));

// 0-> 0
//1 -> 2
// 2 -> 4
// 3 -> 6
// 4 -> 8
// 5 -> 10
//...
// n -> n^2
