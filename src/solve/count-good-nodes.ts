/**
 * 1448. Count Good Nodes in Binary Tree (Medium)
 * 
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 * 
 * Example:
 * Input: root = [3,1,4,3,null,1,5]
 * Output: 4
 * Explanation: Nodes in blue are good.
 * Root Node (3) is always a good node.
 * Node 4 -> (3,4) is the maximum value in the path starting from the root.
 * Node 5 -> (3,4,5) is the maximum value in the path
 * Node 3 -> (3,1,3) is the maximum value in the path.
 */

/**
 * 1448. 이진 트리에서 좋은 노드 개수 세기 (Medium)
 *
 * 이진 트리 루트가 주어지면, 루트에서 X까지의 경로에 X보다 큰 값을 가진 노드가 없는 경우 트리의 노드 X를 좋은 노드라고 합니다.
 * 이진 트리에서 좋은 노드의 수를 반환합니다.
 *
 * 예시:
 * 입력: root = [3,1,4,3,null,1,5]
 * 출력: 4
 * 설명: 파란색 노드는 좋은 노드입니다.
 * 루트 노드 (3)은 항상 좋은 노드입니다.
 * 노드 4 -> (3,4)는 루트에서 시작하는 경로의 최대값입니다.
 * 노드 5 -> (3,4,5)는 경로의 최대값입니다.
 * 노드 3 -> (3,1,3)은 경로의 최대값입니다.
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

function goodNodes(root: TreeNode | null): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
const root = new TreeNode(3,
    new TreeNode(1, new TreeNode(3)),
    new TreeNode(4, new TreeNode(1), new TreeNode(5))
);
console.log(goodNodes(root)); // Expected: 4