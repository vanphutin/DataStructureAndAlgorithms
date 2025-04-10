function numberOfPowerfulInt(
  start: number,
  finish: number,
  limit: number,
  s: string
): number {
  let low = start.toString();
  let high = finish.toString();
  const n = high.length;
  low = low.padStart(n, "0"); // align digits
  const pre_len = n - s.length; // prefix length
  const memo: number[] = new Array(n).fill(-1);

  function dfs(i: number, limit_low: boolean, limit_high: boolean): number {
    // recursive boundary
    if (i === n) {
      return 1;
    }
    if (!limit_low && !limit_high && memo[i] !== -1) {
      return memo[i];
    }

    const lo = limit_low ? parseInt(low[i]) : 0;
    const hi = limit_high ? parseInt(high[i]) : 9;
    let res = 0;
    if (i < pre_len) {
      for (let digit = lo; digit <= Math.min(hi, limit); digit++) {
        res += dfs(
          i + 1,
          limit_low && digit === lo,
          limit_high && digit === hi
        );
      }
    } else {
      const x = parseInt(s[i - pre_len]);
      if (lo <= x && x <= Math.min(hi, limit)) {
        res = dfs(i + 1, limit_low && x === lo, limit_high && x === hi);
      }
    }
    if (!limit_low && !limit_high) {
      memo[i] = res;
    }

    return res;
  }

  return dfs(0, true, true);
}
