/*
 * 프로그래머스 - 길 찾기 게임
 * https://school.programmers.co.kr/learn/courses/30/lessons/42892
 * Level 3
 */

/*
  문제 설명:
  프렌즈 사천성 게임을 개발하는 데 필요한 지형 정보를 나타내는 2차원 배열 game_board가 주어집니다.
  game_board는 1x1 크기의 정사각형 칸들로 이루어져 있습니다.
  game_board의 각 칸은 다음과 같은 값을 가집니다.
  - 0: 빈 칸
  - 1: 벽
  - 2: 시작점
  - 3: 도착점

  시작점에서 도착점까지 이동하는 최단 거리를 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - game_board의 가로, 세로 길이는 1 이상 100 이하입니다.
  - 시작점과 도착점은 반드시 존재합니다.
  - 시작점과 도착점은 겹치지 않습니다.
*/

function solution(nodeinfo: number[][]): number[][] {
  let answer: number[][] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([[5,3],[11,5],[13,3],[3,5],[6,1],[1,3],[8,6],[7,2],[2,2]])} `); // [[7,4,6,9,1,8,5,2,3],[9,6,5,8,1,4,3,2,7]]
