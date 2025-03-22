function countCompleteComponents(n: number, edges: number[][]): number {
  // Tạo danh sách kề
  const graph: number[][] = Array.from({ length: n }, () => []);

  // Xây dựng đồ thị từ các cạnh
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited: boolean[] = Array(n).fill(false);
  let completeComponents = 0;

  // Xử lý từng đỉnh chưa được thăm
  for (let vertex = 0; vertex < n; vertex++) {
    if (!visited[vertex]) {
      const component: number[] = [];
      const queue: number[] = [vertex];
      visited[vertex] = true;

      // BFS để tìm tất cả các đỉnh trong thành phần liên thông
      while (queue.length > 0) {
        const current = queue.shift()!;
        component.push(current);

        for (const neighbor of graph[current]) {
          if (!visited[neighbor]) {
            queue.push(neighbor);
            visited[neighbor] = true;
          }
        }
      }

      // Kiểm tra thành phần có hoàn chỉnh không
      const isComplete = component.every(
        (node) => graph[node].length === component.length - 1
      );

      if (isComplete) {
        completeComponents++;
      }
    }
  }

  return completeComponents;
}
