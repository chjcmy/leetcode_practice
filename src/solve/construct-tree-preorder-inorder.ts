/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal (Medium)
 * 
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 * 
 * Example:
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 */

/**
 * 105. 전위 및 중위 순회로 이진 트리 구성 (Medium)
 *
 * 두 개의 정수 배열 preorder와 inorder가 주어지며, 여기서 preorder는 이진 트리의 전위 순회이고 inorder는 동일한 트리의 중위 순회입니다. 이진 트리를 구성하고 반환합니다.
 *
 * 예시:
 * 입력: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 출력: [3,9,20,null,null,15,7]
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
console.log(buildTree([3,9,20,15,7], [9,3,15,20,7])); // Expected: [3,9,20,null,null,15,7]