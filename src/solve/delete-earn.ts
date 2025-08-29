/**
 * 740. Delete and Earn (Medium)
 * 
 * You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:
 * Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
 * Return the maximum number of points you can earn.
 * 
 * Example:
 * Input: nums = [3,4,2]
 * Output: 6
 * Explanation: You can perform the following operations:
 * - Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
 * - Delete 2 to earn 2 points. nums = [].
 * You earn a total of 6 points.
 */

/**
 * 740. 삭제하고 얻기 (Medium)
 *
 * 정수 배열 nums가 주어집니다. 다음 작업을 여러 번 수행하여 얻는 점수를 최대화하려고 합니다:
 * 임의의 nums[i]를 선택하고 삭제하여 nums[i] 포인트를 얻습니다. 그 후에는 nums[i] - 1과 같은 모든 요소와 nums[i] + 1과 같은 모든 요소를 삭제해야 합니다.
 * 얻을 수 있는 최대 점수 수를 반환합니다.
 *
 * 예시:
 * 입력: nums = [3,4,2]
 * 출력: 6
 * 설명: 다음 작업을 수행할 수 있습니다:
 * - 4를 삭제하여 4점을 얻습니다. 결과적으로 3도 삭제됩니다. nums = [2].
 * - 2를 삭제하여 2점을 얻습니다. nums = [].
 * 총 6점을 얻습니다.
 */

function deleteAndEarn(nums: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(deleteAndEarn([3,4,2])); // Expected: 6
console.log(deleteAndEarn([2,2,3,3,3,4])); // Expected: 9