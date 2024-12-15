function intersection(nums1: number[], nums2: number[]): number[] {
  let res: number[] = [];
  let set_1 = new Set<number>(nums1);
  let set_2 = new Set<number>(nums2);

  for (let num of set_1) {
    if (set_2.has(num)) {
      res.push(num);
    }
  }

  return res;
}

// Test
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
