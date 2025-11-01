/**
 * 198. House Robber (Medium)
 * 
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 * 
 * Example 2:
 * Input: nums = [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 */

/**
 * 198. 집 털이 (Medium)
 *
 * 당신은 전문 도둑으로, 길가의 집들을 털 계획을 하고 있습니다. 각 집에는 일정 금액의 돈이 숨겨져 있으며, 유일한 제약 조건은 인접한 집들에 보안 시스템이 연결되어 있어 같은 날 밤에 두 인접한 집이 털리면 자동으로 경찰에 연락이 간다는 것입니다.
 * 각 집의 돈의 양을 나타내는 정수 배열 nums가 주어졌을 때, 경찰에 신고되지 않고 오늘 밤 털 수 있는 최대 금액을 반환하세요.
 *
 * 예시 1:
 * 입력: nums = [1,2,3,1]
 * 출력: 4
 * 설명: 1번 집(돈 = 1)을 털고 3번 집(돈 = 3)을 텁니다.
 * 털 수 있는 총 금액 = 1 + 3 = 4.
 *
 * 예시 2:
 * 입력: nums = [2,7,9,3,1]
 * 출력: 12
 * 설명: 1번 집(돈 = 2), 3번 집(돈 = 9), 5번 집(돈 = 1)을 텁니다.
 * 털 수 있는 총 금액 = 2 + 9 + 1 = 12.
 */
function rob(nums: number[]): number {
    if (nums.length === 0) return 0;

    let prev2 = 0;
    let prev1 = 0;

    for (const num of nums) {
        const current_max = Math.max(prev1, prev2 + num);

        prev2 = prev1;
        prev1 = current_max;
    }
    return prev1;
}

// 테스트 케이스
const testCases = [
    [1, 2, 3, 1],
    [2, 7, 9, 3, 1],
    [5, 1, 3, 9]
];

testCases.forEach(test => {
    const result = rob(test);
    console.log(result);
});

