/**
 * 980. Unique Paths III (Hard)
 * 
 * You are given an m x n integer array grid where grid[i][j] could be:
 * - 1 representing the starting square. There is exactly one starting square.
 * - 2 representing the ending square. There is exactly one ending square.
 * - 0 representing empty squares we can walk over.
 * - -1 representing obstacles that we cannot walk over.
 * 
 * Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.
 * 
 * Example:
 * Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
 * Output: 2
 * Explanation: We have the following two paths: 
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
 * 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
 * 
 * Example:
 * Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
 * Output: 4
 * Explanation: We have the following four paths: 
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
 * 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
 * 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
 * 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
 */

/**
 * 980. 독특한 경로 III (Hard)
 *
 * grid[i][j]가 다음과 같을 수 있는 m x n 정수 배열 grid가 주어집니다:
 * - 1은 시작 사각형을 나타냅니다. 시작 사각형은 정확히 하나입니다.
 * - 2는 끝 사각형을 나타냅니다. 끝 사각형은 정확히 하나입니다.
 * - 0은 우리가 걸을 수 있는 빈 사각형을 나타냅니다.
 * - -1은 우리가 걸을 수 없는 장애물을 나타냅니다.
 *
 * 시작 사각형에서 끝 사각형까지 모든 비장애물 사각형을 정확히 한 번씩 걷는 4방향 보행의 수를 반환하세요.
 *
 * 예시:
 * 입력: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
 * 출력: 2
 * 설명: 다음과 같은 두 가지 경로가 있습니다:
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
 * 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
 *
 * 예시:
 * 입력: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
 * 출력: 4
 * 설명: 다음과 같은 네 가지 경로가 있습니다:
 * 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
 * 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
 * 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
 * 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
 */

function uniquePathsIII(grid: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]])); // Expected: 2
console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]])); // Expected: 4
console.log(uniquePathsIII([[0,1],[2,0]])); // Expected: 0