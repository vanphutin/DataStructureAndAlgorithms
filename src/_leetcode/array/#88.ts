function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // Vị trí cuối của mảng nums1 ban đầu
  let j = n - 1; // Vị trí cuối của mảng nums2
  let k = m + n - 1; // Vị trí cuối của mảng nums1 sau khi hợp nhất

  // Duyệt qua cả hai mảng và điền phần tử lớn hơn vào nums1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Nếu còn phần tử trong nums2, điền vào nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  // Không cần xử lý nums1 vì các phần tử còn lại đã đúng vị trí
  console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
