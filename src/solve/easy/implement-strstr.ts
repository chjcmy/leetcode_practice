/**
 * 28. Find the Index of the First Occurrence in a String (Easy)
 * 
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Example:
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 */

/**
 * 28. 문자열에서 첫 번째 발생 인덱스 찾기 (Easy)
 *
 * 두 문자열 needle과 haystack이 주어지면, haystack에서 needle의 첫 번째 발생 인덱스를 반환하거나, needle이 haystack의 일부가 아니면 -1을 반환합니다.
 *
 * 예시:
 * 입력: haystack = "sadbutsad", needle = "sad"
 * 출력: 0
 * 설명: "sad"는 인덱스 0과 6에서 발생합니다.
 * 첫 번째 발생은 인덱스 0이므로 0을 반환합니다.
 */

function strStr(haystack: string, needle: string): number {
    // 여기에 구현하세요
    return -1;
}

// Test cases
console.log(strStr("sadbutsad", "sad")); // Expected: 0
console.log(strStr("leetcode", "leeto")); // Expected: -1