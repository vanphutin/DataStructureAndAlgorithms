// [Xâu kí tự cơ bản]. Bài 19. Đếm số lượng từ khác nhau trong xâu
// Cho xâu kí tự S gồm các từ được phân cách nhau bởi một vài dấu cách. Thực hiện đếm số
// lượng các từ khác nhau trong xâu mà không phân biệt hoa thường, ví dụ "28TecH" được coi
// là giống với từ "28teCH". (Bài này các bạn có thể thử code 2 vòng for lồng nhau hoặc sử
// dụng sort)

function bai19(s: string): number {
  let cnt: number = 0;
  const convert = s.toLowerCase().split(" ");

  let set = new Set<string>(convert);

  return set.size;
}
console.log(bai19("28tech 28TECH 28tECH dev"));
