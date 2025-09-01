/**
 * 131. Palindrome Partitioning (Medium)
 * 
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
 * A palindrome string is a string that reads the same backward as forward.
 * 
 * Example:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 */

/**
 * 131. 회문 분할 (Medium)
 *
 * 문자열 s가 주어지면, 분할의 모든 부분 문자열이 회문이 되도록 s를 분할합니다. s의 모든 가능한 회문 분할을 반환합니다.
 * 회문 문자열은 거꾸로 읽어도 똑같은 문자열입니다.
 *
 * 예시:
 * 입력: s = "aab"
 * 출력: [["a","a","b"],["aa","b"]]
 */

function partition(s: string): string[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(partition("aab")); // Expected: [["a","a","b"],["aa","b"]]
console.log(partition("raceacar")); // Expected: [["r","a","c","e","a","c","a","r"],["r","a","c","e","aca","r"],["r","a","cec","a","r"],["r","ace","c","a","r"],["race","a","car"],["raceacar"]]