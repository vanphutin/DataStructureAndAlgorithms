function maxPoints(grid: number[][], queries: number[]): number[] {
  const rowCount = grid.length,
    colCount = grid[0].length;
  const result: number[] = new Array(queries.length).fill(0);
  const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // Store queries along with their original indices to restore order later
  const sortedQueries = queries.map((value, index) => [value, index]);
  sortedQueries.sort((a, b) => a[0] - b[0]);

  // Min-heap (priority queue) to process cells in increasing order of value
  const minHeap: [number, number, number][] = [];
  const visited: boolean[][] = Array.from({ length: rowCount }, () =>
    Array(colCount).fill(false)
  );
  let totalPoints = 0;

  // Use a custom comparator for a min heap
  const pushToHeap = (val: number, r: number, c: number) => {
    let i = minHeap.length;
    minHeap.push([val, r, c]);
    while (i > 0 && minHeap[i][0] < minHeap[Math.floor((i - 1) / 2)][0]) {
      [minHeap[i], minHeap[Math.floor((i - 1) / 2)]] = [
        minHeap[Math.floor((i - 1) / 2)],
        minHeap[i],
      ];
      i = Math.floor((i - 1) / 2);
    }
  };

  const popFromHeap = (): [number, number, number] | undefined => {
    if (minHeap.length === 0) return undefined;
    const min = minHeap[0];
    const last = minHeap.pop()!;
    if (minHeap.length > 0) {
      minHeap[0] = last;
      let i = 0;
      while (true) {
        let left = 2 * i + 1,
          right = 2 * i + 2,
          smallest = i;
        if (left < minHeap.length && minHeap[left][0] < minHeap[smallest][0])
          smallest = left;
        if (right < minHeap.length && minHeap[right][0] < minHeap[smallest][0])
          smallest = right;
        if (smallest === i) break;
        [minHeap[i], minHeap[smallest]] = [minHeap[smallest], minHeap[i]];
        i = smallest;
      }
    }
    return min;
  };

  // Start from the top-left cell
  pushToHeap(grid[0][0], 0, 0);
  visited[0][0] = true;

  // Process queries in sorted order
  for (const [queryValue, queryIndex] of sortedQueries) {
    while (minHeap.length > 0 && minHeap[0][0] < queryValue) {
      const [cellValue, currentRow, currentCol] = popFromHeap()!;
      totalPoints++;

      for (const [dx, dy] of DIRECTIONS) {
        const newRow = currentRow + dx,
          newCol = currentCol + dy;

        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < rowCount &&
          newCol < colCount &&
          !visited[newRow][newCol]
        ) {
          pushToHeap(grid[newRow][newCol], newRow, newCol);
          visited[newRow][newCol] = true;
        }
      }
    }
    result[queryIndex] = totalPoints;
  }
  return result;
}
