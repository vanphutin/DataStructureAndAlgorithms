function validMountainArray(arr: number[]): boolean {
  let n = arr.length;
  if (n < 3) return false;
  let left = 0,
    right = n - 1;
  while (left + 1 < n && arr[left] < arr[left + 1]) {
    left++;
  }
  while (right - 1 < n && arr[right - 1] > arr[right]) {
    right--;
  }
  return left > 0 && right < n - 1 && left == right;
}

console.log(validMountainArray([0, 1, 2, 3, 2, 1])); // true
