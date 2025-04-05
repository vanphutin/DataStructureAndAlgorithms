function subsetXORSum(nums: number[]): number {
  const dfs = (index: number, res: number): number => {
    if (index == nums.length) {
      return res;
    }
    return dfs(index + 1, res ^ nums[index]) + dfs(index + 1, res);
  };
  return dfs(0, 0);
}
