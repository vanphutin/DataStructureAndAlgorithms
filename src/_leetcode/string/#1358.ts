function numberOfSubstrings(s: string): number {
  let count = 0;
  let left = 0;
  let freq: Record<"a" | "b" | "c", number> = { a: 0, b: 0, c: 0 };
  for (let right = 0; right < s.length; right++) {
    freq[s[right] as "a" | "b" | "c"]++;

    while (freq["a"] > 0 && freq["b"] > 0 && freq["c"] > 0) {
      count += s.length - right;
      freq[s[left] as "a" | "b" | "c"]--;
      left++;
    }
  }
  return count;
}

console.log(numberOfSubstrings("abcabc"));
