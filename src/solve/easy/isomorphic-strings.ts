/**
 * 205. Isomorphic Strings (Easy)
 * 
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with the same character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 * 
 * Example:
 * Input: s = "egg", t = "add"
 * Output: true
 */

/**
 * 205. 동형 문자열 (Easy)
 *
 * 두 문자열 s와 t가 주어지면 동형인지 확인합니다.
 * 두 문자열 s와 t는 s의 문자를 바꾸어 t를 얻을 수 있으면 동형입니다.
 * 문자의 모든 발생은 문자의 순서를 유지하면서 동일한 문자로 바꾸어야 합니다. 두 문자가 동일한 문자에 매핑될 수 없지만 문자는 자신에게 매핑될 수 있습니다.
 *
 * 예시:
 * 입력: s = "egg", t = "add"
 * 출력: true
 */

function isIsomorphic(s: string, t: string): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(isIsomorphic("egg", "add")); // Expected: true
console.log(isIsomorphic("foo", "bar")); // Expected: false
console.log(isIsomorphic("paper", "title")); // Expected: true