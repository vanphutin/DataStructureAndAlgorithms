// [Xâu ký tự]. Bài 17. Chuẩn hóa tên 2.

// Cho một xâu là tên người chỉ bao gồm các kí tự là chữ cái và dấu cách, giữa các
// từ trong câu có thể tồn tại nhiều dấu cách hãy chuẩn hóa tên người theo 2 mẫu
// được yêu cầu trước. Xem output để rõ hơn về cách chuẩn hóa.

function bai17(name: string) {
  let chuanHoa = name
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
  let firstName = chuanHoa[chuanHoa.length - 1];
  let lastName = chuanHoa.filter((char) => char !== firstName).join(" ");
  console.log(`${lastName}, ${firstName.toUpperCase()}`);
  console.log(`${firstName.toUpperCase()}, ${lastName}`);
}

bai17("vAN  PHu   tin ");
