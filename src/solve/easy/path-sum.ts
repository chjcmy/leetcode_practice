/**
 * 112. Path Sum (Easy)
 * 
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 * 
 * Example:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 * Explanation: The root-to-leaf path with the target sum is shown.
 */

/**
 * 112. 경로 합 (Easy)
 *
 * 이진 트리의 루트와 정수 targetSum이 주어지면, 경로를 따라 모든 값을 더한 값이 targetSum과 같은 루트에서 리프까지의 경로가 있으면 true를 반환합니다.
 * 리프는 자식이 없는 노드입니다.
 *
 * 예시:
 * 입력: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * 출력: true
 * 설명: 목표 합계를 가진 루트에서 리프까지의 경로가 표시됩니다.
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
const root = new TreeNode(5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
console.log(hasPathSum(root, 22)); // Expected: true