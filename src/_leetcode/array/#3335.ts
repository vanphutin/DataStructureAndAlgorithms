function lengthAfterTransformations(s: string, t: number): number {
  const MOD = 1000000007;
  let cnt: number[] = new Array(26).fill(0);
  for (const ch of s) {
    cnt[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let round = 0; round < t; round++) {
    let nxt: number[] = new Array(26).fill(0);
    nxt[0] = cnt[25];
    nxt[1] = (cnt[25] + cnt[0]) % MOD;
    for (let i = 2; i < 26; i++) {
      nxt[i] = cnt[i - 1];
    }
    cnt = nxt;
  }
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    ans = (ans + cnt[i]) % MOD;
  }
  return ans;
}
