/**
 * 678. Valid Parenthesis String (Medium)
 * 
 * Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
 * The following rules define a valid string:
 * - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * - Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 * 
 * Example:
 * Input: s = "(*)"
 * Output: true
 */

/**
 * 678. 유효한 괄호 문자열 (Medium)
 *
 * '(', ')', '*' 세 가지 유형의 문자만 포함하는 문자열 s가 주어지면 s가 유효하면 true를 반환합니다.
 * 다음 규칙은 유효한 문자열을 정의합니다:
 * - 모든 왼쪽 괄호 '('는 해당하는 오른쪽 괄호 ')'를 가져야 합니다.
 * - 모든 오른쪽 괄호 ')'는 해당하는 왼쪽 괄호 '('를 가져야 합니다.
 * - 왼쪽 괄호 '('는 해당하는 오른쪽 괄호 ')' 앞에 와야 합니다.
 * - '*'는 단일 오른쪽 괄호 ')' 또는 단일 왼쪽 괄호 '(' 또는 빈 문자열 ""로 처리될 수 있습니다.
 *
 * 예시:
 * 입력: s = "(*)"
 * 출력: true
 */

function checkValidString(s: string): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(checkValidString("(*)")); // Expected: true
console.log(checkValidString("(*)))")); // Expected: false