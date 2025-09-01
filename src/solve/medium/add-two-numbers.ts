/**
 * 2. Add Two Numbers (Medium)
 * 
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * 
 * Example:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */

/**
 * 2. 두 수 더하기 (Medium)
 *
 * 두 개의 음이 아닌 정수를 나타내는 비어 있지 않은 연결 리스트 두 개가 주어집니다.
 * 숫자는 역순으로 저장되며 각 노드에는 한 자리 숫자가 포함됩니다.
 * 두 숫자를 더하고 합계를 연결 리스트로 반환합니다.
 *
 * 예시:
 * 입력: l1 = [2,4,3], l2 = [5,6,4]
 * 출력: [7,0,8]
 * 설명: 342 + 465 = 807.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2)); // Expected: [7,0,8]