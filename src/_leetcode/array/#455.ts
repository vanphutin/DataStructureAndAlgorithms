function findContentChildren(g: number[], s: number[]): number {
  let res: number = 0;
  let i = 0,
    j = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      res++;
      i++;
    }

    j++;
  }
  return res;
}

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
