/**
 * 994. Rotting Oranges (Medium)
 * 
 * You are given an m x n grid where each cell can have one of three values:
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 * 
 * Example:
 * Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 */

/**
 * 994. 썩어가는 오렌지 (Medium)
 *
 * 각 셀이 세 가지 값 중 하나를 가질 수 있는 m x n 그리드가 주어집니다:
 * 0은 빈 셀을 나타냅니다.
 * 1은 신선한 오렌지를 나타냅니다.
 * 2는 썩은 오렌지를 나타냅니다.
 * 매분, 썩은 오렌지와 4방향으로 인접한 신선한 오렌지는 썩게 됩니다.
 * 신선한 오렌지가 없는 셀이 없을 때까지 경과해야 하는 최소 시간을 반환합니다. 이것이 불가능하면 -1을 반환합니다.
 *
 * 예시:
 * 입력: grid = [[2,1,1],[1,1,0],[0,1,1]]
 * 출력: 4
 */

function orangesRotting(grid: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); // Expected: 4
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])); // Expected: -1