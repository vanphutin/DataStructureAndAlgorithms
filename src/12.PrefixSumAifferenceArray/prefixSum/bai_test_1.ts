// Cho một mảng số nguyên nums, một mảng queries trong đó queries[i] = [x, y] và một số nguyên limit.
// Hãy tạo mảng boolean trả về kết quả của từng truy vấn.
// Một truy vấn là true nếu tổng của mảng con từ x đến y nhỏ hơn limit, ngược lại là false.

// Ví dụ: Cho nums = [1, 6, 3, 2, 7, 2] và queries = [[0, 3], [2, 5], [2, 4]] và limit = 13, đáp án  là [true, false, true]. Đối với mỗi truy vấn, tổng của mảng con lần lượt là [12, 14, 12].
// Hãy tạo một mảng cộng dồn và sử dụng phương pháp được mô tả ở trên để trả về kết quả cho từng truy vấn trong thời gian O(1)
const nums = [1, 6, 3, 2, 7, 2];
const queries1 = [
  [0, 3],
  [2, 5],
  [2, 4],
];
const limit = 13;
function initPrefixSum3(arr: number[]): number[] {
  const prefixSum: number[] = new Array(arr.length);
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  return prefixSum;
}

function main1(
  prefixSum: number[],
  queries: number[][],
  limit: number
): boolean[] {
  const result: boolean[] = new Array();
  for (const [x, y] of queries) {
    const total = x === 0 ? prefixSum[y] : prefixSum[y] - prefixSum[x - 1];
    result.push(total < limit);
  }
  return result;
}

const prefixSum = initPrefixSum3(nums);
console.log(main1(prefixSum, queries1, limit));
