// Bài 9. Đếm tần suất KỸ THUẬT MẢNG ĐÁNH DẤU
// Cho mảng các số nguyên không âm gồm n phần tử, thực hiện đếm tần suất xuất
// hiện của các phần tử và in theo mẫu.
const array = [2, 1, 2, 3, 4, 8, 2, 3];
let d: number[] = new Array(100001).fill(0); // Khởi tạo mảng d với kích thước 100001 và giá trị khởi tạo là 0

function bai8(arr: number[]): void {
  // Đếm tần suất xuất hiện của các phần tử
  for (let i = 0; i < arr.length; i++) {
    d[arr[i]]++;
  }

  // In ra tần suất của các phần tử
  console.log("Tần suất xuất hiện:");
  for (let val = 0; val < d.length; val++) {
    // Sử dụng d.length để duyệt qua mảng d
    if (d[val] > 0) {
      console.log(val, ":", d[val]); // In giá trị và tần suất
    }
  }

  console.log("");

  // In tần suất và đánh dấu là đã in xong
  console.log("Tần suất xuất hiện (không lặp lại):");
  for (let i = 0; i < arr.length; i++) {
    if (d[arr[i]] > 0) {
      console.log(arr[i], ":", d[arr[i]]);
      d[arr[i]] = 0; // Đánh dấu là đã in tần suất để không in lại
    }
  }
}

bai8(array);
