/**
 * 99. Recover Binary Search Tree (Medium)
 * 
 * You are given the root of a binary search tree (BST) where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
 * 
 * Example:
 * Input: root = [1,3,null,null,2]
 * Output: [3,1,null,null,2]
 * Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
 * 
 * Example:
 * Input: root = [3,1,4,null,null,2]
 * Output: [2,1,4,null,null,3]
 * Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
 */

/**
 * 99. 이진 탐색 트리 복구 (Medium)
 *
 * 실수로 트리의 정확히 두 노드의 값이 바뀐 이진 탐색 트리(BST)의 루트가 주어집니다. 구조를 변경하지 않고 트리를 복구하세요.
 *
 * 예시:
 * 입력: root = [1,3,null,null,2]
 * 출력: [3,1,null,null,2]
 * 설명: 3은 1보다 크기 때문에 1의 왼쪽 자식이 될 수 없습니다. 1과 3을 바꾸면 BST가 유효해집니다.
 *
 * 예시:
 * 입력: root = [3,1,4,null,null,2]
 * 출력: [2,1,4,null,null,3]
 * 설명: 2는 3보다 작기 때문에 3의 오른쪽 서브트리에 있을 수 없습니다. 2와 3을 바꾸면 BST가 유효해집니다.
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

function recoverTree(root: TreeNode | null): void {
    // 여기에 구현하세요 (in-place modification)
}

// Test cases
const tree1 = new TreeNode(1, new TreeNode(3, null, new TreeNode(2)));
recoverTree(tree1);
console.log("Tree 1 root value after recovery:", tree1.val); // Expected: 3

const tree2 = new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2)));
recoverTree(tree2);
console.log("Tree 2 root value after recovery:", tree2.val); // Expected: 2