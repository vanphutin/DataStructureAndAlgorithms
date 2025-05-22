import { TreeNode } from "../tree/1123";

function smallestFromLeaf(root: TreeNode | null): string {
  let res: string = "";

  function Try(node: TreeNode | null, path: string) {
    if (!node) return;
    const currChar = String.fromCharCode(97 + node.val);
    path = currChar + path;

    if (!node.left && !node.right) {
      if (res === "" || path < res) {
        res = path;
      }
      return;
    }

    Try(node.left, path);
    Try(node.right, path);
  }
  Try(root, "");

  return res;
}

console.log(
  smallestFromLeaf({
    val: 0,
    left: {
      val: 1,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 2,
      left: { val: 3, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
  })
);
