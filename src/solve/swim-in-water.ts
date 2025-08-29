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
 */

function swimInWater(grid: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(swimInWater([[0,2],[1,3]])); // Expected: 3
console.log(swimInWater([[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]])); // Expected: 16