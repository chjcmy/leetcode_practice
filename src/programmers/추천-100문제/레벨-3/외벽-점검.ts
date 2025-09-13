/*
 * 프로그래머스 - 외벽 점검
 * https://school.programmers.co.kr/learn/courses/30/lessons/60062
 * Level 3
 */

/*
  문제 설명:
  레스토랑의 외벽은 완전히 동그란 모양이며, 정북 방향을 0으로 하여 시계 방향으로 정수 단위의 지점들로 나뉩니다.
  외벽의 총 길이는 n이며, 취약 지점의 위치는 weak 배열에, 친구들이 1시간 동안 이동할 수 있는 거리는 dist 배열에 주어집니다.

  최소한의 친구들을 투입하여 모든 취약한 외벽을 점검해야 합니다.
  모든 취약 지점을 점검할 수 있는 경우 중 가장 적은 수의 친구를 사용한 경우를 찾아 return 하도록 solution 함수를 작성해주세요.
  만약 어떤 경우에도 모든 취약 지점을 점검할 수 없다면 -1을 return 합니다.

  제한사항:
  - n은 1 이상 200 이하인 자연수입니다.
  - weak 배열의 길이는 1 이상 15 이하입니다.
  - dist 배열의 길이는 1 이상 8 이하입니다.
  - weak와 dist의 원소는 0 이상 n 미만인 정수입니다.
*/

function solution(n: number, weak: number[], dist: number[]): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(12, [1, 5, 6, 10], [1, 2, 3, 4])} `); // 2
console.log(`예제 2: ${solution(12, [1, 3, 4, 9, 10], [3, 5, 7])} `); // 1
