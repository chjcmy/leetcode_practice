/**
 * 329. Longest Increasing Path in a Matrix (Hard)
 * 
 * Given an m x n integers matrix, return the length of the longest increasing path.
 * From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
 * 
 * Example:
 * Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
 * Output: 4
 * Explanation: The longest increasing path is [1, 2, 6, 9].
 * 
 * Example:
 * Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
 * Output: 4
 * Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
 * 
 * Example:
 * Input: matrix = [[1]]
 * Output: 1
 */

/**
 * 329. 행렬에서 가장 긴 증가 경로 (Hard)
 *
 * m x n 정수 행렬이 주어지면 가장 긴 증가 경로의 길이를 반환합니다.
 * 각 셀에서 왼쪽, 오른쪽, 위 또는 아래 네 방향으로 이동할 수 있습니다. 대각선으로 이동하거나 경계를 벗어날 수 없습니다(즉, 줄 바꿈은 허용되지 않음).
 *
 * 예시:
 * 입력: matrix = [[9,9,4],[6,6,8],[2,1,1]]
 * 출력: 4
 * 설명: 가장 긴 증가 경로는 [1, 2, 6, 9]입니다.
 *
 * 예시:
 * 입력: matrix = [[3,4,5],[3,2,6],[2,2,1]]
 * 출력: 4
 * 설명: 가장 긴 증가 경로는 [3, 4, 5, 6]입니다. 대각선 이동은 허용되지 않습니다.
 *
 * 예시:
 * 입력: matrix = [[1]]
 * 출력: 1
 */

function longestIncreasingPath(matrix: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])); // Expected: 4
console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])); // Expected: 4
console.log(longestIncreasingPath([[1]])); // Expected: 1