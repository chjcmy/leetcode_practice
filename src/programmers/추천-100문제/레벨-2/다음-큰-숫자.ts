/*
 * 프로그래머스 - 다음 큰 숫자
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * Level 2
 */

/*
  문제 설명:
  자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의합니다.
  - 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수입니다.
  - 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 개수가 같습니다.
  - 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수입니다.

  예를 들어서 78(2진수: 1001110)의 다음 큰 숫자는 83(2진수: 1010011)입니다.
  자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

  제한사항:
  - n은 1,000,000 이하의 자연수입니다.
*/

function solution(n: number): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(78)} `); // 83
console.log(`예제 2: ${solution(15)} `); // 23
