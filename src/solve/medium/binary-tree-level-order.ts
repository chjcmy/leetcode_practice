/**
 * 102. Binary Tree Level Order Traversal (Medium)
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 * 
 * Example:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 */

/**
 * 102. 이진 트리 레벨 순서 순회 (Medium)
 *
 * 이진 트리의 루트가 주어지면 노드 값의 레벨 순서 순회를 반환합니다.
 * (즉, 왼쪽에서 오른쪽으로, 레벨별로).
 *
 * 예시:
 * 입력: root = [3,9,20,null,null,15,7]
 * 출력: [[3],[9,20],[15,7]]
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

function levelOrder(root: TreeNode | null): number[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(levelOrder(root)); // Expected: [[3],[9,20],[15,7]]