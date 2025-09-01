/**
 * 772. Basic Calculator III (Hard)
 * 
 * Implement a basic calculator to evaluate a simple expression string.
 * The expression string contains only non-negative integers, '+', '-', '*', '/' operators, and open '(' and closing parentheses ')'. The integer division should truncate toward zero.
 * You may assume that the given expression is always valid. All intermediate results will be in the range of [-2^31, 2^31 - 1].
 * Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
 * 
 * Example:
 * Input: s = "1+1"
 * Output: 2
 * 
 * Example:
 * Input: s = "6-4/2"
 * Output: 4
 * 
 * Example:
 * Input: s = "2*(5+5*2)/3+(6/2+8)"
 * Output: 21
 * 
 * Example:
 * Input: s = "(2+6*3+5-(3*14/7+2)*5)+3"
 * Output: -12
 */

/**
 * 772. 기본 계산기 III (Hard)
 *
 * 간단한 수식 문자열을 평가하는 기본 계산기를 구현합니다.
 * 수식 문자열에는 음이 아닌 정수, '+', '-', '*', '/' 연산자, 여는 괄호 '(' 및 닫는 괄호 ')'만 포함됩니다. 정수 나눗셈은 0을 향해 버림해야 합니다.
 * 주어진 수식은 항상 유효하다고 가정할 수 있습니다. 모든 중간 결과는 [-2^31, 2^31 - 1] 범위에 있습니다.
 * 참고: eval()과 같이 문자열을 수학적 표현식으로 평가하는 내장 함수를 사용할 수 없습니다.
 *
 * 예시:
 * 입력: s = "1+1"
 * 출력: 2
 *
 * 예시:
 * 입력: s = "6-4/2"
 * 출력: 4
 *
 * 예시:
 * 입력: s = "2*(5+5*2)/3+(6/2+8)"
 * 출력: 21
 *
 * 예시:
 * 입력: s = "(2+6*3+5-(3*14/7+2)*5)+3"
 * 출력: -12
 */

function calculate(s: string): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(calculate("1+1")); // Expected: 2
console.log(calculate("6-4/2")); // Expected: 4
console.log(calculate("2*(5+5*2)/3+(6/2+8)")); // Expected: 21
console.log(calculate("(2+6*3+5-(3*14/7+2)*5)+3")); // Expected: -12