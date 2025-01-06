// [Xâu kí tự cơ bản]. Bài 13. Liệt kê từ
// Cho một xâu S gồm nhiều từ, các từ được phân cách nhau bởi dấu cách hoặc các dấu '.', ',',
// '!', '?', hãy liệt kê các từ xuất hiện trong xâu, giữa các từ cách nhau một dấu cách, sau từ
// cuối cùng ko được in thừa dấu cách

function bai13(S: string): string {
  const normalized = S.replace(/[.,!?]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = normalized.split(" ");

  return words.join(" ");
}

console.log(bai13("oSAz ?oiiaz iSaSz SDA ,bbW oWA AIIia ."));

console.log(bai13("Hello, world! How are you?"));

console.log(bai13("   Multiple   spaces,,, here!  "));
