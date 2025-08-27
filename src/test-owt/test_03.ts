function test_03(input: number) {
  let res = giaiThua_t(input);
  console.log(res.toString().length);
}

function giaiThua(n: number): number {
  if (n <= 0) return 1;
  return giaiThua(n - 1) * n;
}

function giaiThua_t(n: number) {
  let res = 1;
  const MODULE = Math.pow(10, 6);
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

test_03(30);
