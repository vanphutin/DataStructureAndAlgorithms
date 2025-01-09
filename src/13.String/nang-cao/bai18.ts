// [Xâu ký tự]. Bài 18. Tạo email và mật khẩu.
// Hiện tại trường đại học XYZ tổ chức cấp email cho sinh viên mới nhập học. Email
// và mật khẩu sẽ được cấp dựa trên tên của sinh viên và ngày sinh của sinh viên
// đó. Bạn hãy viết chương trình để cấp tài khoản theo yêu cầu như sau, tên email
// được tạo bằng cách lấy tên của sinh viên và ghép với các chữ cái đầu tiên của họ
// và tên đệm, tất các ký tự trong email đều ở dạng in thường, ví dụ sinh viên có tên
// "Nguyen Van Long" sẽ được cấp email "longnv@xyz.edu.vn". Mật khẩu sẽ dựa
// trên ngày sinh của sinh viên đó, bằng cách ghép ngày tháng năm lại với nhau, ví
// dụ sinh viên sinh ngày 27/04/2002 sẽ có mật khẩu là 2742002.

function layMotKiTu(s: string): string {
  return s.slice(0, 1);
}

function bai18(name: string, date: string): void {
  // GMAIL
  let charLastName = "";
  let domain = "@xyz.edu.vn";
  let toLowerCaseFullName = name.toLowerCase().trim().split(/\s+/);
  let firstName = toLowerCaseFullName.pop() || "";
  charLastName = toLowerCaseFullName.map(layMotKiTu).join("");
  const email = `${firstName}${charLastName}${domain}`;
  console.log(email);

  // PASSWORD
  let password = date
    .trim()
    .split("/")
    .map((val) => {
      return Number(val) < 10 ? Number(val) * 1 : val;
    })
    .join("");
  console.log(password);
}

bai18("nguyen VAN NAM", "22/02/2004");
