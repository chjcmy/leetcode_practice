/**
 * 895. Maximum Frequency Stack (Hard)
 * 
 * Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.
 * Implement the FreqStack class:
 * - FreqStack() constructs an empty frequency stack.
 * - void push(int val) pushes an integer val onto the top of the stack.
 * - int pop() removes and returns the most frequent element in the stack.
 *   - If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
 * 
 * Example:
 * Input: ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
 * [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
 * Output: [null, null, null, null, null, null, null, 5, 7, 5, 4]
 * 
 * Explanation:
 * FreqStack freqStack = new FreqStack();
 * freqStack.push(5); // The stack is [5]
 * freqStack.push(7); // The stack is [5,7]
 * freqStack.push(5); // The stack is [5,7,5]
 * freqStack.push(7); // The stack is [5,7,5,7]
 * freqStack.push(4); // The stack is [5,7,5,7,4]
 * freqStack.push(5); // The stack is [5,7,5,7,4,5]
 * freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
 * freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
 * freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
 * freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
 */

/**
 * 895. 최대 빈도 스택 (Hard)
 *
 * 스택에 요소를 푸시하고 스택에서 가장 빈번한 요소를 팝하는 스택과 유사한 데이터 구조를 설계합니다.
 * FreqStack 클래스를 구현합니다:
 * - FreqStack() 빈도 스택을 생성합니다.
 * - void push(int val) 정수 val을 스택의 맨 위에 푸시합니다.
 * - int pop() 스택에서 가장 빈번한 요소를 제거하고 반환합니다.
 *   - 가장 빈번한 요소에 대한 동점일 경우, 스택의 맨 위에 가장 가까운 요소가 제거되고 반환됩니다.
 *
 * 예시:
 * 입력: ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
 * [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
 * 출력: [null, null, null, null, null, null, null, 5, 7, 5, 4]
 *
 * 설명:
 * FreqStack freqStack = new FreqStack();
 * freqStack.push(5); // 스택은 [5]
 * freqStack.push(7); // 스택은 [5,7]
 * freqStack.push(5); // 스택은 [5,7,5]
 * freqStack.push(7); // 스택은 [5,7,5,7]
 * freqStack.push(4); // 스택은 [5,7,5,7,4]
 * freqStack.push(5); // 스택은 [5,7,5,7,4,5]
 * freqStack.pop();   // 5가 가장 빈번하므로 5를 반환합니다. 스택은 [5,7,5,7,4]가 됩니다.
 * freqStack.pop();   // 5와 7이 가장 빈번하지만 7이 맨 위에 더 가까우므로 7을 반환합니다. 스택은 [5,7,5,4]가 됩니다.
 * freqStack.pop();   // 5가 가장 빈번하므로 5를 반환합니다. 스택은 [5,7,4]가 됩니다.
 * freqStack.pop();   // 4, 5, 7이 가장 빈번하지만 4가 맨 위에 가장 가까우므로 4를 반환합니다. 스택은 [5,7]이 됩니다.
 */

class FreqStack {
    constructor() {
        // 여기에 초기화 코드 구현하세요
    }

    push(val: number): void {
        // 여기에 구현하세요
    }

    pop(): number {
        // 여기에 구현하세요
        return 0;
    }
}

// Test cases
const freqStack = new FreqStack();
freqStack.push(5);
freqStack.push(7);
freqStack.push(5);
freqStack.push(7);
freqStack.push(4);
freqStack.push(5);
console.log(freqStack.pop()); // Expected: 5
console.log(freqStack.pop()); // Expected: 7
console.log(freqStack.pop()); // Expected: 5
console.log(freqStack.pop()); // Expected: 4