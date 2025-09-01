/**
 * 150. Evaluate Reverse Polish Notation (Medium)
 * 
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
 * Note that division between two integers should truncate toward zero.
 * It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
 * 
 * Example:
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 */

/**
 * 150. 역폴란드 표기법 계산 (Medium)
 *
 * 역폴란드 표기법으로 된 산술 식의 값을 계산합니다.
 * 유효한 연산자는 +, -, *, /입니다. 각 피연산자는 정수 또는 다른 식일 수 있습니다.
 * 두 정수 사이의 나눗셈은 0을 향해 버림해야 합니다.
 * 주어진 RPN 식이 항상 유효함이 보장됩니다. 즉, 식은 항상 결과로 평가되며 0으로 나누는 연산은 없습니다.
 *
 * 예시:
 * 입력: tokens = ["2","1","+","3","*"]
 * 출력: 9
 * 설명: ((2 + 1) * 3) = 9
 */

function evalRPN(tokens: string[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(evalRPN(["2","1","+","3","*"])); // Expected: 9
console.log(evalRPN(["4","13","5","/","+"])); // Expected: 6