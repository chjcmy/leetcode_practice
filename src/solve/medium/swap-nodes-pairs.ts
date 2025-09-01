/**
 * 24. Swap Nodes in Pairs (Medium)
 * 
 * Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 * 
 * Example:
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 */

/**
 * 24. 쌍으로 노드 교환 (Medium)
 *
 * 연결 리스트가 주어지면 인접한 두 노드를 모두 교환하고 해당 헤드를 반환합니다. 리스트 노드의 값을 수정하지 않고 문제를 해결해야 합니다(즉, 노드 자체만 변경할 수 있음).
 *
 * 예시:
 * 입력: head = [1,2,3,4]
 * 출력: [2,1,4,3]
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(swapPairs(head)); // Expected: [2,1,4,3]