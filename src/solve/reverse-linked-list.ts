/**
 * 206. Reverse Linked List (Easy)
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 * 
 * Example 3:
 * Input: head = []
 * Output: []
 */

/**
 * 206. 연결 리스트 뒤집기 (Easy)
 *
 * 단일 연결 리스트의 헤드가 주어지면 리스트를 뒤집고 뒤집힌 리스트를 반환하세요.
 *
 * 예시 1:
 * 입력: head = [1,2,3,4,5]
 * 출력: [5,4,3,2,1]
 *
 * 예시 2:
 * 입력: head = [1,2]
 * 출력: [2,1]
 *
 * 예시 3:
 * 입력: head = []
 * 출력: []
 */
import { ListNode } from '../types';

function reverseList(head: ListNode | null): ListNode | null {
    // 여기에 코드를 작성하세요
    
    return null;
}


// 테스트 케이스
const testCases = [
    [1, 2, 3, 4, 5],
    [1, 2],
    []
];

testCases.forEach(test => {
    console.log(test);
});

export { reverseList, ListNode };