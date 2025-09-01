/**
 * 100. Same Tree (Easy)
 * 
 * Given the roots of two binary trees, p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 * 
 * Example 1:
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 * 
 * Example 2:
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 * 
 * Example 3:
 * Input: p = [1,2,1], q = [1,1,2]
 * Output: false
 */

/**
 * 100. 같은 트리 (Easy)
 *
 * 두 이진 트리의 루트 p와 q가 주어지면, 두 트리가 같은지 확인하는 함수를 작성하세요.
 * 두 이진 트리는 구조적으로 동일하고 노드의 값이 같으면 동일한 것으로 간주됩니다.
 *
 * 예시 1:
 * 입력: p = [1,2,3], q = [1,2,3]
 * 출력: true
 *
 * 예시 2:
 * 입력: p = [1,2], q = [1,null,2]
 * 출력: false
 *
 * 예시 3:
 * 입력: p = [1,2,1], q = [1,1,2]
 * 출력: false
 */
import { TreeNode } from '../types';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // 여기에 코드를 작성하세요
    
    return false;
}


// 테스트 케이스
const testCases = [
    { p: [1, 2, 3], q: [1, 2, 3] },
    { p: [1, 2], q: [1, null, 2] },
    { p: [1, 2, 1], q: [1, 1, 2] }
];

testCases.forEach(test => {
    console.log(test);
});

export { isSameTree, TreeNode };