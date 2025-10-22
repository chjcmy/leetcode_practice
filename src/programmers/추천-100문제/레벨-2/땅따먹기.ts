/*
 * 프로그래머스 - 땅따먹기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12913
 * Level 2
 */

/*
  문제 설명:
  땅따먹기 게임을 하려고 합니다. 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다. 
  1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.

  단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.

  마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최댓값을 return 하는 solution 함수를 완성해야 합니다.

  제한사항:
  - 행의 개수 N은 100,000 이하의 자연수입니다.
  - 열의 개수는 4개이고, 땅(land)은 2차원 배열로 주어집니다.
  - 점수는 100 이하의 자연수입니다.
*/

/*
  English Description:
  The problem describes a "land-eating" game played on an N-row, 4-column grid, where each cell has a score. Players must move down one row at a time, stepping on only one cell per row. A special rule prevents stepping on the same column in consecutive rows. The goal is to find the maximum total score obtainable by the time the last row is reached.
*/

function solution(land: number[][]): number {
    const n = land.length;

    let prev = [...land[0]];
    
    for (let i = 1; i < n; i++) {
        const curr = [0, 0, 0, 0];
        
        for (let j = 0; j < 4; j++) {
            let maxPrev = 0;
            for (let k = 0; k < 4; k++) {
                if (k !== j) {
                    maxPrev = Math.max(maxPrev, prev[k]);
                }
            }
            curr[j] = land[i][j] + maxPrev;
        }
        
        prev = curr;
    }
    
    return Math.max(...prev);
}


// 예제 테스트
console.log(`예제 1: ${solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]])} `); // 16
