function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const map = new Map<number, number>();

  for (const [id, val] of nums1) {
    map.set(id, (map.get(id) || 0) + val);
  }

  for (const [id, val] of nums2) {
    map.set(id, (map.get(id) || 0) + val);
  }
  return Array.from(map).sort((a, b) => a[0] - b[0]);
}

// Test case
const nums1 = [
  [1, 2],
  [2, 3],
  [4, 5],
];
const nums2 = [
  [1, 3],
  [3, 4],
  [4, 2],
];

console.log(mergeArrays(nums1, nums2));
