/**
 * 132. Palindrome Partitioning II (Hard)
 * 
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * 
 * Example:
 * Input: s = "aab"
 * Output: 1
 * Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
 * 
 * Example:
 * Input: s = "aba"
 * Output: 0
 * Explanation: s itself is a palindrome, so no cuts are needed.
 * 
 * Example:
 * Input: s = "abcde"
 * Output: 4
 * Explanation: The minimum cuts needed is 4 for ["a","b","c","d","e"].
 */

/**
 * 132. 회문 분할 II (Hard)
 *
 * 문자열 s가 주어지면, 분할의 모든 부분 문자열이 회문이 되도록 s를 분할합니다.
 * s의 회문 분할에 필요한 최소 컷 수를 반환합니다.
 *
 * 예시:
 * 입력: s = "aab"
 * 출력: 1
 * 설명: 회문 분할 ["aa","b"]는 1개의 컷을 사용하여 생성할 수 있습니다.
 *
 * 예시:
 * 입력: s = "aba"
 * 출력: 0
 * 설명: s 자체가 회문이므로 컷이 필요하지 않습니다.
 *
 * 예시:
 * 입력: s = "abcde"
 * 출력: 4
 * 설명: ["a","b","c","d","e"]에 필요한 최소 컷 수는 4입니다.
 */

function minCut(s: string): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(minCut("aab")); // Expected: 1
console.log(minCut("aba")); // Expected: 0
console.log(minCut("abcde")); // Expected: 4