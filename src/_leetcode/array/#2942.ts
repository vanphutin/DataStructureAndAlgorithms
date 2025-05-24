function findWordsContaining(words: string[], x: string): number[] {
  let res: number[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      res.push(i);
    }
  }
  return res;
}

console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
