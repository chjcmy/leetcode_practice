/**
 * 828. Count Unique Characters of All Substrings of a Given String (Hard)
 * 
 * Let's define a function countUniqueChars(s) that returns the number of unique characters on s.
 * For example, calling countUniqueChars("LEETCODE") returns 4 because there are 4 unique characters in "LEETCODE": "L", "T", "C", and "D".
 * Given a string s, return the sum of countUniqueChars(t) where t is a substring of s. Notice that some substrings can be repeated so in this case you have to count the repeated ones too.
 * Since the answer can be very large, return it modulo 10^9 + 7.
 * 
 * Example:
 * Input: s = "ABC"
 * Output: 10
 * Explanation: All possible substrings are: "A", "B", "C", "AB", "BC" and "ABC".
 * Every substring is composed with only unique letters.
 * Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10
 * 
 * Example:
 * Input: s = "ABA"
 * Output: 8
 * Explanation: The same as example 1, except countUniqueChars("ABA") = 1 (only "B" is unique) and countUniqueChars("AB") = countUniqueChars("BA") = 2.
 * 
 * Example:
 * Input: s = "LEETCODE"
 * Output: 92
 */

/**
 * 828. 주어진 문자열의 모든 부분 문자열의 고유 문자 개수 세기 (Hard)
 *
 * s의 고유 문자의 수를 반환하는 함수 countUniqueChars(s)를 정의합시다.
 * 예를 들어, countUniqueChars("LEETCODE")를 호출하면 "LEETCODE"에 "L", "T", "C", "D"의 4개의 고유 문자가 있으므로 4를 반환합니다.
 * 문자열 s가 주어지면, t가 s의 부분 문자열일 때 모든 countUniqueChars(t)의 합을 반환하세요. 일부 부분 문자열은 반복될 수 있으므로 이 경우 반복되는 부분 문자열도 세어야 합니다.
 * 답이 매우 클 수 있으므로 10^9 + 7로 나눈 나머지를 반환하세요.
 *
 * 예시:
 * 입력: s = "ABC"
 * 출력: 10
 * 설명: 가능한 모든 부분 문자열은 "A", "B", "C", "AB", "BC", "ABC"입니다.
 * 모든 부분 문자열은 고유한 문자로만 구성됩니다.
 * 모든 부분 문자열의 길이 합은 1 + 1 + 1 + 2 + 2 + 3 = 10입니다.
 *
 * 예시:
 * 입력: s = "ABA"
 * 출력: 8
 * 설명: 예제 1과 동일하지만, countUniqueChars("ABA") = 1("B"만 고유함)이고 countUniqueChars("AB") = countUniqueChars("BA") = 2입니다.
 *
 * 예시:
 * 입력: s = "LEETCODE"
 * 출력: 92
 */

function uniqueLetterString(s: string): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(uniqueLetterString("ABC")); // Expected: 10
console.log(uniqueLetterString("ABA")); // Expected: 8
console.log(uniqueLetterString("LEETCODE")); // Expected: 92