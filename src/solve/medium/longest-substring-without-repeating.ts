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
    // start, end 변수를 만든다
    let start = 0;
    let maxLength = 0;
    const charIndexMap = new Map<string, number>();

    // s 크기 만큼 반복 한다
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // 현재 문자가 Set에 이미 존재 하면
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar)! >= start) {
            start = charIndexMap.get(currentChar)! + 1;
        }

        charIndexMap.set(currentChar, end);

        maxLength = Math.max(maxLength, end - start + 1);

    }

    // set 을 통해서 없다면 end에 max을 비교하면서 end - start 값이 max보다 값이 크다면 max에 값을 추가한다
    // 추가 하고 반복 되거나 s의 끝이 나올때 끝낸다
    return maxLength;
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

