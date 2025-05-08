import { PriorityQueue } from "@datastructures-js/priority-queue";

interface State {
  x: number;
  y: number;
  dist: number;
}

function minTimeToReach(moveTime: number[][]): number {
  const n = moveTime.length;
  const m = moveTime[0].length;
  const d: number[][] = Array.from({ length: n }, () =>
    Array(m).fill(Infinity)
  );
  const v: boolean[][] = Array.from({ length: n }, () => Array(m).fill(false));
  const dirs: [number, number][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const q = new PriorityQueue<State>((a, b) => a.dist - b.dist);

  d[0][0] = 0;
  q.enqueue({ x: 0, y: 0, dist: 0 });
  while (!q.isEmpty()) {
    const s = q.dequeue();
    if (!s) {
      continue;
    }

    if (v[s.x][s.y]) {
      continue;
    }
    if (s.x == n - 1 && s.y == m - 1) {
      break;
    }
    v[s.x][s.y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = s.x + dirs[i][0];
      let ny = s.y + dirs[i][1];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }
      let dist =
        Math.max(d[s.x][s.y], moveTime[nx][ny]) + ((s.x + s.y) % 2) + 1;
      if (d[nx][ny] > dist) {
        d[nx][ny] = dist;
        q.enqueue({ x: nx, y: ny, dist: dist });
      }
    }
  }

  return d[n - 1][m - 1];
}
console.log(
  minTimeToReach([
    [0, 4],
    [4, 4],
  ])
);
