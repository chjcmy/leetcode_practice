/**
 * 1220. Count Vowels Permutation (Hard)
 * 
 * Given an integer n, your task is to count how many strings of length n can be formed under the following rules:
 * - Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
 * - Each vowel 'a' may only be followed by an 'e'.
 * - Each vowel 'e' may only be followed by an 'a' or an 'i'.
 * - Each vowel 'i' may not be followed by another 'i'.
 * - Each vowel 'o' may only be followed by an 'i' or a 'u'.
 * - Each vowel 'u' may only be followed by an 'a'.
 * 
 * Since the answer may be too large, return it modulo 10^9 + 7.
 * 
 * Example:
 * Input: n = 1
 * Output: 5
 * Explanation: All possible strings are: "a", "e", "i" , "o" and "u".
 * 
 * Example:
 * Input: n = 2
 * Output: 10
 * Explanation: All possible strings are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".
 */

/**
 * 1220. 모음 순열 개수 세기 (Hard)
 *
 * 정수 n이 주어지면 다음 규칙에 따라 형성될 수 있는 길이 n의 문자열 수를 세는 것이 당신의 임무입니다:
 * - 각 문자는 소문자 모음('a', 'e', 'i', 'o', 'u')입니다.
 * - 각 모음 'a'는 'e'만 뒤따를 수 있습니다.
 * - 각 모음 'e'는 'a' 또는 'i'만 뒤따를 수 있습니다.
 * - 각 모음 'i'는 다른 'i'를 뒤따를 수 없습니다.
 * - 각 모음 'o'는 'i' 또는 'u'만 뒤따를 수 있습니다.
 * - 각 모음 'u'는 'a'만 뒤따를 수 있습니다.
 *
 * 답이 너무 클 수 있으므로 10^9 + 7로 나눈 나머지를 반환합니다.
 *
 * 예시:
 * 입력: n = 1
 * 출력: 5
 * 설명: 가능한 모든 문자열은 "a", "e", "i", "o", "u"입니다.
 *
 * 예시:
 * 입력: n = 2
 * 출력: 10
 * 설명: 가능한 모든 문자열은 "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou", "ua"입니다.
 */

function countVowelPermutation(n: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(countVowelPermutation(1)); // Expected: 5
console.log(countVowelPermutation(2)); // Expected: 10
console.log(countVowelPermutation(5)); // Expected: 68