function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
  const memo: number[][] = Array.from({ length: nums.length }, () => [-1, -1]);

  function maxSumOfNodes(index: number, isEven: number): number {
    if (index === nums.length) {
      // Nếu số phần tử được thực hiện phép XOR là lẻ, trả về giá trị nhỏ nhất
      return isEven === 1 ? 0 : Number.MIN_SAFE_INTEGER;
    }

    if (memo[index][isEven] !== -1) {
      return memo[index][isEven];
    }

    // Không thực hiện phép XOR trên phần tử hiện tại
    const noXorDone = nums[index] + maxSumOfNodes(index + 1, isEven);

    // Thực hiện phép XOR trên phần tử hiện tại
    const xorDone = (nums[index] ^ k) + maxSumOfNodes(index + 1, isEven ^ 1);

    // Ghi nhớ và trả về kết quả tối ưu
    return (memo[index][isEven] = Math.max(xorDone, noXorDone));
  }

  return maxSumOfNodes(0, 1);
}
