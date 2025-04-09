function lengthOfLastWord(s: string): number {
  let toArr = s.trim().split(" ");
  return toArr[toArr.length - 1].length;
}
console.log(lengthOfLastWord("   fly me   to   the moon  "));
