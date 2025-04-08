/*

Ta sử dụng một stack để lưu trữ các toán hạng:
    Khi gặp số: Đẩy (push) số đó vào stack.
Khi gặp toán tử (như +, -, *, /):
    Lấy (pop) hai phần tử trên cùng ra khỏi stack.
    Thực hiện phép toán với hai phần tử đó.
    Đẩy kết quả trở lại vào stack. 

*/

import { Stack } from "./Stack";

function evalRPN(tokens: string[]): number {
  let stack: Stack<number> = new Stack();
  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } else {
      let result: number;
      let a: number = stack.pop()!;
      let b: number = stack.pop()!;
      switch (token) {
        case "+":
          result = b + a;
          break;
        case "-":
          result = b - a;
          break;
        case "*":
          result = b * a;
          break;
        case "/":
          result = Math.trunc(b / a);
          break;
        default:
          throw new Error(`Unknown operator: ${token}`);
      }
      stack.push(result);
    }
  }
  return stack.pop()!;
}
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
