/**
 * 639. Decode Ways II (Hard)
 * 
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 * To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:
 * "AAJF" with the grouping (1 1 10 6)
 * "KJF" with the grouping (11 10 6)
 * Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
 * In addition to the mapping above, an encoded message may contain the '*' character, which can represent any digit from '1' to '9' (0 is excluded). For example, the encoded message "1*" may represent any of the encoded messages "11", "12", "13", "14", "15", "16", "17", "18", or "19". Decoding "1*" is equivalent to decoding any of the aforementioned encoded messages.
 * Given a string s consisting of digits and '*' characters, return the number of ways to decode it.
 * Since the answer may be very large, return it modulo 10^9 + 7.
 * 
 * Example:
 * Input: s = "*"
 * Output: 9
 * Explanation: The encoded message can represent any of the encoded messages "1", "2", "3", "4", "5", "6", "7", "8", or "9".
 * Each of these can be decoded to the strings "A", "B", "C", "D", "E", "F", "G", "H", and "I" respectively.
 * Hence, there are a total of 9 ways to decode "*".
 */

/**
 * 639. 디코딩 방법 II (Hard)
 *
 * A-Z 문자를 포함하는 메시지는 다음 매핑을 사용하여 숫자로 인코딩할 수 있습니다:
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 * 인코딩된 메시지를 디코딩하려면 모든 숫자를 그룹화한 다음 위의 매핑의 역을 사용하여 문자로 다시 매핑해야 합니다(여러 가지 방법이 있을 수 있음). 예를 들어, "11106"은 다음과 같이 매핑될 수 있습니다:
 * "AAJF" (그룹화: 1 1 10 6)
 * "KJF" (그룹화: 11 10 6)
 * 그룹화 (1 11 06)는 "06"이 "6"과 다르기 때문에 'F'로 매핑될 수 없으므로 유효하지 않습니다.
 * 위의 매핑 외에도 인코딩된 메시지에는 '1'에서 '9'까지의 모든 숫자를 나타낼 수 있는 '*' 문자가 포함될 수 있습니다(0은 제외). 예를 들어, 인코딩된 메시지 "1*"는 "11", "12", "13", "14", "15", "16", "17", "18" 또는 "19"와 같은 인코딩된 메시지를 나타낼 수 있습니다. "1*"를 디코딩하는 것은 앞서 언급한 인코딩된 메시지 중 하나를 디코딩하는 것과 같습니다.
 * 숫자와 '*' 문자로 구성된 문자열 s가 주어지면 디코딩하는 방법의 수를 반환합니다.
 * 답이 매우 클 수 있으므로 10^9 + 7로 나눈 나머지를 반환합니다.
 *
 * 예시:
 * 입력: s = "*"
 * 출력: 9
 * 설명: 인코딩된 메시지는 "1", "2", "3", "4", "5", "6", "7", "8" 또는 "9"와 같은 인코딩된 메시지를 나타낼 수 있습니다.
 * 이들 각각은 "A", "B", "C", "D", "E", "F", "G", "H", "I" 문자열로 각각 디코딩될 수 있습니다.
 * 따라서 "*"를 디코딩하는 방법은 총 9가지입니다.
 */

function numDecodings(s: string): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(numDecodings("*")); // Expected: 9
console.log(numDecodings("1*")); // Expected: 18
console.log(numDecodings("2*")); // Expected: 15