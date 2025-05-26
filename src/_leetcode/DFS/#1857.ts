function largestPathValue(colors: string, edges: number[][]): number {
  const INF = Number.MAX_SAFE_INTEGER;
  const n = colors.length;
  const adj: number[][] = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
  }

  const count: number[][] = Array.from({ length: n }, () => Array(26).fill(0));
  const vis: number[] = Array(n).fill(0);
  let ans = 0;

  const dfs = (node: number): number => {
    if (vis[node] === 1) return INF; // Cycle detected
    if (vis[node] === 2) {
      return count[node][colors.charCodeAt(node) - 97]; // Already processed
    }

    vis[node] = 1;
    for (const nxt of adj[node]) {
      const res = dfs(nxt);
      if (res === INF) return INF;
      for (let c = 0; c < 26; c++) {
        count[node][c] = Math.max(count[node][c], count[nxt][c]);
      }
    }

    const col = colors.charCodeAt(node) - 97;
    count[node][col]++;
    vis[node] = 2;

    return count[node][col];
  };

  for (let i = 0; i < n && ans !== INF; i++) {
    ans = Math.max(ans, dfs(i));
  }

  return ans === INF ? -1 : ans;
}
