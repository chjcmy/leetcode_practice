/**
 * 155. Min Stack (Medium)
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * Implement the MinStack class:
 * - MinStack() initializes the stack object.
 * - void push(int val) pushes the element val onto the stack.
 * - void pop() removes the element on the top of the stack.
 * - int top() gets the top element of the stack.
 * - int getMin() retrieves the minimum element in the stack.
 * You must implement a solution with O(1) time complexity for each function.
 * 
 * Example:
 * Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]
 *        [[],[-2],[0],[-3],[],[],[],[]]
 * Output: [null,null,null,null,-3,null,0,-2]
 */

/**
 * 155. 최소 스택 (Medium)
 *
 * push, pop, top 및 상수 시간에 최소 요소를 검색하는 것을 지원하는 스택을 설계합니다.
 * MinStack 클래스를 구현합니다:
 * - MinStack() 스택 객체를 초기화합니다.
 * - void push(int val) 요소 val을 스택에 푸시합니다.
 * - void pop() 스택의 맨 위 요소를 제거합니다.
 * - int top() 스택의 맨 위 요소를 가져옵니다.
 * - int getMin() 스택의 최소 요소를 검색합니다.
 * 각 함수에 대해 O(1) 시간 복잡도를 가진 솔루션을 구현해야 합니다.
 *
 * 예시:
 * 입력: ["MinStack","push","push","push","getMin","pop","top","getMin"]
 *        [[],[-2],[0],[-3],[],[],[],[]]
 * 출력: [null,null,null,null,-3,null,0,-2]
 */

class MinStack {
    constructor() {
        // 여기에 구현하세요
    }

    push(val: number): void {
        // 여기에 구현하세요
    }

    pop(): void {
        // 여기에 구현하세요
    }

    top(): number {
        // 여기에 구현하세요
        return 0;
    }

    getMin(): number {
        // 여기에 구현하세요
        return 0;
    }
}

// Test cases
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Expected: -3
minStack.pop();
console.log(minStack.top()); // Expected: 0
console.log(minStack.getMin()); // Expected: -2