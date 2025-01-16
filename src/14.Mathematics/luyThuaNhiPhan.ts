function C1_binpow(a: number, b: number): number {
  if (b === 0) return 1;

  let temp = C1_binpow(a, Math.floor(b / 2));
  if (b % 2 === 0) {
    return temp * temp;
  } else {
    return temp * temp * a;
  }
}

function C2_binpow(a: number, b: number, c: number): number {
  if (b === 0) return 1;

  let temp = C2_binpow(a, Math.floor(b / 2), c);
  if (b % 2 === 0) {
    return (temp * temp) % c;
  } else {
    return (((temp * temp) % c) * (a % c)) % c;
  }
}

// Hàm C1_binpow:

// Dùng cho lũy thừa nhị phân thông thường mà không có modulo.
// Chia đôi b để giảm số phép tính, tuân theo thuật toán lũy thừa nhanh.

// Hàm C2_binpow:

// Tính lũy thừa nhị phân với modulo c, tránh làm tràn số.
// Mọi phép nhân đều được tính modulo  c để đảm bảo số không vượt quá phạm vi.
