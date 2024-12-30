function minimumMoves(s: string): number {
  let cnt = 0,
    i = 0;
  while (i < s.length) {
    if (s[i] === "X") {
      cnt++;
      i += 3;
    } else {
      i++;
    }
  }
  return cnt;
}

console.log(minimumMoves("XXOX"));
