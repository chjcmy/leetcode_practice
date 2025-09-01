/**
 * 18. 4Sum (Medium)
 * 
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 * 0 <= a, b, c, d < n, a, b, c, and d are distinct, nums[a] + nums[b] + nums[c] + nums[d] == target
 * 
 * Example:
 * Input: nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 */

/**
 * 18. 4Sum (Medium)
 *
 * n개의 정수 배열 nums가 주어지면, 다음 조건을 만족하는 모든 고유한 사중주 [nums[a], nums[b], nums[c], nums[d]]의 배열을 반환합니다:
 * 0 <= a, b, c, d < n, a, b, c, d는 서로 다르고, nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * 예시:
 * 입력: nums = [1,0,-1,0,-2,2], target = 0
 * 출력: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 */

function fourSum(nums: number[], target: number): number[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(fourSum([1,0,-1,0,-2,2], 0)); // Expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)); // Expected: [[2,2,2,2]]