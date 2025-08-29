/**
 * 622. Design Circular Queue (Medium)
 * 
 * Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
 * 
 * One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.
 * 
 * Implement the MyCircularQueue class:
 * - MyCircularQueue(k) Initializes the object with the size of the queue to be k.
 * - boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
 * - boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
 * - int Front() Gets the front item from the queue. If the queue is empty, return -1.
 * - int Rear() Gets the last item from the queue. If the queue is empty, return -1.
 * - boolean isEmpty() Checks whether the circular queue is empty or not.
 * - boolean isFull() Checks whether the circular queue is full or not.
 * 
 * Example:
 * Input: ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
 *        [[3], [1], [2], [3], [4], [], [], [], [4], []]
 * Output: [null, true, true, true, false, 3, true, true, true, 4]
 */

/**
 * 622. 원형 큐 디자인 (Medium)
 *
 * 원형 큐의 구현을 디자인합니다. 원형 큐는 FIFO(First In First Out) 원칙에 따라 작업이 수행되고 마지막 위치가 첫 번째 위치에 다시 연결되어 원을 만드는 선형 데이터 구조입니다. "링 버퍼"라고도 합니다.
 *
 * 원형 큐의 이점 중 하나는 큐 앞의 공간을 활용할 수 있다는 것입니다. 일반 큐에서는 큐가 가득 차면 큐 앞에 공간이 있어도 다음 요소를 삽입할 수 없습니다. 그러나 원형 큐를 사용하면 공간을 사용하여 새 값을 저장할 수 있습니다.
 *
 * MyCircularQueue 클래스를 구현합니다:
 * - MyCircularQueue(k) 큐의 크기를 k로 객체를 초기화합니다.
 * - boolean enQueue(int value) 원형 큐에 요소를 삽입합니다. 작업이 성공하면 true를 반환합니다.
 * - boolean deQueue() 원형 큐에서 요소를 삭제합니다. 작업이 성공하면 true를 반환합니다.
 * - int Front() 큐에서 맨 앞 항목을 가져옵니다. 큐가 비어 있으면 -1을 반환합니다.
 * - int Rear() 큐에서 마지막 항목을 가져옵니다. 큐가 비어 있으면 -1을 반환합니다.
 * - boolean isEmpty() 원형 큐가 비어 있는지 확인합니다.
 * - boolean isFull() 원형 큐가 가득 찼는지 확인합니다.
 *
 * 예시:
 * 입력: ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
 *        [[3], [1], [2], [3], [4], [], [], [], [4], []]
 * 출력: [null, true, true, true, false, 3, true, true, true, 4]
 */

class MyCircularQueue {
    constructor(k: number) {
        // 여기에 구현하세요
    }

    enQueue(value: number): boolean {
        // 여기에 구현하세요
        return false;
    }

    deQueue(): boolean {
        // 여기에 구현하세요
        return false;
    }

    Front(): number {
        // 여기에 구현하세요
        return -1;
    }

    Rear(): number {
        // 여기에 구현하세요
        return -1;
    }

    isEmpty(): boolean {
        // 여기에 구현하세요
        return false;
    }

    isFull(): boolean {
        // 여기에 구현하세요
        return false;
    }
}

// Test cases
const circularQueue = new MyCircularQueue(3);
console.log(circularQueue.enQueue(1)); // Expected: true
console.log(circularQueue.enQueue(2)); // Expected: true
console.log(circularQueue.enQueue(3)); // Expected: true
console.log(circularQueue.enQueue(4)); // Expected: false
console.log(circularQueue.Rear()); // Expected: 3
console.log(circularQueue.isFull()); // Expected: true