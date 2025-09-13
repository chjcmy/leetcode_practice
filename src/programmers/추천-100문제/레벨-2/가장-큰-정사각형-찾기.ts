/*
 * 프로그래머스 - 가장 큰 정사각형 찾기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12905
 * Level 2
 */

/*
  문제 설명:
  1과 0으로 채워진 표(board)가 주어집니다. 표의 한 칸은 1x1 크기의 정사각형으로 이루어져 있습니다. 
  이 표에서 1로만 이루어진 가장 큰 정사각형을 찾아 그 넓이를 return 하는 solution 함수를 완성해주세요. 
  단, 정사각형은 축에 평행한 정사각형을 의미합니다.

  제한사항:
  - board는 2차원 배열로 주어집니다.
  - board의 행(row)과 열(column)의 크기는 각각 1,000 이하의 자연수입니다.
  - board의 값은 1 또는 0으로만 이루어져 있습니다.
*/

function solution(board: number[][]): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]])} `); // 9
console.log(`예제 2: ${solution([[0,0,1,1],[1,1,1,1]])} `); // 4
