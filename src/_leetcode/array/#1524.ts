function numOfSubarrays(arr: number[]): number {
  let cnt: number = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum % 2 != 0) {
        cnt++;
      }
    }
  }

  return cnt;
}

console.log(numOfSubarrays([1, 3, 2, 5]));

// function numOfSubarrays(arr: number[]): number {
//     let oddCount = 0, evenCount = 1; // evenCount = 1 để xử lý prefixSum lẻ từ đầu
//     let prefixSum = 0, count = 0;
//     const MOD = 1e9 + 7; // Tránh số quá lớn

//     for (const num of arr) {
//         prefixSum += num;  // Cộng dồn số hiện tại vào tổng

//         if (prefixSum % 2 === 0) {
//             // Nếu tổng chẵn, số mảng con lẻ có thể tạo ra = oddCount trước đó
//             count = (count + oddCount) % MOD;
//             evenCount++; // Cập nhật số lần gặp tổng chẵn
//         } else {
//             // Nếu tổng lẻ, số mảng con lẻ có thể tạo ra = evenCount trước đó
//             count = (count + evenCount) % MOD;
//             oddCount++; // Cập nhật số lần gặp tổng lẻ
//         }
//     }

//     return count;
// }
