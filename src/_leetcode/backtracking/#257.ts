/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
  let result: string[] = [];

  function Try(node: TreeNode | null, path: string): void {
    if (!node) return;

    const curPath = path ? `${path}->${node.val}` : `${node.val}`;

    if (!node.left && !node.right) {
      result.push(curPath);
      return;
    }

    Try(node.left, curPath);
    Try(node.right, curPath);
  }
  Try(root, "");
  return result;
}
