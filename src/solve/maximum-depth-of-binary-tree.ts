/**
 * 104. Maximum Depth of Binary Tree (Easy)
 * 
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 * 
 * Example 2:
 * Input: root = [1,null,2]
 * Output: 2
 */

/**
 * 104. 이진 트리의 최대 깊이 (Easy)
 *
 * 이진 트리의 루트가 주어지면 최대 깊이를 반환하세요.
 * 이진 트리의 최대 깊이는 루트 노드에서 가장 먼 리프 노드까지의 가장 긴 경로를 따르는 노드의 수입니다.
 *
 * 예시 1:
 * 입력: root = [3,9,20,null,null,15,7]
 * 출력: 3
 *
 * 예시 2:
 * 입력: root = [1,null,2]
 * 출력: 2
 */
import { TreeNode } from '../types';

function maxDepth(root: TreeNode | null): number {
    // 여기에 코드를 작성하세요
    
    return 0;
}


// 테스트 케이스
const testCases = [
    [3, 9, 20, null, null, 15, 7],
    [1, null, 2],
    []
];

testCases.forEach(test => {
    console.log(test);
});

export { maxDepth, TreeNode };