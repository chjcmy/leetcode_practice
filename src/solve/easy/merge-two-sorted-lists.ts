/**
 * 21. Merge Two Sorted Lists (Easy)
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * 
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 * 
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 */

/**
 * 21. 정렬된 두 리스트 병합 (Easy)
 *
 * 정렬된 두 연결 리스트의 헤드 `list1`과 `list2`가 주어집니다.
 * 두 리스트를 하나의 정렬된 리스트로 병합하세요. 이 리스트는 처음 두 리스트의 노드를 함께 이어 붙여 만들어야 합니다.
 * 병합된 연결 리스트의 헤드를 반환하세요.
 *
 * 예시 1:
 * 입력: list1 = [1,2,4], list2 = [1,3,4]
 * 출력: [1,1,2,3,4,4]
 *
 * 예시 2:
 * 입력: list1 = [], list2 = []
 * 출력: []
 *
 * 예시 3:
 * 입력: list1 = [], list2 = [0]
 * 출력: [0]
 */
import { ListNode } from '../types';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 여기에 코드를 작성하세요
    
    return null;
}


// 테스트 케이스
const testCases = [
    { list1: [1, 2, 4], list2: [1, 3, 4] },
    { list1: [], list2: [] },
    { list1: [], list2: [0] }
];

testCases.forEach(test => {
    console.log(test);
});

export { mergeTwoLists, ListNode };