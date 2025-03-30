function ThapPhanSangNhiPhan(n: number): void {
  const X: number[] = new Array(n);

  function print() {
    console.log(X.join(""));
  }

  function Try(i: number) {
    for (let j = 0; j <= 1; j++) {
      X[i] = j;
      if (i === n - 1) {
        print();
      } else {
        Try(i + 1);
      }
    }
  }

  Try(0);
}

ThapPhanSangNhiPhan(3);
