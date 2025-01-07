// [Xâu ký tự]. Bài 5. Ký tự xuất hiện ở cả 2 xâu.
// Cho 2 xâu kí tự S1 và S2, hãy in ra các kí tự xuất hiện ở cả 2 xâu theo thứ tự từ
// điển, chú ý mỗi kí tự chỉ liệt kê một lần. Sau đó tiếp tục liệt kê các kí tự xuất hiện
// ở 1 trong 2 xâu theo thứ tự từ điển.

function bai5(s1: string, s2: string) {
  let set1 = new Set<string>(s1);
  let set2 = new Set<string>(s2);

  // Các ký tự xuất hiện ở cả hai xâu (tập giao)
  const intersection = [...s1].filter((char) => set2.has(char));
  intersection.sort();
  console.log(intersection.join(""));

  // Các ký tự xuất hiện ở ít nhất một trong hai xâu (tập hợp)
  const union = new Set([...set1, ...set2]);
  const unionSorted = [...union].sort();
  console.log(unionSorted.join(""));
}

bai5("nTOhOGvRBk", "bUJtZSoONh");
