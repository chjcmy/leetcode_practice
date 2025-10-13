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

/*
  English Description:
  The problem asks you to find the largest square composed entirely of '1's within a given 2D board filled with '0's and '1's. You need to return the area of this largest square. The board dimensions can be up to 1000x1000.
*/

function solution(board: number[][]): number {
    const rows = board.length;
    const cols = board[0].length;
    const dp: number[][] = Array(rows).fill(0).map(() => Array(cols).fill(0));
    let maxSize = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                }
                maxSize = Math.max(maxSize, dp[i][j]);
            }
        }
    }
    
    return maxSize * maxSize;
}

// 예제 테스트
console.log(`예제 1: ${solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]])} `); // 9
console.log(`예제 2: ${solution([[0,0,1,1],[1,1,1,1]])} `); // 4
