let cnt: number;
function generatePartitions(n: number): number[][] {
  let a: number[] = new Array(n + 1);
  let isFinal: boolean = false;
  let result: number[][] = [];

  function khoiTao(): void {
    cnt = 1;
    a[1] = n;
  }

  function sinh(): void {
    let i = cnt;
    while (i >= 1 && a[i] === 1) {
      --i;
    }
    if (i <= 0) {
      isFinal = true;
    } else {
      a[i]--;
      let d = cnt - i + 1;
      let q = Math.floor(d / a[i]);
      let r = d % a[i];
      cnt = i;
      for (let j = 1; j <= q; j++) {
        a[cnt + j] = a[i];
      }
      cnt += q;
      if (r !== 0) {
        a[++cnt] = r;
      }
    }
  }

  khoiTao();
  while (!isFinal) {
    result.push(a.slice(1, cnt + 1)); // Lưu phân hoạch hiện tại
    sinh();
  }

  return result;
}

// Chạy thử với n = 5
const partitions = generatePartitions(5);
partitions.forEach((p) => console.log(p.join(" + ")));
