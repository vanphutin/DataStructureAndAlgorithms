function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let prevIndex = map.get(nums[i])!;

      if (i - prevIndex <= k) {
        return true;
      }
    }
    // nguoc lai_ cap nhat gia tri moi
    map.set(nums[i], i);
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
