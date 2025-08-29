/**
 * 521. Longest Uncommon Subsequence I (Easy)
 * 
 * Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such subsequence exists, return -1.
 * An uncommon subsequence between two strings is a string that is a subsequence of exactly one of them.
 * 
 * Example:
 * Input: a = "aba", b = "cdc"
 * Output: 3
 * Explanation: One longest uncommon subsequence is "aba" because it is a subsequence of a but not b.
 * Another longest uncommon subsequence is "cdc" because it is a subsequence of b but not a.
 */

/**
 * 521. 가장 긴 공통이 아닌 부분 수열 I (Easy)
 *
 * 두 문자열 a와 b가 주어지면 a와 b 사이의 가장 긴 공통이 아닌 부분 수열의 길이를 반환합니다. 그러한 부분 수열이 없으면 -1을 반환합니다.
 * 두 문자열 사이의 공통이 아닌 부분 수열은 정확히 그중 하나의 부분 수열인 문자열입니다.
 *
 * 예시:
 * 입력: a = "aba", b = "cdc"
 * 출력: 3
 * 설명: 가장 긴 공통이 아닌 부분 수열 중 하나는 "aba"입니다. 왜냐하면 a의 부분 수열이지만 b의 부분 수열은 아니기 때문입니다.
 * 또 다른 가장 긴 공통이 아닌 부분 수열은 "cdc"입니다. 왜냐하면 b의 부분 수열이지만 a의 부분 수열은 아니기 때문입니다.
 */

function findLUSlength(a: string, b: string): number {
    // 여기에 구현하세요
    return -1;
}

// Test cases
console.log(findLUSlength("aba", "cdc")); // Expected: 3
console.log(findLUSlength("aaa", "bbb")); // Expected: 3
console.log(findLUSlength("aaa", "aaa")); // Expected: -1