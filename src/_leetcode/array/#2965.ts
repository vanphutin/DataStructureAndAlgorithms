function findMissingAndRepeatedValues(grid: number[][]): number[] {
  let group: number[] = grid.flat().sort((a, b) => a - b);
  let map: Map<number, number> = new Map<number, number>();
  let result: number[] = [];

  // Tìm số bị lặp
  for (let i = 0; i < group.length; i++) {
    map.set(group[i], (map.get(group[i]) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (value >= 2) {
      result.push(key); // Số bị lặp lại
      break;
    }
  }

  // Tìm số bị thiếu
  let n = group.length;
  let set = new Set(group);
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      result.push(i); // Số bị thiếu
      break;
    }
  }

  return result;
}

console.log(
  findMissingAndRepeatedValues([
    [1, 3],
    [2, 2],
  ])
);
