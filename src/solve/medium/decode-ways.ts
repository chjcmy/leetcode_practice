/**
 * 91. Decode Ways (Medium)
 * 
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:
 * 'A' -> "1", 'B' -> "2", ..., 'Z' -> "26"
 * To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above.
 * Given a string s containing only digits, return the number of ways to decode it.
 * 
 * Example:
 * Input: s = "12"
 * Output: 2
 * Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
 */

/**
 * 91. 디코딩 방법 (Medium)
 *
 * A-Z 문자를 포함하는 메시지는 다음 매핑을 사용하여 숫자로 인코딩할 수 있습니다:
 * 'A' -> "1", 'B' -> "2", ..., 'Z' -> "26"
 * 인코딩된 메시지를 디코딩하려면 모든 숫자를 그룹화한 다음 위의 매핑의 역을 사용하여 문자로 다시 매핑해야 합니다.
 * 숫자만 포함하는 문자열 s가 주어지면 디코딩하는 방법의 수를 반환합니다.
 *
 * 예시:
 * 입력: s = "12"
 * 출력: 2
 * 설명: "12"는 "AB"(1 2) 또는 "L"(12)로 디코딩될 수 있습니다.
 */

function numDecodings(s: string): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(numDecodings("12")); // Expected: 2
console.log(numDecodings("226")); // Expected: 3
console.log(numDecodings("06")); // Expected: 0