let arr = [3, 3],
  target = 6;
function twosum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
}
twosum(arr, target);
