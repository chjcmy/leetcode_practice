/*
 * 프로그래머스 - 짝수와 홀수
 * https://school.programmers.co.kr/learn/courses/30/lessons/12937
 * Level 1
 */

/*
  문제 설명:
  정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

  제한 조건:
  - num은 int 범위의 정수입니다.
  - 0은 짝수입니다.
*/

function solution(num: number): string {
    return num % 2 === 0 ? "Even" : "Odd";
}

// 예제 테스트
console.log(`예제 1: ${solution(3)} `); // "Odd"
console.log(`예제 2: ${solution(4)} `); // "Even"
