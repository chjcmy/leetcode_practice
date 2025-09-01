/**
 * 124. Binary Tree Maximum Path Sum (Hard)
 * 
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
 * The path sum of a path is the sum of the node's values in the path.
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
 * 
 * Example:
 * Input: root = [1,2,3]
 * Output: 6
 * Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
 */

/**
 * 124. 이진 트리 최대 경로 합 (Hard)
 *
 * 이진 트리의 경로는 시퀀스의 인접한 노드 쌍 각각에 연결하는 간선이 있는 노드 시퀀스입니다. 노드는 시퀀스에 최대 한 번만 나타날 수 있습니다. 경로는 루트를 통과할 필요가 없습니다.
 * 경로의 경로 합은 경로에 있는 노드 값의 합입니다.
 * 이진 트리의 루트가 주어지면 비어 있지 않은 경로의 최대 경로 합을 반환합니다.
 *
 * 예시:
 * 입력: root = [1,2,3]
 * 출력: 6
 * 설명: 최적의 경로는 2 -> 1 -> 3이며 경로 합은 2 + 1 + 3 = 6입니다.
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

function maxPathSum(root: TreeNode | null): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(maxPathSum(root)); // Expected: 6