/**
 * 543. Diameter of Binary Tree (Easy)
 * 
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 * 
 * Example:
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 */

/**
 * 543. 이진 트리의 지름 (Easy)
 *
 * 이진 트리의 루트가 주어지면 트리의 지름 길이를 반환합니다.
 * 이진 트리의 지름은 트리에서 임의의 두 노드 사이의 가장 긴 경로의 길이입니다. 이 경로는 루트를 통과할 수도 있고 통과하지 않을 수도 있습니다.
 * 두 노드 사이의 경로 길이는 그 사이의 간선 수로 나타냅니다.
 *
 * 예시:
 * 입력: root = [1,2,3,4,5]
 * 출력: 3
 * 설명: 3은 경로 [4,2,1,3] 또는 [5,2,1,3]의 길이입니다.
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
const root = new TreeNode(1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
);
console.log(diameterOfBinaryTree(root)); // Expected: 3