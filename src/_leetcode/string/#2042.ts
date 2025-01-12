function areNumbersAscending(s: string): boolean {
  let arr = 0;
  function isNumber(value: string) {
    const regex = /^-?\d+(\.\d+)?$/; // Số nguyên hoặc số thực
    return regex.test(value);
  }
  let convert = s.split(" ");
  for (const word of convert) {
    if (isNumber(word)) {
      if (+word > arr) {
        arr = Number(word);
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(areNumbersAscending("4 hello world 5 x 5 9"));
