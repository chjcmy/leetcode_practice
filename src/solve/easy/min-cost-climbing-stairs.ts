/**
 * 746. Min Cost Climbing Stairs (Easy)
 * 
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0, or the step with index 1.
 * Return the minimum cost to reach the top of the floor.
 * 
 * Example:
 * Input: cost = [10,15,20]
 * Output: 15
 * Explanation: You will start at index 1.
 * - Pay 15 and climb two steps to reach the top.
 * The total cost is 15.
 */

/**
 * 746. 계단 오르기 최소 비용 (Easy)
 *
 * 계단의 i번째 계단 비용인 정수 배열 cost가 주어집니다. 비용을 지불하면 한 계단 또는 두 계단을 오를 수 있습니다.
 * 인덱스 0의 계단 또는 인덱스 1의 계단에서 시작할 수 있습니다.
 * 바닥 꼭대기에 도달하는 데 드는 최소 비용을 반환합니다.
 *
 * 예시:
 * 입력: cost = [10,15,20]
 * 출력: 15
 * 설명: 인덱스 1에서 시작합니다.
 * - 15를 지불하고 두 계단을 올라 꼭대기에 도달합니다.
 * 총 비용은 15입니다.
 */

function minCostClimbingStairs(cost: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(minCostClimbingStairs([10,15,20])); // Expected: 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); // Expected: 6