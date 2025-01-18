function _isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let cnv = x.toString().split("");
  let i = 0,
    j = cnv.length - 1;
  while (i < j) {
    if (parseInt(cnv[i]) === parseInt(cnv[j])) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(_isPalindrome(1223321));
