/**
 * 541. Reverse String II (Easy)
 * 
 * Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
 * If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.
 * 
 * Example:
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 */

/**
 * 541. 문자열 뒤집기 II (Easy)
 *
 * 문자열 s와 정수 k가 주어지면, 문자열 시작부터 2k 문자마다 첫 k 문자를 뒤집습니다.
 * 남은 문자가 k개 미만이면 모두 뒤집습니다. 2k개 미만이지만 k개 이상이면 첫 k 문자를 뒤집고 나머지는 그대로 둡니다.
 *
 * 예시:
 * 입력: s = "abcdefg", k = 2
 * 출력: "bacdfeg"
 */

function reverseStr(s: string, k: number): string {
    // 여기에 구현하세요
    return "";
}

// Test cases
console.log(reverseStr("abcdefg", 2)); // Expected: "bacdfeg"
console.log(reverseStr("abcd", 2)); // Expected: "bacd"