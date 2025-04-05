export class Stack<T> {
  public items: T[] = [];

  // Thêm phần tử vào stack
  push(item: T): void {
    this.items.push(item);
  }

  // Lấy phần tử trên cùng ra khỏi stack
  pop(): T | undefined {
    return this.items.pop();
  }

  // Xem phần tử trên cùng mà không xóa
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Kiểm tra stack có rỗng không
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Lấy số lượng phần tử trong stack
  size(): number {
    return this.items.length;
  }
}
