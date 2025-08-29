/**
 * 778. Swim in Rising Water (Hard)
 * 
 * You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).
 * The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distance in zero time. Of course, you must stay within the boundaries of the grid during your swim.
 * Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).
 * 
 * Example:
 * Input: grid = [[0,2],[1,3]]
 * Output: 3
 * Explanation:
 * At time 0, you are in grid[0][0].
 * You cannot go anywhere else because 4-directionally adjacent neighbors have a higher elevation than t = 0.
 * At time 1, the water level is 1, you can move from grid[0][0] to grid[1][0].
 * At time 2, the water level is 2, you can move to grid[1][1].
 * At time 3, the water level is 3, you can move to grid[0][1].
 * 
 * Example:
 * Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
 * Output: 16
 * Explanation: The final route is shown.
 * We need to wait until time 16 so that (0, 0) and (4, 4) are connected.
 */

/**
 * 778. 불어나는 물에서 수영하기 (Hard)
 *
 * 각 값 grid[i][j]가 해당 지점 (i, j)의 고도를 나타내는 n x n 정수 행렬 grid가 주어집니다.
 * 비가 내리기 시작합니다. 시간 t에 모든 곳의 수심은 t입니다. 두 사각형의 고도가 개별적으로 t 이하인 경우에만 한 사각형에서 4방향으로 인접한 다른 사각형으로 수영할 수 있습니다. 무한한 거리를 0의 시간으로 수영할 수 있습니다. 물론 수영하는 동안 그리드의 경계 내에 있어야 합니다.
 * 왼쪽 위 사각형(0, 0)에서 시작하여 오른쪽 아래 사각형(n - 1, n - 1)에 도달할 수 있을 때까지의 최소 시간을 반환하세요.
 *
 * 예시:
 * 입력: grid = [[0,2],[1,3]]
 * 출력: 3
 * 설명:
 * 시간 0에 당신은 grid[0][0]에 있습니다.
 * 4방향으로 인접한 이웃의 고도가 t = 0보다 높기 때문에 다른 곳으로 갈 수 없습니다.
 * 시간 1에 수위는 1이며, grid[0][0]에서 grid[1][0]으로 이동할 수 있습니다.
 * 시간 2에 수위는 2이며, grid[1][1]로 이동할 수 있습니다.
 * 시간 3에 수위는 3이며, grid[0][1]로 이동할 수 있습니다.
 *
 * 예시:
 * 입력: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
 * 출력: 16
 * 설명: 최종 경로가 표시됩니다.
 * (0, 0)과 (4, 4)가 연결되도록 시간 16까지 기다려야 합니다.
 */

function swimInWater(grid: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(swimInWater([[0,2],[1,3]])); // Expected: 3
console.log(swimInWater([[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]])); // Expected: 16