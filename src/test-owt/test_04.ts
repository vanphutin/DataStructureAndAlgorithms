function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
  base %= mod;
  let result = 1n;
  while (exp > 0n) {
    if (exp % 2n === 1n) {
      // nếu bit cuối là 1
      result = (result * base) % mod;
    }
    base = (base * base) % mod; // bình phương cơ số
    exp /= 2n; // dịch phải (chia 2)
  }
  return result;
}

console.log(modPow(2n, 1000000000n, 1000000007n).toString());
