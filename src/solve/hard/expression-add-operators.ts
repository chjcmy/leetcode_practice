/**
 * 282. Expression Add Operators (Hard)
 * 
 * Given a string num that contains only digits, and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value.
 * Note that operands in the returned expressions should not have leading zeros.
 * 
 * Example:
 * Input: num = "123", target = 6
 * Output: ["1*2*3","1+2+3"]
 * Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.
 * 
 * Example:
 * Input: num = "232", target = 8
 * Output: ["2*3+2","2+3*2"]
 * Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.
 * 
 * Example:
 * Input: num = "3456237490", target = 9191
 * Output: []
 * Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.
 */

/**
 * 282. 표현식에 연산자 추가 (Hard)
 *
 * 숫자만 포함하는 문자열 num과 정수 target이 주어지면, 결과 표현식이 target 값으로 평가되도록 num의 숫자 사이에 이진 연산자 '+', '-' 및/또는 '*'를 삽입하는 모든 가능성을 반환합니다.
 * 반환된 표현식의 피연산자에는 선행 0이 없어야 합니다.
 *
 * 예시:
 * 입력: num = "123", target = 6
 * 출력: ["1*2*3","1+2+3"]
 * 설명: "1*2*3"과 "1+2+3"은 모두 6으로 평가됩니다.
 *
 * 예시:
 * 입력: num = "232", target = 8
 * 출력: ["2*3+2","2+3*2"]
 * 설명: "2*3+2"와 "2+3*2"는 모두 8로 평가됩니다.
 *
 * 예시:
 * 입력: num = "3456237490", target = 9191
 * 출력: []
 * 설명: "3456237490"에서 9191로 평가할 수 있는 표현식은 없습니다.
 */

function addOperators(num: string, target: number): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(addOperators("123", 6)); // Expected: ["1*2*3","1+2+3"]
console.log(addOperators("232", 8)); // Expected: ["2*3+2","2+3*2"]
console.log(addOperators("3456237490", 9191)); // Expected: []