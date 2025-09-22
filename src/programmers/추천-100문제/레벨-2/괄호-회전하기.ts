/*
 * 프로그래머스 - 괄호 회전하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 * Level 2
 */

import { isValid } from "../../../solve/easy/valid-parentheses";

/*
 * Problem Title: Rotating Parentheses (괄호 회전하기)
 *
 * Problem Description:
 * A string of brackets is defined as a "correct bracket string" if it adheres to the following rules:
 * 1. `()`, `[]`, and `{}` are all considered correct bracket strings.
 * 2. If `A` is a correct bracket string, then `(A)`, `[A]`, and `{A}` are also correct bracket strings. For instance, since `[]` is a correct bracket string, `([])` is also a correct bracket string.
 * 3. If `A` and `B` are correct bracket strings, then `AB` is also a correct bracket string. For example, as `{}` and `([])` are correct bracket strings, `{}([])` is also a correct bracket string.
 *
 * You are given a string `s` composed of square brackets `[]`, curly braces `{}`, and parentheses `()`.
 * You can rotate `s` to the left by `x` positions, where `0 <= x < length of s`.
 * Your goal is to determine the total number of rotations `x` that transform `s` into a correct bracket string.
 *
 * Constraints:
 * - The length of the string `s` will be between 1 and 1,000 (inclusive).
 *
 * Example:
 *
 * Consider the string `s = "[](){}"`.
 * - If `x = 0`, `s` remains `"[](){}"`, which is a correct bracket string.
 * - If `x = 1`, `s` becomes `"](){}[`, which is not a correct bracket string.
 * - If `x = 2`, `s` becomes `"(){}[]"`, which is a correct bracket string.
 *
 * The function should return the count of `x` values that result in a correct bracket string.
 */

/*
  문제 설명:
  다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
  - '(', ')', '[', ']', '{', '}' 로 이루어진 문자열입니다.
  - 괄호가 바르게 짝지어졌다는 것은 다음과 같은 조건을 의미합니다.
    - '(' 로 열렸으면 반드시 ')' 로 닫혀야 합니다.
    - '[' 로 열렸으면 반드시 ']' 로 닫혀야 합니다.
    - '{' 로 열렸으면 반드시 '}' 로 닫혀야 합니다.

  문자열 s가 주어졌을 때, s를 왼쪽으로 x (0 <= x < s.length) 칸만큼 회전시켰을 때 
  s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

  제한사항:
  - s의 길이는 1 이상 1,000 이하입니다.
*/

function solution(s: string): number {
  let answer = 0;
  // 문제 풀이
 const n = s.length;
 let rotatedS = s;

 for(let i = 0; i < n ; i++) {
  if (isValid(rotatedS)){
    answer++;
  }

  rotatedS = rotatedS.substring(1) + rotatedS[0];
 }


  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution("[](){}")} `); // 3
console.log(`예제 2: ${solution("}]()[{")} `); // 2
console.log(`예제 3: ${solution("[)(]")} `); // 0
console.log(`예제 4: ${solution("}}}")} `); // 0
