function countSymmetricIntegers(low: number, high: number): number {
  function isSymmetric(n: number): boolean {
    const toArr = Array.from(String(n), Number);
    if (toArr.length % 2 !== 0) {
      return false;
    }

    let mid = Math.floor(toArr.length / 2);

    const firstSum = toArr.slice(0, mid).reduce((acc, digit) => acc + digit, 0);
    const lastSum = toArr.slice(mid).reduce((acc, digit) => acc + digit, 0);
    return firstSum === lastSum;
  }

  let cnt: number = 0;
  for (let i = low; i <= high; i++) {
    if (isSymmetric(i)) {
      cnt++;
    }
  }
  return cnt;
}

console.log(countSymmetricIntegers(1200, 1230));
