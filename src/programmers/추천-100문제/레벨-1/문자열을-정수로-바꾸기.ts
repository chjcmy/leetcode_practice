/*
 * 프로그래머스 - 문자열을 정수로 바꾸기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12925
 * Level 1
 */

/*
  문제 설명:
  문자열 s를 숫자로 변환한 결과를 return하는 함수, solution을 완성하세요.

  제한 조건:
  - s의 길이는 1 이상 5 이하입니다.
  - s의 맨 앞에는 부호(+, -)가 올 수 있습니다.
  - s는 부호와 숫자로만 이루어져 있습니다.
  - s는 "0"으로 시작하지 않습니다.
*/

function solution(s: string): number {
  let answer = 0;
  // 문제 풀이

  return Number(s);
}

// 예제 테스트
console.log(`예제 1: ${solution("1234")} `); // 1234
console.log(`예제 2: ${solution("-1234")} `); // -1234
