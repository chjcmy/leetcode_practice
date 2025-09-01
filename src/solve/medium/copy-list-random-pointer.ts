/**
 * 138. Copy List with Random Pointer (Medium)
 * 
 * A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
 * Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
 * 
 * Example:
 * Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
 */

/**
 * 138. 임의의 포인터가 있는 리스트 복사 (Medium)
 *
 * 각 노드에 리스트의 임의의 노드 또는 null을 가리킬 수 있는 추가 임의 포인터가 포함된 길이 n의 연결 리스트가 주어집니다.
 * 리스트의 깊은 복사본을 만듭니다. 깊은 복사본은 정확히 n개의 새로운 노드로 구성되어야 하며, 각 새 노드의 값은 해당 원본 노드의 값으로 설정됩니다. 새 노드의 next 및 random 포인터는 모두 복사된 리스트의 새 노드를 가리켜야 하며, 원본 리스트와 복사된 리스트의 포인터가 동일한 리스트 상태를 나타내도록 해야 합니다. 새 리스트의 포인터는 원본 리스트의 노드를 가리켜서는 안 됩니다.
 *
 * 예시:
 * 입력: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 출력: [[7,null],[13,0],[11,4],[10,2],[1,0]]
 */

class RandomListNode {
    val: number
    next: RandomListNode | null
    random: RandomListNode | null
    constructor(val?: number, next?: RandomListNode | null, random?: RandomListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

function copyRandomList(head: RandomListNode | null): RandomListNode | null {
    // 여기에 구현하세요
    return null;
}

// Test cases
const node1 = new RandomListNode(7);
const node2 = new RandomListNode(13);
const node3 = new RandomListNode(11);
const node4 = new RandomListNode(10);
const node5 = new RandomListNode(1);

node1.next = node2;
node2.next = node3; node2.random = node1;
node3.next = node4; node3.random = node5;
node4.next = node5; node4.random = node3;
node5.random = node1;

console.log(copyRandomList(node1)); // Should return deep copy