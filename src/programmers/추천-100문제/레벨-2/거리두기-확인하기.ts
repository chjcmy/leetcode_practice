/*
 * 프로그래머스 - 거리두기 확인하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/81302
 * Level 2
 */

/*
  문제 설명:
  이 문제는 5개의 5x5 대기실에서 사회적 거리두기 준수 여부를 확인하는 것입니다. 'P'는 응시자, 'O'는 빈 테이블, 'X'는 파티션을 나타냅니다. 두 응시자 간 맨해튼 거리가 2 이하일 때, 그 사이에 파티션이 없으면 거리두기를 위반한 것입니다. 각 대기실별로 준수 여부에 따라 1 또는 0을 담은 배열을 반환해야 합니다.
*/

/*
  English Description:
  The problem requires checking social distancing compliance in five 5x5 waiting rooms. 'P' represents a person, 'O' an empty table, and 'X' a partition. Social distancing is violated if two people are within a Manhattan distance of 2, unless a partition separates them. The task is to return an array indicating 1 for compliance and 0 for violation for each room.
*/

function solution(places: string[][]): number[] {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function isValidDistancing(room: string[]): boolean {
    const people: [number, number][] = [];

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (room[i][j] === "P") {
          people.push([i, j]);
        }
      }
    }

    for (const [startR, startC] of people) {
      const queue: [number, number, number][] = [[startR, startC, 0]];
      const visited: boolean[][] = Array(5)
        .fill(0)
        .map(() => Array(5).fill(false));
      visited[startR][startC] = true;

      while (queue.length > 0) {
        const [r, c, dist] = queue.shift()!;

        if (dist >= 2) continue;

        for (const [dr, dc] of directions) {
          const newR = r + dr;
          const newC = c + dc;

          if (
            newR >= 0 &&
            newR < 5 &&
            newC >= 0 &&
            newC < 5 &&
            !visited[newR][newC]
          ) {
            visited[newR][newC] = true;

            if (room[newR][newC] === "P") {
              return false;
            } else if (room[newR][newC] === "O") {
              queue.push([newR, newC, dist + 1]);
            }
          }
        }
      }
    }

    return true;
  }

  return places.map((room) => (isValidDistancing(room) ? 1 : 0));
}

// 예제 테스트
const places1 = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];
console.log(`예제 1: ${solution(places1)}`); // [1, 0, 1, 1, 1]
