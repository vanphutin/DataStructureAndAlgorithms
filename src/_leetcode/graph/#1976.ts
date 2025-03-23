const MOD = 1_000_000_007;

function countPaths(n: number, roads: number[][]): number {
  const graph: [number, number][][] = Array.from({ length: n }, () => []);

  for (const [u, v, time] of roads) {
    graph[u].push([v, time]);
    graph[v].push([u, time]);
  }

  const shortestTime: number[] = Array(n).fill(Number.MAX_VALUE);
  const pathCount: number[] = Array(n).fill(0);

  shortestTime[0] = 0;
  pathCount[0] = 1;

  const minHeap: [number, number][] = [[0, 0]]; // [time, node]

  while (minHeap.length) {
    const [currTime, currNode] = minHeap.shift()!;

    if (currTime > shortestTime[currNode]) continue;

    for (const [neighborNode, roadTime] of graph[currNode]) {
      const newTime = currTime + roadTime;

      if (newTime < shortestTime[neighborNode]) {
        shortestTime[neighborNode] = newTime;
        pathCount[neighborNode] = pathCount[currNode];
        minHeap.push([newTime, neighborNode]);
        minHeap.sort((a, b) => a[0] - b[0]);
      } else if (newTime === shortestTime[neighborNode]) {
        pathCount[neighborNode] =
          (pathCount[neighborNode] + pathCount[currNode]) % MOD;
      }
    }
  }

  return pathCount[n - 1];
}
