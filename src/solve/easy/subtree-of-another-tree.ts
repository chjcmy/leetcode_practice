/**
 * 572. Subtree of Another Tree (Easy)
 * 
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
 * 
 * Example:
 * Input: root = [3,4,5,1,2], subRoot = [4,1,2]
 * Output: true
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
const root = new TreeNode(3, 
    new TreeNode(4, new TreeNode(1), new TreeNode(2)), 
    new TreeNode(5)
);
const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(root, subRoot)); // Expected: true