function shortestCommonSupersequence(str1: string, str2: string): string {
  const m = str1.length,
    n = str2.length;

  // Bước 1: Tìm LCS bằng Dynamic Programming
  const dp: number[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Bước 2: Dùng LCS để xây dựng SCS
  let i = m,
    j = n;
  let result = "";

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result = str1[i - 1] + result;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      result = str1[i - 1] + result;
      i--;
    } else {
      result = str2[j - 1] + result;
      j--;
    }
  }

  // Bước 3: Thêm các ký tự còn lại của str1 và str2
  while (i > 0) {
    result = str1[i - 1] + result;
    i--;
  }
  while (j > 0) {
    result = str2[j - 1] + result;
    j--;
  }

  return result;
}

// 🔥 **Test case**
console.log(shortestCommonSupersequence("abac", "cab")); // Output: "cabac"
console.log(shortestCommonSupersequence("abc", "ac")); // Output: "abc"
console.log(shortestCommonSupersequence("geek", "eke")); // Output: "geeke"
