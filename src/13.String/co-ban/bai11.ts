// [Xâu kí tự cơ bản]. Bài 11. Ngày sinh
// Cho ngày sinh của một người theo dạng ngày/tháng/năm. Bạn hãy chuẩn hóa ngày sinh này
// về dạng dd/mm/yyyy. Ví dụ nếu ngày sinh là 1/10/2002 thì được chuẩn hóa thành
// 01/10/2002, hoặc 5/2/2002 thì được chuẩn hóa thành 05/02/2002.

function bai11(s: string): string {
  let convert = s.split("/");
  const normalized = convert.map((part) =>
    parseInt(part) < 10 ? "0" + part : part
  );

  let res = normalized.join("/");
  return res;
}

console.log(bai11("9/9/2002"));
// bai11("1/10/2002");
