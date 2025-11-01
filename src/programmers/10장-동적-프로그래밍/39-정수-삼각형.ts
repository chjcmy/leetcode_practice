/*
 * 프로그래머스 - 정수 삼각형
 * https://school.programmers.co.kr/learn/courses/30/lessons/43105
 * Level 3
 */

function solution(triangle: number[][]): number {
  const n = triangle.length;

  const dp: number[][] = triangle.map(row => [...row]);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                dp[i][j] = dp[i-1][j] + triangle[i][j];
            } else if (j === triangle[i].length - 1) {
                dp[i][j] = dp[i-1][j-1] + triangle[i][j];
            } else {
                dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j];
            }
        }
    }

    return Math.max(...dp[n-1]);
  
}

// 예제 테스트
console.log(`예제 1: ${solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])} `); // 30

export {};