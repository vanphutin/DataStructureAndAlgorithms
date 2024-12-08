// [Sliding Window]. Bài 2. Maximum window
// Cho mảng A[] gồm N phần tử và số nguyên K, nhiệm vụ của bạn là in ra số lớn
// nhất và nhỏ nhất của mọi mảng con cỡ K của mảng A[]

function bai2(A: number[], K: number): void {
  for (let i = 0; i <= A.length - K; i++) {
    // Lấy mảng con từ chỉ số i đến i + K - 1
    const window = A.slice(i, i + K);

    // Sắp xếp mảng con
    window.sort((a, b) => a - b);

    // Lấy giá trị nhỏ nhất và lớn nhất
    const min = window[0];
    const max = window[K - 1];

    // In kết quả
    console.log(`${min} ${max}`);
  }
}

// Dữ liệu đầu vào
const AA = [8, 5, 8, 6, 7, 6, 5, 8];
const K = 2;

// Gọi hàm
bai2(AA, K);

//==========================================================================
// nâng cao : cấu trúc dữ liệu deque

function slidingWindowMinMax(A: number[], N: number, K: number): void {
  const maxDeque: number[] = []; // Dùng để lưu chỉ số phần tử lớn nhất
  const minDeque: number[] = []; // Dùng để lưu chỉ số phần tử nhỏ nhất

  for (let i = 0; i < N; i++) {
    // Loại bỏ phần tử ra khỏi cửa sổ (đầu deque không nằm trong phạm vi [i - K + 1, i])
    if (maxDeque.length && maxDeque[0] < i - K + 1) maxDeque.shift();
    if (minDeque.length && minDeque[0] < i - K + 1) minDeque.shift();

    // Loại bỏ các phần tử nhỏ hơn A[i] khỏi maxDeque (không cần thiết để duy trì giá trị lớn nhất)
    while (maxDeque.length && A[maxDeque[maxDeque.length - 1]] <= A[i])
      maxDeque.pop();

    // Loại bỏ các phần tử lớn hơn A[i] khỏi minDeque (không cần thiết để duy trì giá trị nhỏ nhất)
    while (minDeque.length && A[minDeque[minDeque.length - 1]] >= A[i])
      minDeque.pop();

    // Thêm chỉ số hiện tại vào deque
    maxDeque.push(i);
    minDeque.push(i);

    // In kết quả khi đã duyệt ít nhất `K` phần tử
    if (i >= K - 1) {
      console.log(`${A[minDeque[0]]} ${A[maxDeque[0]]}`); // In giá trị nhỏ nhất và lớn nhất
    }
  }
}

// Test
