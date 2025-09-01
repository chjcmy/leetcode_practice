/**
 * 30. Substring with Concatenation of All Words (Hard)
 * 
 * You are given a string s and an array of strings words. All the strings of words are of the same length.
 * A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.
 * Return the starting indices of all the concatenated substrings in s.
 * 
 * Example:
 * Input: s = "barfoothefoobarman", words = ["foo","bar"]
 * Output: [0,9]
 */

/**
 * 30. 모든 단어의 연결로 된 부분 문자열 (Hard)
 *
 * 문자열 s와 문자열 배열 words가 주어집니다. words의 모든 문자열은 길이가 같습니다.
 * s의 연결된 부분 문자열은 words의 모든 순열을 연결한 것을 포함하는 부분 문자열입니다.
 * s에 있는 모든 연결된 부분 문자열의 시작 인덱스를 반환합니다.
 *
 * 예시:
 * 입력: s = "barfoothefoobarman", words = ["foo","bar"]
 * 출력: [0,9]
 */

function findSubstring(s: string, words: string[]): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(findSubstring("barfoothefoobarman", ["foo","bar"])); // Expected: [0,9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"])); // Expected: [8]