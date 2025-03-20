function minimumCost(
  n: number,
  edges: number[][],
  queries: number[][]
): number[] {
  // Tạo danh sách kề
  const adjList: Array<Array<[number, number]>> = Array.from(
    { length: n },
    () => []
  );

  for (const [u, v, w] of edges) {
    adjList[u].push([v, w]);
    adjList[v].push([u, w]);
  }

  const visited: boolean[] = new Array(n).fill(false);
  const components: number[] = new Array(n).fill(-1);
  const componentCost: number[] = [];

  let componentId = 0;

  // BFS để tìm component và tính cost
  const getComponentCost = (source: number): number => {
    const queue: number[] = [source];
    visited[source] = true;
    components[source] = componentId;
    let cost = -1;

    while (queue.length) {
      const node = queue.shift()!;

      for (const [neighbor, weight] of adjList[node]) {
        cost = cost === -1 ? weight : cost & weight;

        if (!visited[neighbor]) {
          visited[neighbor] = true;
          components[neighbor] = componentId;
          queue.push(neighbor);
        }
      }
    }
    return cost === -1 ? 0 : cost;
  };

  // Xác định các components
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      componentCost.push(getComponentCost(i));
      componentId++;
    }
  }

  // Xử lý queries
  return queries.map(([start, end]) =>
    components[start] === components[end]
      ? componentCost[components[start]]
      : -1
  );
}

console.log(
  minimumCost(
    5,
    [
      [0, 1, 7],
      [1, 3, 7],
      [1, 2, 1],
    ],
    [
      [0, 3],
      [3, 4],
    ]
  )
);
