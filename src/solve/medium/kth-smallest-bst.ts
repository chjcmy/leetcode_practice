/**
 * 230. Kth Smallest Element in a BST (Medium)
 * 
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 * 
 * Example:
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 */

/**
 * 230. BST에서 k번째로 작은 요소 (Medium)
 *
 * 이진 검색 트리의 루트와 정수 k가 주어지면 트리 노드의 모든 값 중에서 k번째로 작은 값(1-인덱스)을 반환합니다.
 *
 * 예시:
 * 입력: root = [3,1,4,null,2], k = 1
 * 출력: 1
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

function kthSmallest(root: TreeNode | null, k: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
const root = new TreeNode(3,
    new TreeNode(1, null, new TreeNode(2)),
    new TreeNode(4)
);
console.log(kthSmallest(root, 1)); // Expected: 1