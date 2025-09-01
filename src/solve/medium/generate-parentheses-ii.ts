/**
 * 20. Valid Parentheses (Easy) - Already exists, creating similar problem
 * 1249. Minimum Remove to Make Valid Parentheses (Medium)
 * 
 * Given a string s of '(' , ')' and lowercase English characters.
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
 * Formally, a parentheses string is valid if and only if:
 * - It is the empty string, contains only lowercase characters, or
 * - It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * - It can be written as (A), where A is a valid string.
 * 
 * Example:
 * Input: s = "()())"
 * Output: "()()"
 */

/**
 * 20. 유효한 괄호 (Easy) - 이미 존재, 유사 문제 생성
 * 1249. 유효한 괄호를 만들기 위한 최소 제거 (Medium)
 *
 * '(', ')' 및 소문자 영어 문자로 구성된 문자열 s가 주어집니다.
 * 당신의 임무는 결과 괄호 문자열이 유효하도록 최소한의 괄호('(' 또는 ')', 모든 위치에서)를 제거하고 유효한 문자열을 반환하는 것입니다.
 * 공식적으로 괄호 문자열은 다음과 같은 경우에만 유효합니다:
 * - 빈 문자열이거나 소문자만 포함합니다.
 * - A와 B가 유효한 문자열인 AB(A와 B를 연결)로 쓸 수 있습니다.
 * - A가 유효한 문자열인 (A)로 쓸 수 있습니다.
 *
 * 예시:
 * 입력: s = "()())"
 * 출력: "()()"
 */

function minRemoveToMakeValid(s: string): string {
    // 여기에 구현하세요
    return "";
}

// Test cases
console.log(minRemoveToMakeValid("()())")); // Expected: "()()"
console.log(minRemoveToMakeValid("(((")); // Expected: ""
console.log(minRemoveToMakeValid("())")); // Expected: "()"