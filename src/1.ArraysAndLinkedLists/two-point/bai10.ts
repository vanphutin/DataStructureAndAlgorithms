// Bài 10. TwoSum
// Cho mảng A[] gồm N phần tử và số nguyên K, hãy kiểm tra xem trong mảng có 2
// phần tử A[i], A[j] với i khác j và A[i] + A[j] = K hay không ? Bài này các bạn có thể
// giải theo 3 cách : Binary search, Hai con trỏ, Map.

function bai10(a: number[], k: number) {
  let formatArr = a.sort((a, b) => b - a);
  let left = 0,
    right = a.length - 1;
  while (left < right) {
    if (formatArr[left] + formatArr[right] === k) {
      return 1;
    } else if (formatArr[left] + formatArr[right] > k) {
      right--;
    } else if (formatArr[left] + formatArr[right] < k) {
      left++;
    } else {
      return 0;
    }
  }
}
console.log(bai10([2, 1, 10, 5, 9], 28) === 1 ? "Yes" : "No");
