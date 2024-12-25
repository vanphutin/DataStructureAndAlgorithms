function strStr(haystack: string, needle: string): number {
  // khoi tao cua so
  for (let i = 0; i < needle.length - needle.length; i++) {
    let found = true;
    for (let j = 0; j < needle.length; i++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
}
