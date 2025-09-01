/**
 * 236. Lowest Common Ancestor of a Binary Tree (Medium)
 * 
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * The LCA is defined as the lowest node in T that has both p and q as descendants.
 * 
 * Example:
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 * Explanation: The LCA of nodes 5 and 1 is 3.
 */

/**
 * 236. 이진 트리의 가장 낮은 공통 조상 (Medium)
 *
 * 이진 트리가 주어지면 트리에서 주어진 두 노드의 가장 낮은 공통 조상(LCA)을 찾습니다.
 * LCA는 p와 q를 모두 자손으로 갖는 T에서 가장 낮은 노드로 정의됩니다.
 *
 * 예시:
 * 입력: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 출력: 3
 * 설명: 노드 5와 1의 LCA는 3입니다.
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const root = new TreeNode(3,
    new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))),
    new TreeNode(1, new TreeNode(0), new TreeNode(8))
);
const p = root.left; // node 5
const q = root.right; // node 1
console.log(lowestCommonAncestor(root, p, q)?.val); // Expected: 3