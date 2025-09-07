/**
 * 392. Is Subsequence (Easy)
 *
 * Given two strings s and t, return true if s is a subsequence of t, and false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative
 * positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde"
 * while "aec" is not).
 *
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 *
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 */

/**
 * 392. 부분 문자열 확인 (Easy)
 *
 * 두 문자열 s와 t가 주어졌을 때, s가 t의 부분 문자열이면 true를, 그렇지 않으면 false를 반환합니다.
 *
 * 문자열의 부분 문자열(subsequence)은 원래 문자열에서 일부 문자(없을 수도 있음)를
 * 삭제하여 생성된 새로운 문자열로, 나머지 문자의 상대적인 위치는 그대로 유지됩니다.
 * (예: "ace"는 "abcde"의 부분 문자열이지만, "aec"는 아닙니다).
 *
 * 예시 1:
 * 입력: s = "abc", t = "ahbgdc"
 * 출력: true
 *
 * 예시 2:
 * 입력: s = "axc", t = "ahbgdc"
 * 출력: false
 */
function isSubsequence(s: string, t: string): boolean {
    // 여기에 구현하세요

    let s_pointer = 0;
    let t_pointer = 0;

    while (t_pointer < t.length) {

        if(s[s_pointer] === t[t_pointer]) {
            s_pointer++;
        }

        t_pointer++;
    }

    return s_pointer === s.length;

};

// Test cases
console.log(`Test 1: s = "abc", t = "ahbgdc"`);
console.log(`Expected: true, Output: ${isSubsequence("abc", "ahbgdc")}`);
console.log('---');

console.log(`Test 2: s = "axc", t = "ahbgdc"`);
console.log(`Expected: false, Output: ${isSubsequence("axc", "ahbgdc")}`);
console.log('---');

console.log(`Test 3: s = "ace", t = "abcde"`);
console.log(`Expected: true, Output: ${isSubsequence("ace", "abcde")}`);
console.log('---');

console.log(`Test 4: s = "aec", t = "abcde"`);
console.log(`Expected: false, Output: ${isSubsequence("aec", "abcde")}`);
console.log('---');

console.log(`Test 5: s = "", t = "abcde"`);
console.log(`Expected: true, Output: ${isSubsequence("", "abcde")}`);
console.log('---');