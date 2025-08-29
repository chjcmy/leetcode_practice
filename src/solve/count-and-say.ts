/**
 * 38. Count and Say (Medium)
 * 
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(1) = "1"
 * countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
 * 
 * Example:
 * Input: n = 1
 * Output: "1"
 * Explanation: This is the base case.
 * 
 * Input: n = 4
 * Output: "1211"
 * Explanation:
 * countAndSay(1) = "1"
 * countAndSay(2) = say "1" = one 1 = "11"
 * countAndSay(3) = say "11" = two 1's = "21"
 * countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 */

/**
 * 38. 카운트 앤 세이 (Medium)
 *
 * 카운트 앤 세이 시퀀스는 재귀 공식으로 정의된 숫자 문자열 시퀀스입니다:
 * countAndSay(1) = "1"
 * countAndSay(n)은 countAndSay(n-1)의 숫자 문자열을 "말하는" 방식이며, 그런 다음 다른 숫자 문자열로 변환됩니다.
 *
 * 예시:
 * 입력: n = 1
 * 출력: "1"
 * 설명: 이것이 기본 케이스입니다.
 *
 * 입력: n = 4
 * 출력: "1211"
 * 설명:
 * countAndSay(1) = "1"
 * countAndSay(2) = "1"을 말함 = 1이 하나 = "11"
 * countAndSay(3) = "11"을 말함 = 1이 두 개 = "21"
 * countAndSay(4) = "21"을 말함 = 2가 하나 + 1이 하나 = "12" + "11" = "1211"
 */

function countAndSay(n: number): string {
    // 여기에 구현하세요
    return "";
}

// Test cases
console.log(countAndSay(1)); // Expected: "1"
console.log(countAndSay(4)); // Expected: "1211"