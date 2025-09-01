/**
 * 10. Regular Expression Matching (Hard)
 * 
 * Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 * 
 * Example:
 * Input: s = "aa", p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 */

/**
 * 10. 정규식 일치 (Hard)
 *
 * 입력 문자열 s와 패턴 p가 주어지면, '.' 및 '*'를 지원하는 정규식 일치를 구현합니다. 여기서:
 * '.'는 모든 단일 문자와 일치합니다.
 * '*'는 앞 요소의 0개 이상과 일치합니다.
 * 일치는 전체 입력 문자열을 포함해야 합니다(부분적이지 않음).
 *
 * 예시:
 * 입력: s = "aa", p = "a"
 * 출력: false
 * 설명: "a"는 전체 문자열 "aa"와 일치하지 않습니다.
 */

function isMatch(s: string, p: string): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(isMatch("aa", "a")); // Expected: false
console.log(isMatch("aa", "a*")); // Expected: true
console.log(isMatch("ab", ".*")); // Expected: true