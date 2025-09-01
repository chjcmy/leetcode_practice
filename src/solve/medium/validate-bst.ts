/**
 * 98. Validate Binary Search Tree (Medium)
 * 
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 * 
 * Example:
 * Input: root = [2,1,3]
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

function isValidBST(root: TreeNode | null): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root)); // Expected: true