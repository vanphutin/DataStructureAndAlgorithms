function minOperations(nums: number[], k: number): number {
  let minHeap: number[] = [...nums];
  minHeap.sort((a, b) => a - b);
  let result: number = 0;

  while (minHeap.length > 0) {
    let x: number = minHeap.shift()!;

    if (x >= k) break;
    if (minHeap.length === 0) {
      return -1;
    }

    let y: number = minHeap.shift()!;
    let newElement = 2 * Math.min(x, y) + Math.max(x, y);
    minHeap.push(newElement);
    minHeap.sort((a, b) => a - b);
    result++;
  }
  return result;
}

// code bài này
console.log(minOperations([2, 11, 10, 1, 3], 10));
