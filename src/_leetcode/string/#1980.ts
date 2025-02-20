function findDifferentBinaryString(nums: string[]): string {
  let index = nums[0].length;
  let rs = "";
  for (let i = 0; i < nums.length; i++) {
    rs += nums[i][i] == "0" ? "1" : "0";
  }
  return rs;
}

console.log(findDifferentBinaryString(["01", "10"]));
