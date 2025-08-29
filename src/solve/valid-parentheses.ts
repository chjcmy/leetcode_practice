/**
 * 20. Valid Parentheses (Easy)
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 */

/**
 * 20. 유효한 괄호 (Easy)
 *
 * '(', ')', '{', '}', '[' 및 ']' 문자만 포함하는 문자열 s가 주어지면 입력 문자열이 유효한지 확인합니다.
 * 입력 문자열은 다음과 같은 경우에 유효합니다:
 * 1. 여는 괄호는 동일한 유형의 괄호로 닫아야 합니다.
 * 2. 여는 괄호는 올바른 순서로 닫아야 합니다.
 * 3. 모든 닫는 괄호에는 동일한 유형의 해당 여는 괄호가 있습니다.
 *
 * 예시 1:
 * 입력: s = "()"
 * 출력: true
 *
 * 예시 2:
 * 입력: s = "()[]{}"
 * 출력: true
 *
 * 예시 3:
 * 입력: s = "(]"
 * 출력: false
 */
function isValid(s: string): boolean {
    const string_array = new Array<string>();

    if (s.length === 1) return false;
    // 여기에 코드를 작성하세요
    for (const char of s) {
     if (char === '{' || char === '[' || char === '(') {
         string_array.push(char);
     } else if (char === '}') {
         if (string_array.length === 0) return false;  // 먼저 체크
         if (string_array[string_array.length - 1] === '{') {
             string_array.pop();
         } else {
             return false;
         }
     } else if (char === ')') {
         if (string_array.length === 0) return false;  // 먼저 체크
         if (string_array[string_array.length - 1] === '(') {
             string_array.pop();
         } else {
             return false;
         }
     } else {
         if (string_array.length === 0) return false;  // 먼저 체크
         if (string_array[string_array.length - 1] === '[') {
             string_array.pop();
         } else {
             return false;
         }
     }
    }

    return string_array.length === 0;  // 이것만!
}

// 테스트 케이스
const testCases = [
    "()",
    "()[]{}",
    "(]",
    "([)]",
    "{[]}"
];

testCases.forEach(test => {
    const result = isValid(test);
    console.log(result);
});

export { isValid };