function isPrefixString(s: string, words: string[]): boolean {
  let prefixSum: string = "";

  for (const word of words) {
    prefixSum += word;

    if (prefixSum === s) return true;

    if (prefixSum.length > s.length) return false;
  }
  return false;
}

console.log(
  isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
);
