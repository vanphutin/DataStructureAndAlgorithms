// [Mảng 1 Chiều]. Bài 26. Số thao tác giúp mảng tăng dần
// Cho dãy số A[] gồm có N phần tử. Ở mỗi thao tác bạn có thể tăng các phần tử
// trong mảng lên 1 vài đơn vị, hãy xác định số đơn vị tối thiểu cần thêm vào các
// phần tử trong mảng sao cho mảng trở thành một dãy tăng chặt. Ví dụ dãy 1 2 3 7
// 8 là một dãy tăng chặt, nhưng dãy 1 2 2 7 8 không phải là một dãy tăng chặt.

function bai16(a: number[]): number {
  let cnt = 0;
  for (let i = 1; i < a.length; i++) {
    if (a[i] <= a[i - 1]) {
      let newIndex = a[i - 1] + 1 - a[i];
      cnt += newIndex;
      a[i] = a[i - 1] + 1;
    }
  }
  return cnt;
}

console.log(bai16([3, 2, 7, 8, 1]));
