function kthDistinct(arr: string[], k: number): string {
  const charCount: { [key: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    charCount[arr[i]] = (charCount[arr[i]] || 0) + 1;
  }
  let distinctCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (charCount[arr[i]] === 1) {
      distinctCount++;

      if (distinctCount === k) {
        return arr[i];
      }
    }
  }

  return "";
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
