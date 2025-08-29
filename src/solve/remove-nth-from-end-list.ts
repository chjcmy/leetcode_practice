/**
 * 19. Remove Nth Node From End of List (Medium) - Different version
 * 
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * 
 * Example:
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 */

/**
 * 19. 리스트 끝에서 n번째 노드 제거 (Medium) - 다른 버전
 *
 * 연결 리스트의 헤드가 주어지면 리스트 끝에서 n번째 노드를 제거하고 해당 헤드를 반환합니다.
 *
 * 예시:
 * 입력: head = [1,2,3,4,5], n = 2
 * 출력: [1,2,3,5]
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEndList(head: ListNode | null, n: number): ListNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(removeNthFromEndList(head, 2)); // Expected: [1,2,3,5]