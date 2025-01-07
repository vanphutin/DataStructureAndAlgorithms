// [Xâu ký tự]. Bài 8. Xâu pangram 1
// Xâu pangram là xâu có chứa đầy đủ các kí tự từ A tới Z không phân biệt chữ hoa
// hay thường. Nhập vào xâu S và kiểm tra xem xâu S có phải là xâu pangram hay
// không?

function bai8(s: string): boolean {
  const set = new Set<string>();

  // Lưu các ký tự (chuyển thành chữ thường)
  for (let char of s.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      set.add(char);
    }
  }

  // Xâu là pangram nếu tập hợp đủ 26 ký tự
  return set.size === 26;
}

// Kiểm tra
console.log(bai8("abcdefghijklmnopqrstuvwxyz")); // true
console.log(bai8("The quick brown fox jumps over the lazy dog")); // true
console.log(bai8("Hello World")); // false
