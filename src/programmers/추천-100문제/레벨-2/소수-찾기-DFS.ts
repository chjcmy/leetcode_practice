/*
 * 프로그래머스 - 소수 찾기 (DFS)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42839
 * Level 2
 */

/*
  문제 설명:
  한자리 숫자가 적힌 종이 조각들을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

  각 종이 조각에 적힌 숫자가 문자열 numbers로 주어집니다.
  예를 들어, "17"이 주어지면 [1, 7] 두 개의 숫자 조각으로 만들 수 있는 소수의 개수를 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - numbers는 길이 1 이상 7 이하인 문자열입니다.
  - numbers는 0~9까지 숫자만으로 이루어져 있습니다.
  - "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져 있다는 의미입니다.
*/

function solution(numbers: string): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution("17")} `); // 3
console.log(`예제 2: ${solution("011")} `); // 2
