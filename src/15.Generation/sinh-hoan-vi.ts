function permutations(n: number): void {
  let isFinal = false;
  let a: number[] = new Array(n + 1);

  function khoiTao(): void {
    for (let i = 1; i <= n; i++) {
      a[i] = i;
    }
  }

  function hoanVi(): void {
    while (!isFinal) {
      console.log(a.slice(1).join(" "));

      // Tìm vị trí i lớn nhất mà a[i] < a[i+1]
      let i = n - 1;
      while (i >= 1 && a[i] > a[i + 1]) {
        --i;
      }

      if (i === 0) {
        isFinal = true;
      } else {
        // Tìm j sao cho a[i] < a[j]
        let j = n;
        while (a[i] > a[j]) {
          --j;
        }

        // Hoán vị a[i] và a[j]
        [a[i], a[j]] = [a[j], a[i]];

        // Đảo ngược đoạn từ i+1 đến n
        let l = i + 1,
          r = n;
        while (l < r) {
          [a[l], a[r]] = [a[r], a[l]];
          l++;
          r--;
        }
      }
    }
  }

  khoiTao();
  hoanVi();
}

// Chạy chương trình với n = 3
permutations(3);
