/**
 * 143. Reorder List (Medium)
 * 
 * You are given the head of a singly linked-list. The list can be represented as:
 * L0 → L1 → … → Ln - 1 → Ln
 * Reorder the list to be on the following form:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * You may not modify the values in the list's nodes. Only nodes themselves may be changed.
 * 
 * Example:
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 */

/**
 * 143. 리스트 재정렬 (Medium)
 *
 * 단일 연결 리스트의 헤드가 주어집니다. 리스트는 다음과 같이 나타낼 수 있습니다:
 * L0 → L1 → … → Ln - 1 → Ln
 * 다음 형식으로 리스트를 재정렬합니다:
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 * 리스트 노드의 값은 수정할 수 없습니다. 노드 자체만 변경할 수 있습니다.
 *
 * 예시:
 * 입력: head = [1,2,3,4]
 * 출력: [1,4,2,3]
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reorderList(head: ListNode | null): void {
    // 여기에 구현하세요
}

// Test cases
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
reorderList(head);
console.log(head); // Expected: [1,4,2,3]