/**
 * 44. Wildcard Matching (Hard)
 * 
 * Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 * The matching should cover the entire input string (not partial).
 * 
 * Example:
 * Input: s = "aa", p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 */

/**
 * 44. 와일드카드 일치 (Hard)
 *
 * 입력 문자열 (s)과 패턴 (p)이 주어지면, '?'와 '*'를 지원하는 와일드카드 패턴 일치를 구현합니다. 여기서:
 * '?'는 모든 단일 문자와 일치합니다.
 * '*'는 모든 문자 시퀀스(빈 시퀀스 포함)와 일치합니다.
 * 일치는 전체 입력 문자열을 포함해야 합니다(부분적이지 않음).
 *
 * 예시:
 * 입력: s = "aa", p = "a"
 * 출력: false
 * 설명: "a"는 전체 문자열 "aa"와 일치하지 않습니다.
 */

function isMatchWildcard(s: string, p: string): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(isMatchWildcard("aa", "a")); // Expected: false
console.log(isMatchWildcard("aa", "*")); // Expected: true
console.log(isMatchWildcard("cb", "?a")); // Expected: false