/**
 * Longest Substring Without Repeating Characters
 * 
 * 문제: 반복되는 문자가 없는 가장 긴 부분 문자열의 길이를 구하라
 * 
 * 예시:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: "abc"가 답 (길이 3)
 * 
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: "b"가 답 (길이 1)
 * 
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: "wke"가 답 (길이 3)
 * 
 * Input: s = ""
 * Output: 0
 */

function lengthOfLongestSubstring(s: string): number {
    // 여기에 코드를 작성하세요
    // Hint: Sliding Window 기법 + Set 또는 Map 사용
    
    return 0;
}

// 테스트 케이스
const testCases = [
    "abcabcbb",
    "bbbbb", 
    "pwwkew",
    "",
    "au",
    "dvdf",
    "anviaj",
    "abcdef"
];

testCases.forEach((test, index) => {
    const result = lengthOfLongestSubstring(test);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: "${test}"`);
    console.log(`Length: ${result}`);
    console.log('---');
});

export { lengthOfLongestSubstring };