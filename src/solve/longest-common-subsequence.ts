/**
 * 1143. Longest Common Subsequence (Medium)
 * 
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 * 
 * Example:
 * Input: text1 = "abcde", text2 = "ace" 
 * Output: 3  
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 */

/**
 * 1143. 가장 긴 공통 부분 수열 (Medium)
 *
 * 두 문자열 text1과 text2가 주어지면, 가장 긴 공통 부분 수열의 길이를 반환합니다. 공통 부분 수열이 없으면 0을 반환합니다.
 * 문자열의 부분 수열은 원래 문자열에서 일부 문자(없을 수도 있음)를 삭제하고 나머지 문자의 상대적 순서를 변경하지 않고 생성된 새 문자열입니다.
 *
 * 예시:
 * 입력: text1 = "abcde", text2 = "ace" 
 * 출력: 3  
 * 설명: 가장 긴 공통 부분 수열은 "ace"이고 길이는 3입니다.
 */

function longestCommonSubsequence(text1: string, text2: string): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace")); // Expected: 3
console.log(longestCommonSubsequence("abc", "abc")); // Expected: 3
console.log(longestCommonSubsequence("abc", "def")); // Expected: 0