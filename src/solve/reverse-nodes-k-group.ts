/**
 * 25. Reverse Nodes in k-Group (Hard)
 * 
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
 * k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
 * You may not alter the values in the list's nodes, only nodes themselves may be changed.
 * 
 * Example:
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 */

/**
 * 25. k-그룹으로 노드 뒤집기 (Hard)
 *
 * 연결 리스트의 헤드가 주어지면 리스트의 노드를 한 번에 k개씩 뒤집고 수정된 리스트를 반환합니다.
 * k는 양의 정수이며 연결 리스트의 길이보다 작거나 같습니다. 노드 수가 k의 배수가 아니면 마지막에 남은 노드는 그대로 두어야 합니다.
 * 리스트 노드의 값은 변경할 수 없으며 노드 자체만 변경할 수 있습니다.
 *
 * 예시:
 * 입력: head = [1,2,3,4,5], k = 2
 * 출력: [2,1,4,3,5]
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseKGroup(head, 2)); // Expected: [2,1,4,3,5]