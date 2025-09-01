/**
 * 297. Serialize and Deserialize Binary Tree (Hard)
 * 
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary tree.
 * 
 * Example:
 * Input: root = [1,2,3,null,null,4,5]
 * Output: [1,2,3,null,null,4,5]
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

function serialize(root: TreeNode | null): string {
    // 여기에 구현하세요
    return "";
}

function deserialize(data: string): TreeNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const root = new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode(4), new TreeNode(5))
);
const serialized = serialize(root);
const deserialized = deserialize(serialized);
console.log(deserialized); // Should match original structure