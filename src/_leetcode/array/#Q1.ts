function countSubarrays(nums: number[]): number {
  let res: number = 0;
  const maxWindow = 3;

  // Duyệt qua các subarray có độ dài 3
  for (let i = 0; i <= nums.length - maxWindow; i++) {
    const first = nums[i]; // Phần tử đầu
    const mid = nums[i + 1] / 2; // Phần tử giữa
    const last = nums[i + 2]; // Phần tử cuối

    // Điều kiện kiểm tra: thay đổi tùy thuộc vào bài toán

    if (first + last === mid) {
      res++;
    }
  }

  return res;
}

// Kiểm tra với các ví dụ
console.log(countSubarrays([0, -4, -4])); // Kết quả kỳ vọng: 0
