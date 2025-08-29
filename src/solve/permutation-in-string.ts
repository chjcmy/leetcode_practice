/**
 * 567. Permutation in String (Medium)
 * 
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1. In other words, return true if one of s1's permutations is the substring of s2.
 * 
 * Example:
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 */

/**
 * 567. 문자열에 순열 포함 (Medium)
 *
 * 두 문자열 s1과 s2가 주어지면 s2에 s1의 순열이 포함되어 있으면 true를 반환합니다. 즉, s1의 순열 중 하나가 s2의 부분 문자열이면 true를 반환합니다.
 *
 * 예시:
 * 입력: s1 = "ab", s2 = "eidbaooo"
 * 출력: true
 * 설명: s2에는 s1의 순열 중 하나("ba")가 포함되어 있습니다.
 */

function checkInclusion(s1: string, s2: string): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(checkInclusion("ab", "eidbaooo")); // Expected: true
console.log(checkInclusion("ab", "eidboaoo")); // Expected: false