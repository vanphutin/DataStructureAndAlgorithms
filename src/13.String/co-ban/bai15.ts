// [Xâu kí tự cơ bản]. Bài 15. Từ chẵn lẻ.
// Cho xâu kí tự S, trong xâu S có nhiều từ được phân cách nhau bởi 1 hoặc 1 vài dấu cách.
// Nhiệm vụ của bạn là đối với những từ xuất hiện ở vị trí lẻ thì thì in ra từ đó, còn những từ
// xuất hiện ở vị trí chẵn thì trước khi in từ đó bạn phải lật ngược từ đó trước. Các từ khi in viết
// cách nhau đúng 1 dấu cách và sau từ cuối cùng ko có dấu cách thừa.

function reverseString(s: string): string {
  return s.split("").reverse().join("");
}

function bai15(s: string): string {
  let res = "";
  const words = s.trim().split(/\s+/);
  const result = words.map((word, index) => {
    if ((index + 1) % 2 === 0) {
      return reverseString(word);
    }
    return word;
  });
  return result.join(" ");
}

console.log(bai15("bWo ziD cWS DIi bzA zADzi aIio"));
