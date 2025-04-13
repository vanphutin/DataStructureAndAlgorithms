function countGoodNumbers(n: number): number {
  const MOD = 1e9 + 7;

  function fastPowMod(base: number, exponent: number): bigint {
    let result = 1n;
    let b = BigInt(base);
    let e = BigInt(exponent);
    const mod = BigInt(MOD);

    b = b % mod;
    while (e > 0) {
      if (e % 2n) {
        result = (result * b) % mod;
      }
      b = (b * b) % mod;
      e = e >> 1n;
    }
    return result;
  }

  const evenPositions = Math.ceil(n / 2);
  const oddPositions = Math.floor(n / 2);

  const pow5 = fastPowMod(5, evenPositions);
  const pow4 = fastPowMod(4, oddPositions);

  return Number((BigInt(pow5) * BigInt(pow4)) % BigInt(MOD));
}

console.log(countGoodNumbers(10));
