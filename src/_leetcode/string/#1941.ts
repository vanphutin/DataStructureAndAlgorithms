function areOccurrencesEqual(s: string): boolean {
  let map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  let frequencies = Array.from(map.values());
  return frequencies.every((freq) => freq === frequencies[0]);
}
console.log(areOccurrencesEqual("abacbc"));
