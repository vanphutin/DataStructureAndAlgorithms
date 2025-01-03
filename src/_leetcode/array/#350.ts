function intersect(nums1: number[], nums2: number[]): number[] {
  let map = new Map<number, number>();
  let res: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      res.push(nums2[i]);
      map.set(nums2[i], map.get(nums2[i])! - 1);
    }
    if (map.get(nums2[i]) === 0) {
      map.delete(nums2[i]);
    }
  }

  return res;
}

console.log(intersect([1, 2, 2, 1], [2, 2, 2]));
