/**
 * 65. Valid Number (Hard)
 * 
 * A valid number can be split up into these components (in order):
 * 1. A decimal number or an integer.
 * 2. (Optional) An 'e' or 'E', followed by an integer.
 * 
 * A decimal number can be split up into these components (in order):
 * 1. (Optional) A sign character (either '+' or '-').
 * 2. One of the following formats:
 *    - One or more digits, followed by a dot '.'.
 *    - One or more digits, followed by a dot '.', followed by one or more digits.
 *    - A dot '.', followed by one or more digits.
 * 
 * An integer can be split up into these components (in order):
 * 1. (Optional) A sign character (either '+' or '-').
 * 2. One or more digits.
 * 
 * Example:
 * Input: s = "0"
 * Output: true
 * 
 * Example:
 * Input: s = "e"
 * Output: false
 * 
 * Example:
 * Input: s = "."
 * Output: false
 */

/**
 * 65. 유효한 숫자 (Hard)
 *
 * 유효한 숫자는 다음 구성 요소로 순서대로 나눌 수 있습니다:
 * 1. 십진수 또는 정수.
 * 2. (선택 사항) 'e' 또는 'E', 그 뒤에 정수가 옵니다.
 *
 * 십진수는 다음 구성 요소로 순서대로 나눌 수 있습니다:
 * 1. (선택 사항) 부호 문자('+' 또는 '-').
 * 2. 다음 형식 중 하나:
 *    - 하나 이상의 숫자, 그 뒤에 점 '.'.
 *    - 하나 이상의 숫자, 그 뒤에 점 '.', 그 뒤에 하나 이상의 숫자.
 *    - 점 '.', 그 뒤에 하나 이상의 숫자.
 *
 * 정수는 다음 구성 요소로 순서대로 나눌 수 있습니다:
 * 1. (선택 사항) 부호 문자('+' 또는 '-').
 * 2. 하나 이상의 숫자.
 *
 * 예시:
 * 입력: s = "0"
 * 출력: true
 *
 * 예시:
 * 입력: s = "e"
 * 출력: false
 *
 * 예시:
 * 입력: s = "."
 * 출력: false
 */

function isNumber(s: string): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(isNumber("0")); // Expected: true
console.log(isNumber(" 0.1 ")); // Expected: true
console.log(isNumber("abc")); // Expected: false
console.log(isNumber("1 a")); // Expected: false
console.log(isNumber("2e10")); // Expected: true
console.log(isNumber(" -90e3   ")); // Expected: true
console.log(isNumber(" 1e")); // Expected: false
console.log(isNumber("e3")); // Expected: false
console.log(isNumber(" 6e-1")); // Expected: true
console.log(isNumber(" 99e2.5 ")); // Expected: false
console.log(isNumber("53.5e93")); // Expected: true
console.log(isNumber(" --6 ")); // Expected: false
console.log(isNumber("-+3")); // Expected: false
console.log(isNumber("95a54e53")); // Expected: false