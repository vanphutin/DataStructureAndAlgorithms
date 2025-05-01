function maxTaskAssign(
  tasks: number[],
  workers: number[],
  pills: number,
  strength: number
): number {
  const n = tasks.length;
  const m = workers.length;

  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);

  const check = (mid: number): boolean => {
    let p = pills;
    const ws: number[] = workers.slice(m - mid); // Các worker mạnh nhất

    for (let i = mid - 1; i >= 0; --i) {
      const task = tasks[i];
      const lastWorkerIndex = ws.length - 1;

      if (ws.length > 0 && ws[lastWorkerIndex] >= task) {
        ws.pop(); // Loại worker mạnh nhất
      } else {
        if (p === 0) return false;

        const idx = ws.findIndex((w) => w + strength >= task);
        if (idx === -1) return false;

        ws.splice(idx, 1); // Loại worker sử dụng pill
        p--;
      }
    }
    return true;
  };

  let left = 1,
    right = Math.min(m, n),
    ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}
