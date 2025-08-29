/**
 * 141. Linked List Cycle (Easy)
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
 * 
 * Example:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 */

/**
 * 141. 연결 리스트 순환 (Easy)
 *
 * 연결 리스트의 헤드인 head가 주어지면, 연결 리스트에 순환이 있는지 확인합니다.
 * 연결 리스트에 순환이 있는 경우는 next 포인터를 계속 따라가서 다시 도달할 수 있는 노드가 리스트에 있는 경우입니다.
 *
 * 예시:
 * 입력: head = [3,2,0,-4], pos = 1
 * 출력: true
 * 설명: 연결 리스트에 순환이 있으며, 꼬리가 1번째 노드(0-인덱스)에 연결됩니다.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
const head = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));
head.next!.next!.next!.next = head.next; // Creates cycle
console.log(hasCycle(head)); // Expected: true