/*
 * 프로그래머스 - 올바른 괄호
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * Level 2
 */

/*
  문제 설명:
  괄호가 바르게 짝지어졌다는 것은 다음과 같은 조건을 의미합니다.
  - '(' 로 열렸으면 반드시 '(' 로 닫혀야 합니다.
  - '(' 로 열렸으면 반드시 '(' 로 닫혀야 합니다.

  문자열 s가 주어졌을 때, 괄호가 바르게 짝지어졌는지 여부를 return 하는 solution 함수를 완성해 주세요.

  제한사항:
  - 문자열 s의 길이 : 100,000 이하의 자연수
  - 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
*/

function solution(s: string): boolean {
  let answer = true;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution("()()")}`); // true
console.log(`예제 2: ${solution("(())()")}`); // true
console.log(`예제 3: ${solution(")()(")}`); // false
console.log(`예제 4: ${solution("(()(")}`); // false
