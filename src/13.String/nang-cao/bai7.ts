// [Xâu ký tự]. Bài 7. Xâu đối xứng.
// Cho một xâu ký tự S chỉ bao gồm các chữ cái, hãy kiểm tra xem xâu nhập vào có
// phải là xâu đối xứng hay không?

function bai7(s: string): boolean {
  let i = 0,
    j = s.length - 1;
  let length = Math.floor(s.length / 2);

  while (i < j) {
    if (s[i] != s[j]) {
      return false;
    } else {
      i++, j--;
    }
  }

  return true;
}

console.log(bai7("cBGkXXqKWqqWKqXXkGBsc"));
