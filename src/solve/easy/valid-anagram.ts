/**
 * 242. Valid Anagram (Easy)
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 */

/**
 * 242. 유효한 애너그램 (Easy)
 *
 * 두 문자열 s와 t가 주어지면, t가 s의 애너그램이면 true를, 그렇지 않으면 false를 반환하세요.
 * 애너그램은 일반적으로 모든 원본 문자를 정확히 한 번 사용하여 다른 단어 나 구의 문자를 재배열하여 형성된 단어 또는 구입니다.
 *
 * 예시 1:
 * 입력: s = "anagram", t = "nagaram"
 * 출력: true
 *
 * 예시 2:
 * 입력: s = "rat", t = "car"
 * 출력: false
 */
function isAnagram(s: string, t: string): boolean {
    // 여기에 코드를 작성하세요
    const s_map = new Map<string, number>();

    for (const char of s) {
        if (s_map.has(char)) {
            s_map.set(char, s_map.get(char)! + 1)
        } else {
            s_map.set(char, 1)
        }
    }

    for (const char of t) {
        if (s_map.has(char)) {
            s_map.set(char, s_map.get(char)! - 1)
        } else {
            return false;
        }
    }

    for (const value of s_map.values()) {
        if (value !== 0) {
            return false;
        }
    }
    return true;
}

// 테스트 케이스
const testCases = [
    { s: "anagram", t: "nagaram" },
    { s: "rat", t: "car" },
    { s: "listen", t: "silent" }
];

testCases.forEach(test => {
    const result = isAnagram(test.s, test.t);
    console.log(result);
});

export { isAnagram };