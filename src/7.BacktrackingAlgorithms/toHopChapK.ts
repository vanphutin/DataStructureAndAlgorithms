function toHopChapK(n: number, k: number): void {
  const X: number[] = new Array(k + 1).fill(0);

  function print() {
    console.log(X.slice(1).join(" "));
  }

  function Try(i: number) {
    for (let j = X[i - 1] + 1; j <= n - k + i; j++) {
      X[i] = j;
      if (i === k) {
        print();
      } else {
        Try(i + 1);
      }
    }
  }

  Try(1);
}

toHopChapK(3, 2);
