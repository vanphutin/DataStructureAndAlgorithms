function isPalindrome(s: string): boolean {
  const convert = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return convert === convert.split("").reverse().join("");
}

isPalindrome("A man, a plan, a canal: Panama");
