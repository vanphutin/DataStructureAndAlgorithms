import { Stack } from "./Stack";

function isValid(s: string): boolean {
  const stack: Stack<string> = new Stack();
  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEmpty() || stack.pop() != pairs[char]) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

console.log(isValid("([])"));
