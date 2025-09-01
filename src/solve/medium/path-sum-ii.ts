/**
 * 113. Path Sum II (Medium)
 * 
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
 * A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
 * 
 * Example:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * Output: [[5,4,11,2],[5,8,4,5]]
 */

/**
 * 113. 경로 합 II (Medium)
 *
 * 이진 트리의 루트와 정수 targetSum이 주어지면, 경로의 노드 값의 합이 targetSum과 같은 모든 루트에서 리프까지의 경로를 반환합니다. 각 경로는 노드 참조가 아닌 노드 값의 목록으로 반환되어야 합니다.
 * 루트에서 리프까지의 경로는 루트에서 시작하여 임의의 리프 노드에서 끝나는 경로입니다. 리프는 자식이 없는 노드입니다.
 *
 * 예시:
 * 입력: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 출력: [[5,4,11,2],[5,8,4,5]]
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
const root = new TreeNode(5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1)))
);
console.log(pathSum(root, 22)); // Expected: [[5,4,11,2],[5,8,4,5]]