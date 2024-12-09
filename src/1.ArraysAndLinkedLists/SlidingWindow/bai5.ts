// [Sliding Window]. Bài 5. Longest window
// Cho xâu kí tự S, Tèo là một người khá kì quặc, anh ta chỉ thích những thứ không
// trùng lặp. Vì thế anh ta yêu cầu bạn tìm ra độ dài xâu con dài nhất mà các kí tự
// trong xâu con đó không có bất cứ một kí tự nào được lặp lại.

function bai5(s: string) {
  let d: number[] = new Array(256).fill(0);
  let l = 0,
    max_len = 1;
  for (let r = 0; r < s.length; r++) {
    d[s.charCodeAt(r)]++;
    if (d[s.charCodeAt(r)] == 2) {
      while (d[s.charCodeAt(r)] == 2) {
        d[s.charCodeAt(l)]--;
        l++;
      }
    }
    max_len = Math.max(max_len, r - l + 1);
  }
  console.log(max_len);
}

bai5("dabacdadbbdd");
