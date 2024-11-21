// [Mảng 1 Chiều]. Bài 29. Tổng nhỏ nhất
// Cho mảng A[] gồm các số từ 0 đến 9. Nhiệm vụ của bạn là tìm tổng nhỏ nhất của
// hai số được tạo bởi các số trong mảng A[]. Chú ý, tất cả các số trong mảng A[]

// đều được sử dụng để tạo nên hai số. Chú ý nếu bạn tạo thành các số có số 0
// đứng đầu thì bạn có thể loại bỏ các số 0 vô nghĩa đó.

function minSum(A: number[]): number {
  // Bước 1: Sắp xếp mảng theo thứ tự tăng dần
  A.sort((a, b) => a - b);

  // Bước 2: Tạo hai số từ các phần tử trong mảng
  let num1 = "";
  let num2 = "";

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      num1 += A[i];
    } else {
      num2 += A[i];
    }
  }

  // Bước 3: Tính tổng hai số
  return parseInt(num1) + parseInt(num2);
}

// Ví dụ sử dụng
const A = [6, 8, 4, 5, 2, 3];
console.log(minSum(A));
