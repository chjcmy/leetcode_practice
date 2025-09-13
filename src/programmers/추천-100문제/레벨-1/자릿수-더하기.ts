/*
 * 프로그래머스 - 자릿수 더하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12931
 * Level 1
 */

/*
  문제 설명:
  자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return하는 함수를 만들어 주세요.
  예를 들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

  제한 사항:
  - N은 100,000,000 이하의 자연수입니다.
*/

function solution(n: number): number {
  let answer = 0;

  while (n > 0) {
    answer += n % 10; // Add the last digit to the sum
    n = Math.floor(n / 10); // Remove the last digit
  }

  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(123)} `); // 6
console.log(`예제 2: ${solution(987)} `); // 24
