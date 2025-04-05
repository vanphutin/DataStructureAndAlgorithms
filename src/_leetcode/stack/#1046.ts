import { Stack } from "./Stack";

function lastStoneWeight(stones: number[]): number {
  let n: number = stones.length;
  let stack: Stack<number> = new Stack();
  stones.sort((a, b) => a - b);
  for (let val of stones) {
    stack.push(val);
  }
  while (stack.size() > 1) {
    stack.items.sort((a, b) => a - b);
    let top = stack.pop();
    let secondTop = stack.pop();
    if (top === secondTop) {
      continue;
    } else {
      stack.push(Math.abs(top! - secondTop!));
    }
  }
  return stack.isEmpty() ? 0 : stack.peek()!;
}
console.log(lastStoneWeight([7, 6, 7, 6, 9]));
