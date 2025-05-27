function differenceOfSums(n: number, m: number): number {
  let divisible: number = 0;
  let not_divisible: number = 0;

  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
      not_divisible += i;
    } else {
      divisible += i;
    }
  }
  return not_divisible - divisible;
}

console.log(differenceOfSums(10, 3));
