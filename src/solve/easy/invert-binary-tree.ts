/**
 * 226. Invert Binary Tree (Easy)
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * Example 1:
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 * 
 * Example 2:
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 */

/**
 * 226. 이진 트리 반전 (Easy)
 *
 * 이진 트리의 루트가 주어지면 트리를 반전시키고 루트를 반환하세요.
 *
 * 예시 1:
 * 입력: root = [4,2,7,1,3,6,9]
 * 출력: [4,7,2,9,6,3,1]
 *
 * 예시 2:
 * 입력: root = [2,1,3]
 * 출력: [2,3,1]
 *
 * 예시 3:
 * 입력: root = []
 * 출력: []
 */
import { TreeNode } from '../types';

function invertTree(root: TreeNode | null): TreeNode | null {
    // 여기에 코드를 작성하세요
    
    return null;
}


// 테스트 케이스
const testCases = [
    [4, 2, 7, 1, 3, 6, 9],
    [2, 1, 3],
    []
];

testCases.forEach(test => {
    console.log(test);
});

export { invertTree, TreeNode };