function pushDominoes(dominoes: string): string {
  const N = dominoes.length;
  const indexes: number[] = new Array(N + 2);
  const symbols: string[] = new Array(N + 2);
  let len = 1;

  indexes[0] = -1;
  symbols[0] = "L";

  for (let i = 0; i < N; ++i) {
    if (dominoes[i] !== ".") {
      indexes[len] = i;
      symbols[len++] = dominoes[i];
    }
  }

  indexes[len] = N;
  symbols[len++] = "R";

  const ans = dominoes.split("");
  for (let index = 0; index < len - 1; ++index) {
    const i = indexes[index];
    const j = indexes[index + 1];
    const x = symbols[index];
    const y = symbols[index + 1];

    if (x === y) {
      for (let k = i + 1; k < j; ++k) {
        ans[k] = x;
      }
    } else if (x === "R" && y === "L") {
      for (let k = i + 1; k < j; ++k) {
        ans[k] = k - i === j - k ? "." : k - i < j - k ? "R" : "L";
      }
    }
  }

  return ans.join("");
}
