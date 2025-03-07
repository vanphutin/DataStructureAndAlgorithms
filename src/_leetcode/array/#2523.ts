function closestPrimes(left: number, right: number): number[] {
  if (left > right) return [-1, -1];

  let prime: number[] = new Array(right + 1).fill(1);
  prime[0] = prime[1] = 0;
  let primesInRange: number[] = [];

  // Sàng Eratosthenes
  function sieve(limit: number): void {
    for (let i = 2; i * i <= limit; i++) {
      if (prime[i] === 1) {
        for (let j = i * i; j <= limit; j += i) {
          prime[j] = 0;
        }
      }
    }
  }

  sieve(right);

  // Lưu danh sách số nguyên tố trong khoảng [left, right]
  for (let i = left; i <= right; i++) {
    if (prime[i] === 1) {
      primesInRange.push(i);
    }
  }

  // Nếu không đủ 2 số nguyên tố → Trả về [-1, -1]
  if (primesInRange.length < 2) return [-1, -1];

  // Tìm cặp số nguyên tố gần nhất
  let minDiff = Infinity;
  let result = [-1, -1];

  for (let i = 1; i < primesInRange.length; i++) {
    let diff = primesInRange[i] - primesInRange[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      result = [primesInRange[i - 1], primesInRange[i]];
    }
  }

  return result;
}

console.log(closestPrimes(19, 31)); // [29, 31]
