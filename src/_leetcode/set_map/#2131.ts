function longestPalindrome(words: string[]): number {
  const map = new Map<string, number>();
  let length = 0;
  let hasCentral = false;

  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  for (const [word, count] of map.entries()) {
    const reversed = word.split("").reverse().join("");

    if (word === reversed) {
      const pairs = Math.floor(count / 2);
      length += pairs * 4;
      if (count % 2 === 1) hasCentral = true;
    } else if (map.has(reversed)) {
      const pairs = Math.min(count, map.get(reversed)!);
      length += pairs * 4;
      map.set(word, count - pairs);
      map.set(reversed, map.get(reversed)! - pairs);
    }
  }

  if (hasCentral) {
    length += 2;
  }

  return length;
}

// Test case
console.log(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"]));
