// [Xâu kí tự cơ bản]. Bài 8. 28tech và Tèo
// Tèo là một người ghét 28tech vì cho rằng 28tech cho quá nhiều bài tập khó làm anh ta phải
// đau đầu. Vì thế anh ta ghét tất cả những chữ cái xuất hiện trong từ "28tech", Tèo muốn nhờ
// bạn xóa hết những kí tự xuất hiện trong từ "28tech" khỏi xâu kí tự S, bạn hãy giúp Tèo nhé.
// Nếu xâu S sau khi xóa không còn kí tự nào bạn phải in ra EMPTY

function bai8(s: string): string {
  let init_val: string = "28tech";

  let result = s
    .split("")
    .filter((char) => {
      !init_val.includes(char);
    })
    .join("");

  return result.length > 0 ? result : "EMPTY";
}

console.log(bai8("28tech"));
