/*
 * 프로그래머스 - 행렬과 연산
 * https://school.programmers.co.kr/learn/courses/30/lessons/72416
 * Level 4
 */

/*
  문제 설명:
  주어진 직사각형 형태의 행렬에 두 가지 연산을 수행한 후 최종 행렬의 상태를 return 하는 문제입니다.

  연산:
  1. ShiftRow: 행렬의 모든 행이 한 칸씩 아래로 이동합니다. 가장 마지막 행은 첫 번째 행으로 이동합니다.
  2. Rotate: 행렬의 가장 바깥쪽 테두리에 있는 원소들이 시계 방향으로 한 칸씩 이동합니다.

  초기 행렬과 수행해야 할 연산들의 목록이 주어졌을 때, 모든 연산을 수행한 후의 행렬 상태를 return 해야 합니다.

  제한사항:
  - 행렬의 행(row)의 개수는 2 이상 50,000 이하입니다.
  - 행렬의 열(column)의 개수는 2 이상 50,000 이하입니다.
  - 행렬의 원소는 1 이상 100,000,000 이하인 자연수입니다.
  - 연산의 개수는 1 이상 100,000 이하입니다.
*/

function solution(rc: number[][], operations: string[]): number[][] {
  let answer: number[][] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]], ["Rotate", "ShiftRow"])} `); // [[8, 1, 2], [4, 5, 6], [7, 3, 9]]
console.log(`예제 2: ${solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]], ["ShiftRow", "Rotate"])} `); // [[4, 1, 2], [7, 5, 3], [8, 9, 6]]
