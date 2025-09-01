/**
 * 741. Cherry Pickup (Hard)
 * 
 * You are given an n x n grid representing a field of cherries, each cell is one of three possible integers.
 * - 0 means the cell is empty, so you can pass through,
 * - 1 means the cell contains a cherry that you can pick up and pass through, or
 * - -1 means the cell contains a thorn that blocks your way.
 * 
 * Return the maximum number of cherries you can collect by following the rules below:
 * - Starting at the position (0, 0) and reaching the bottom-right corner (n - 1, n - 1) by moving right or down through valid path cells (cells with value 0 or 1).
 * - After reaching the bottom-right corner, returning to the top-left corner (0, 0) by moving left or up through valid path cells.
 * - When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell 0.
 * - If there is no valid path between (0, 0) and (n - 1, n - 1), then no cherries can be collected.
 * 
 * Example:
 * Input: grid = [[0,1,-1],[1,0,-1],[1,1,1]]
 * Output: 5
 * Explanation: The player started at (0, 0) and went down, down, right right to reach (2, 2).
 * 4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
 * Then, the player went left, up, up, left to return home, passing through the position (1, 1) which had a cherry.
 * So, the total number of cherries picked up is 5 - this is the maximum possible.
 */

/**
 * 741. 체리 줍기 (Hard)
 *
 * 각 셀이 세 가지 가능한 정수 중 하나인 체리 밭을 나타내는 n x n 그리드가 주어집니다.
 * - 0은 셀이 비어 있음을 의미하므로 통과할 수 있습니다.
 * - 1은 체리가 들어있는 셀을 의미하며, 주워서 통과할 수 있습니다.
 * - -1은 길을 막는 가시가 있는 셀을 의미합니다.
 *
 * 아래 규칙에 따라 수집할 수 있는 최대 체리 수를 반환하세요:
 * - (0, 0) 위치에서 시작하여 유효한 경로 셀(값이 0 또는 1인 셀)을 통해 오른쪽 또는 아래로 이동하여 오른쪽 아래 모서리(n - 1, n - 1)에 도달합니다.
 * - 오른쪽 아래 모서리에 도달한 후 유효한 경로 셀을 통해 왼쪽 또는 위로 이동하여 왼쪽 위 모서리(0, 0)로 돌아갑니다.
 * - 체리가 들어있는 경로 셀을 통과할 때 체리를 줍고 셀은 빈 셀 0이 됩니다.
 * - (0, 0)과 (n - 1, n - 1) 사이에 유효한 경로가 없으면 체리를 수집할 수 없습니다.
 *
 * 예시:
 * 입력: grid = [[0,1,-1],[1,0,-1],[1,1,1]]
 * 출력: 5
 * 설명: 플레이어는 (0, 0)에서 시작하여 아래, 아래, 오른쪽, 오른쪽으로 이동하여 (2, 2)에 도달했습니다.
 * 이 한 번의 이동으로 4개의 체리를 주웠고 행렬은 [[0,1,-1],[0,0,-1],[0,0,0]]이 됩니다.
 * 그런 다음 플레이어는 왼쪽, 위, 위, 왼쪽으로 이동하여 집으로 돌아왔고, 체리가 있던 (1, 1) 위치를 통과했습니다.
 * 따라서 주운 총 체리 수는 5개이며 이것이 가능한 최대값입니다.
 */

function cherryPickup(grid: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(cherryPickup([[0,1,-1],[1,0,-1],[1,1,1]])); // Expected: 5
console.log(cherryPickup([[1,1,-1],[1,-1,1],[-1,1,1]])); // Expected: 0