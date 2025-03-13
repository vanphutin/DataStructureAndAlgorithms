function minZeroArray(nums: number[], queries: number[][]): number {
  let n = nums.length,
    left = 0,
    right = queries.length;

  // Nếu sau tất cả queries vẫn không thể tạo Zero Array, trả về -1
  if (!canFormZeroArray(nums, queries, right)) return -1;

  // Binary Search để tìm query nhỏ nhất có thể tạo Zero Array
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if (canFormZeroArray(nums, queries, middle)) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

function canFormZeroArray(
  nums: number[],
  queries: number[][],
  k: number
): boolean {
  let n = nums.length,
    sum = 0;
  let differenceArray = new Array(n + 1).fill(0);

  // Áp dụng k truy vấn đầu tiên
  for (let queryIndex = 0; queryIndex < k; queryIndex++) {
    let [left, right, val] = queries[queryIndex];

    differenceArray[left] += val;
    if (right + 1 < n) {
      differenceArray[right + 1] -= val;
    }
  }

  // Kiểm tra xem có thể tạo Zero Array không
  for (let numIndex = 0; numIndex < n; numIndex++) {
    sum += differenceArray[numIndex];
    if (sum < nums[numIndex]) return false;
  }

  return true;
}
