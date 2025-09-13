/*
 * 프로그래머스 - 괄호 회전하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 * Level 2
 */

/*
  문제 설명:
  다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
  - '(', ')', '[', ']', '{', '}' 로 이루어진 문자열입니다.
  - 괄호가 바르게 짝지어졌다는 것은 다음과 같은 조건을 의미합니다.
    - '(' 로 열렸으면 반드시 '(' 로 닫혀야 합니다.
    - '[' 로 열렸으면 반드시 '[' 로 닫혀야 합니다.
    - '{' 로 열렸으면 반드시 '{' 로 닫혀야 합니다.

  문자열 s가 주어졌을 때, s를 왼쪽으로 x (0 <= x < s.length) 칸만큼 회전시켰을 때 
  s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

  제한사항:
  - s의 길이는 1 이상 1,000 이하입니다.
*/

function solution(s: string): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution("[](){}")} `); // 3
console.log(`예제 2: ${solution("}]()[{")} `); // 2
console.log(`예제 3: ${solution("[)(]")} `); // 0
console.log(`예제 4: ${solution("}}}")} `); // 0
