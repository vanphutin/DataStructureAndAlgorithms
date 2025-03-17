// [Thuật toán sinh]. Bài 21. Chia táo
// Có n quả táo với khối lượng đã biết. Nhiệm vụ của bạn là chia táo thành hai nhóm
// sao cho sự khác biệt giữa trọng lượng của 2 nhóm là nhỏ nhất.

function bai21(nums: number[]): number {
  const n = nums.length;
  let arr = new Array(n).fill(0);
  let bestDiff = Infinity; // Sự khác biệt nhỏ nhất giữa hai nhóm

  // Hàm sinh tất cả các phân chia táo
  function sinh() {
    let i = n - 1;
    while (i >= 0 && arr[i] === 1) {
      arr[i] = 0;
      --i;
    }
    if (i >= 0) {
      arr[i] = 1;
    }
  }

  // Hàm tính tổng trọng lượng của nhóm 0 và nhóm 1
  function getWeight() {
    let sum0 = 0,
      sum1 = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] === 0) sum0 += nums[i];
      else sum1 += nums[i];
    }
    return Math.abs(sum0 - sum1);
  }

  // Sinh tất cả các phân chia và tính sự khác biệt nhỏ nhất
  while (true) {
    bestDiff = Math.min(bestDiff, getWeight());
    sinh();
    if (arr.every((a) => a === 1)) break; // Khi tất cả đều là 1 thì dừng lại
  }

  return bestDiff;
}

// Ví dụ sử dụng
console.log(bai21([3, 2, 7, 4, 1]));
