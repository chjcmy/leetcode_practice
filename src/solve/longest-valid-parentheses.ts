/**
 * 32. Longest Valid Parentheses (Hard)
 * 
 * Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.
 * 
 * Example:
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 */

/**
 * 32. 가장 긴 유효한 괄호 (Hard)
 *
 * '('와 ')' 문자만 포함하는 문자열이 주어지면 가장 긴 유효한 (잘 형성된) 괄호 부분 문자열의 길이를 반환합니다.
 *
 * 예시:
 * 입력: s = "(()"
 * 출력: 2
 * 설명: 가장 긴 유효한 괄호 부분 문자열은 "()"입니다.
 */

function longestValidParentheses(s: string): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(longestValidParentheses("(()")); // Expected: 2
console.log(longestValidParentheses(")()())")); // Expected: 4
console.log(longestValidParentheses("")); // Expected: 0