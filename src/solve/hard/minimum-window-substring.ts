/**
 * 76. Minimum Window Substring (Hard)
 * 
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such window, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 * A window is a contiguous sequence of characters within the string.
 * 
 * Example:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 */

/**
 * 76. 최소 윈도우 부분 문자열 (Hard)
 *
 * 각각 길이가 m과 n인 두 문자열 s와 t가 주어지면, t의 모든 문자(중복 포함)가 윈도우에 포함되도록 하는 s의 최소 윈도우 부분 문자열을 반환합니다. 이러한 윈도우가 없으면 빈 문자열 ""을 반환합니다.
 * 테스트 케이스는 답이 고유하도록 생성됩니다.
 * 윈도우는 문자열 내의 연속적인 문자 시퀀스입니다.
 *
 * 예시:
 * 입력: s = "ADOBECODEBANC", t = "ABC"
 * 출력: "BANC"
 * 설명: 최소 윈도우 부분 문자열 "BANC"에는 문자열 t의 'A', 'B', 'C'가 포함됩니다.
 */

function minWindow(s: string, t: string): string {
    // 여기에 구현하세요
    return "";
}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a")); // Expected: "a"
console.log(minWindow("a", "aa")); // Expected: ""