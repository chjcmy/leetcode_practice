/**
 * 520. Detect Capital (Easy)
 * 
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * - All letters in this word are capitals, like "USA".
 * - All letters in this word are not capitals, like "leetcode".
 * - Only the first letter in this word is capital, like "Google".
 * Given a string word, return true if the usage of capitals in it is right.
 * 
 * Example:
 * Input: word = "USA"
 * Output: true
 */

/**
 * 520. 대문자 감지 (Easy)
 *
 * 단어에서 대문자 사용이 다음 경우 중 하나에 해당할 때 올바르다고 정의합니다:
 * - 이 단어의 모든 글자가 "USA"와 같이 대문자입니다.
 * - 이 단어의 모든 글자가 "leetcode"와 같이 대문자가 아닙니다.
 * - 이 단어의 첫 글자만 "Google"과 같이 대문자입니다.
 * 문자열 단어가 주어지면 대문자 사용이 올바른 경우 true를 반환합니다.
 *
 * 예시:
 * 입력: word = "USA"
 * 출력: true
 */

function detectCapitalUse(word: string): boolean {
    // 1. All letters are capitals (e.g., "USA")
    // 2. All letters are not capitals (e.g., "leetcode")
    // 3. Only the first letter is capital (e.g., "Google")
    const allCaps = /^[A-Z]+$/;
    const allLower = /^[a-z]+$/;
    const firstCap = /^[A-Z][a-z]*$/; // * handles single-letter words like "A"

    return allCaps.test(word) || allLower.test(word) || firstCap.test(word);
}

// Test cases
console.log(detectCapitalUse("USA")); // Expected: true
console.log(detectCapitalUse("FlaG")); // Expected: false