// [Two Pointer]. Bài 3. 28Tech_Numer_Of_Equal
// Cho 2 mảng A[] và B[] có N và M phần tử đã được sắp xếp theo thứ tự tăng dần,
// nhiệm vụ của bạn là hãy đếm xem trong 2 mảng tồn tại bao nhiêu cặp i, j sao cho
// A[i] = B[j]

function bai3(A: number[], B: number[]): number {
  let i = 0,
    j = 0,
    cnt = 0;
  while (i < A.length && j < B.length) {
    if (A[i] === B[j]) {
      let dem1 = 0;
      while (A[i] === B[j]) {
        ++dem1;
        i++;
      }

      let dem2 = 0;
      while (A[i - 1] === B[j]) {
        ++dem2;
        j++;
      }
      cnt += dem1 * dem2;
    } else if (A[i] < B[j]) {
      i++;
    } else {
      j++;
    }
  }
  return cnt;
}

console.log(bai3([3, 3, 3, 4, 7, 9], [2, 3, 3, 5, 6, 9, 10]));
