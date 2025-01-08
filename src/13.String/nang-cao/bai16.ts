// [Xâu ký tự]. Bài 16. Chuẩn hóa tên 1
// Cho một xâu là tên người chỉ bao gồm các kí tự là chữ cái và dấu cách, giữa các
// từ trong câu có thể tồn tại nhiều dấu cách hãy chuẩn hóa tên người bằng cách
// viết hoa chữ cái đầu tiên của từng từ và viết thường các chữ cái còn lại. Xâu tiếp
// theo là ngày sinh của người này, bao gồm ngày tháng năm phân cách nhau bằng
// dấu '/', hãy chuẩn hóa ngày sinh của người này về đúng dạng dd/mm/yyyy.

function bai16(name: string, date: string): void {
  let convertName = name
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
  console.log(convertName);

  let convertDate = date
    .split("/")
    .map((number) => {
      // Number(number) or +number or parseInt(number)
      return (number as unknown as number) < 10 ? "0" + number : number;
    })
    .join("/");
  console.log(convertDate);
}

bai16("hoang dinh   NAm", "2/12/1999");
