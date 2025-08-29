/**
 * 199. Binary Tree Right Side View (Medium)
 * 
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 * 
 * Example:
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 */

/**
 * 199. 이진 트리 오른쪽에서 본 모습 (Medium)
 *
 * 이진 트리의 루트가 주어지면, 오른쪽에서 서서 위에서 아래로 순서대로 볼 수 있는 노드의 값을 반환합니다.
 *
 * 예시:
 * 입력: root = [1,2,3,null,5,null,4]
 * 출력: [1,3,4]
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

function rightSideView(root: TreeNode | null): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
const root = new TreeNode(1,
    new TreeNode(2, null, new TreeNode(5)),
    new TreeNode(3, null, new TreeNode(4))
);
console.log(rightSideView(root)); // Expected: [1,3,4]