/*
 * 프로그래머스 - 행렬 테두리 회전하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/77485
 * Level 2
 */

/*
  문제 설명:
  rows x columns 크기의 행렬이 주어집니다. 이 행렬은 1부터 rows x columns까지의 숫자가 한 줄씩 순서대로 채워져 있습니다.

  이 행렬에서 여러 번 직사각형 모양의 영역을 선택하여, 해당 영역의 테두리 부분에 있는 숫자들을 시계방향으로 한 칸씩 회전시킵니다.

  각 회전은 (x1, y1, x2, y2) 네 개의 정수로 표현됩니다. 
  이는 x1행 y1열부터 x2행 y2열까지의 영역에 해당하는 직사각형의 테두리를 회전시킨다는 의미입니다.

  각 회전을 수행한 후, 회전으로 인해 위치가 바뀐 숫자들 중에서 가장 작은 숫자를 찾아 배열에 담아 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - rows는 2 이상 100 이하인 자연수입니다.
  - columns는 2 이상 100 이하인 자연수입니다.
  - queries는 1 이상 10,000 이하인 배열입니다.
  - queries의 각 원소는 [x1, y1, x2, y2] 형태의 4개의 정수입니다.
*/

function solution(rows: number, columns: number, queries: number[][]): number[] {
  let answer: number[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]])} `); // [8, 10, 25]
console.log(`예제 2: ${solution(3, 3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]])} `); // [1, 1, 5, 3]
console.log(`예제 3: ${solution(100, 97, [[1,1,100,97]])} `); // [1]
