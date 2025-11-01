/**
 * 301. Remove Invalid Parentheses (Hard)
 * 
 * Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.
 * Return a list of unique strings that are valid with the minimum number of removals. You may return the answer in any order.
 * 
 * Example:
 * Input: s = "()())"
 * Output: ["()()","(())"]
 * 
 * Example:
 * Input: s = "((("
 * Output: [""].
 * 
 * Example:
 * Input: s = "())"
 * Output: ["()"]
 */

/**
 * 301. 잘못된 괄호 제거 (Hard)
 *
 * 괄호와 문자를 포함하는 문자열 s가 주어지면, 입력 문자열을 유효하게 만들기 위해 최소한의 잘못된 괄호를 제거하세요.
 * 최소한의 제거로 유효한 고유 문자열 목록을 반환합니다. 답은 어떤 순서로든 반환할 수 있습니다.
 *
 * 예시:
 * 입력: s = "()())"
 * 출력: ["()()","(())"]
 *
 * 예시:
 * 입력: s = "((("
 * 출력: [""]
 *
 * 예시:
 * 입력: s = "())"
 * 출력: ["()"]
 */

function removeInvalidParentheses(s: string): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(removeInvalidParentheses("()())"));
console.log(removeInvalidParentheses("((("));
console.log(removeInvalidParentheses("())"));
