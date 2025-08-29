/**
 * 675. Cut Off Trees for Golf Event (Hard)
 * 
 * You are asked to cut off all the trees in a forest for a golf event. The forest is represented as an m x n matrix. In this matrix:
 * - 0 means the cell cannot be walked through.
 * - 1 represents an empty cell that can be walked through.
 * - A number greater than 1 represents a tree in a cell that can be walked through, and this number is the tree's height.
 * 
 * In one step, you can walk in any of the four directions: north, east, south, and west. If you are standing in a cell with a tree, you can decide whether to cut it off.
 * You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value at its cell becomes 1 (an empty cell).
 * Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the trees. If you cannot cut off all the trees, return -1.
 * Note: The input is guaranteed that no two trees have the same height, and there is at least one tree needs to be cut off.
 * 
 * Example:
 * Input: forest = [[1,2,3],[0,0,4],[7,6,5]]
 * Output: 6
 * Explanation: Following the path above allows you to cut off the trees from shortest to tallest in 6 steps.
 * 
 * Example:
 * Input: forest = [[1,2,3],[0,0,0],[7,6,5]]
 * Output: -1
 * Explanation: The trees in the bottom row cannot be accessed as the middle row is blocked.
 */

/**
 * 675. 골프 대회를 위한 나무 자르기 (Hard)
 *
 * 골프 대회를 위해 숲의 모든 나무를 베어야 합니다. 숲은 m x n 행렬로 표현됩니다. 이 행렬에서:
 * - 0은 걸어갈 수 없는 셀을 의미합니다.
 * - 1은 걸어갈 수 있는 빈 셀을 나타냅니다.
 * - 1보다 큰 숫자는 걸어갈 수 있는 셀에 있는 나무를 나타내며, 이 숫자는 나무의 높이입니다.
 *
 * 한 번에 북, 동, 남, 서 네 방향 중 하나로 걸을 수 있습니다. 나무가 있는 셀에 서 있다면, 그 나무를 벨지 결정할 수 있습니다.
 * 나무는 가장 낮은 높이부터 가장 높은 높이 순서로 베어야 합니다. 나무를 베면 해당 셀의 값은 1(빈 셀)이 됩니다.
 * (0, 0) 지점에서 시작하여 모든 나무를 베기 위해 걸어야 하는 최소 걸음 수를 반환하세요. 모든 나무를 벨 수 없다면 -1을 반환합니다.
 * 참고: 입력에는 높이가 같은 두 나무가 없으며, 베어야 할 나무가 적어도 하나 이상 있다는 것이 보장됩니다.
 *
 * 예시:
 * 입력: forest = [[1,2,3],[0,0,4],[7,6,5]]
 * 출력: 6
 * 설명: 위 경로를 따라가면 가장 낮은 나무부터 가장 높은 나무까지 6걸음 만에 벨 수 있습니다.
 *
 * 예시:
 * 입력: forest = [[1,2,3],[0,0,0],[7,6,5]]
 * 출력: -1
 * 설명: 중간 행이 막혀 있어 맨 아래 행의 나무에 접근할 수 없습니다.
 */

function cutOffTree(forest: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(cutOffTree([[1,2,3],[0,0,4],[7,6,5]])); // Expected: 6
console.log(cutOffTree([[1,2,3],[0,0,0],[7,6,5]])); // Expected: -1