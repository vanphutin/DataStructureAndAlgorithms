class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  return dfs(root)[1];
}

function dfs(root: TreeNode | null): [number, TreeNode | null] {
  if (!root) {
    return [0, null];
  }

  let left = dfs(root.left);
  let right = dfs(root.right);

  if (left[0] > right[0]) {
    return [left[0] + 1, left[1]];
  }
  if (left[0] < right[0]) {
    return [right[0] + 1, right[1]];
  }
  return [left[0] + 1, root];
}
