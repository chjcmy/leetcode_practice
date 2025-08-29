/**
 * 632. Smallest Range Covering Elements from K Lists (Hard)
 * 
 * You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.
 * We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.
 * 
 * Example:
 * Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
 * Output: [20,24]
 * Explanation: 
 * List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
 * List 2: [0, 9, 12, 20], 20 is in range [20,24].
 * List 3: [5, 18, 22, 30], 22 is in range [20,24].
 * 
 * Example:
 * Input: nums = [[1,2,3],[1,2,3],[1,2,3]]
 * Output: [1,1]
 */

/**
 * 632. K개 리스트의 요소를 포함하는 가장 작은 범위 (Hard)
 *
 * 감소하지 않는 순서로 정렬된 k개의 정수 리스트가 있습니다. k개의 각 리스트에서 적어도 하나의 숫자를 포함하는 가장 작은 범위를 찾으세요.
 * 범위 [a, b]는 b - a < d - c이거나 b - a == d - c일 때 a < c이면 범위 [c, d]보다 작다고 정의합니다.
 *
 * 예시:
 * 입력: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
 * 출력: [20,24]
 * 설명:
 * 리스트 1: [4, 10, 15, 24,26], 24는 [20,24] 범위에 있습니다.
 * 리스트 2: [0, 9, 12, 20], 20은 [20,24] 범위에 있습니다.
 * 리스트 3: [5, 18, 22, 30], 22는 [20,24] 범위에 있습니다.
 *
 * 예시:
 * 입력: nums = [[1,2,3],[1,2,3],[1,2,3]]
 * 출력: [1,1]
 */

function smallestRange(nums: number[][]): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(smallestRange([[4,10,15,24,26],[0,9,12,20],[5,18,22,30]])); // Expected: [20,24]
console.log(smallestRange([[1,2,3],[1,2,3],[1,2,3]])); // Expected: [1,1]