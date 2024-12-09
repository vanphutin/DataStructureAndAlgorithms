// [Sliding Window]. Bài 4. Smallest window
// Cho xâu S chỉ gồm chữ cái in thường, nhiệm vụ của bạn là tìm chiều dài của xâu
// con liên tiếp nhỏ nhất có chứa đầy đủ các kí tự khác nhau của S. Ví dụ S =
// abcaaaabcad thì xâu con bcad có độ dài nhỏ nhất và chứa đầy đủ các kí tự khác
// nhau của S.

function bai4(s: string) {
  // Mảng đếm số lần xuất hiện của các ký tự trong cửa sổ
  let d: number[] = new Array(256).fill(0); // Mảng này dùng để đếm số lần xuất hiện của các ký tự (256 là đủ cho các ký tự ASCII)
  let _set = new Set(s); // Set chứa tất cả các ký tự duy nhất trong S
  let _length = _set.size; // Số lượng ký tự khác nhau trong S
  let min_length = s.length; // Khởi tạo độ dài nhỏ nhất là chiều dài của S
  let l = 0,
    cur_cnt = 0; // l là chỉ số trái của cửa sổ, cur_cnt là số lượng ký tự duy nhất trong cửa sổ hiện tại

  for (let r: number = 0; r < s.length; r++) {
    // Cập nhật số lần xuất hiện của ký tự s[r]
    d[s.charCodeAt(r)]++;

    // Nếu ký tự s[r] xuất hiện lần đầu tiên trong cửa sổ, tăng cur_cnt
    if (d[s.charCodeAt(r)] == 1) {
      cur_cnt++;
    }

    // Khi cửa sổ chứa đủ các ký tự duy nhất của S
    if (cur_cnt == _length) {
      // Thu hẹp cửa sổ từ trái
      while (d[s.charCodeAt(l)] > 1) {
        d[s.charCodeAt(l)]--;
        l++;
      }

      // Cập nhật độ dài xâu con nhỏ nhất
      min_length = Math.min(min_length, r - l + 1);
    }
  }

  console.log(min_length);
}

// Test case
bai4("bcceedeeaedda"); // Output: 9
