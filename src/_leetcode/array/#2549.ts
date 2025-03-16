function repairCars(ranks: number[], cars: number): number {
  // Khởi tạo khoảng tìm kiếm
  let left: number = 0;
  let right: number = Math.min(...ranks) * cars * cars; // Thời gian tối đa

  // Hàm kiểm tra xem có sửa đủ xe trong thời gian n không
  function canRepair(n: number): boolean {
    let totalCars: number = 0;
    for (const rank of ranks) {
      totalCars += Math.floor(Math.sqrt(n / rank));
    }
    return totalCars >= cars;
  }

  // Tìm kiếm nhị phân
  while (left < right) {
    let mid: number = Math.floor((left + right) / 2);
    if (canRepair(mid)) {
      right = mid; // Thử giảm thời gian
    } else {
      left = mid + 1; // Tăng thời gian
    }
  }

  return left; // left là thời gian nhỏ nhất thỏa mãn
}

// Thử nghiệm
console.log(repairCars([4, 2, 3, 1], 10)); // Kết quả: 12
