/**
 * 23. Merge k Sorted Lists (Hard) - Different version
 * 
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Example:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 */

/**
 * 23. k개의 정렬된 리스트 병합 (Hard) - 다른 버전
 *
 * k개의 연결 리스트 배열 lists가 주어지며, 각 연결 리스트는 오름차순으로 정렬되어 있습니다.
 * 모든 연결 리스트를 하나의 정렬된 연결 리스트로 병합하고 반환합니다.
 *
 * 예시:
 * 입력: lists = [[1,4,5],[1,3,4],[2,6]]
 * 출력: [1,1,2,3,4,4,5,6]
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeKLists2(lists: Array<ListNode | null>): ListNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));
console.log(mergeKLists2([list1, list2, list3])); // Expected: [1,1,2,3,4,4,5,6]