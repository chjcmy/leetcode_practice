/**
 * 561. Array Partition (Easy)
 * 
 * Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
 * 
 * Example:
 * Input: nums = [1,4,3,2]
 * Output: 4
 * Explanation: All possible pairings (ignoring the order of elements) are:
 * 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
 * 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
 * 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
 * So the maximum possible sum is 4.
 */

/**
 * 561. 배열 파티션 (Easy)
 *
 * 2n개의 정수로 구성된 정수 배열 nums가 주어지면, 이 정수들을 n개의 쌍 (a1, b1), (a2, b2), ..., (an, bn)으로 그룹화하여 모든 i에 대한 min(ai, bi)의 합이 최대가 되도록 합니다. 최대화된 합을 반환합니다.
 *
 * 예시:
 * 입력: nums = [1,4,3,2]
 * 출력: 4
 * 설명: 가능한 모든 쌍(요소 순서 무시)은 다음과 같습니다:
 * 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
 * 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
 * 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
 * 따라서 가능한 최대 합은 4입니다.
 */

function arrayPairSum(nums: number[]): number {

    let result = 0;

    nums.sort((a, b) => a - b);


    // 여기에 구현하세요

    for(let i = 0; i < nums.length - 1; i += 2) {
        result += nums[i];
    }

    return result;
}

// Test cases
console.log(arrayPairSum([1,4,3,2])); // Expected: 4
console.log(arrayPairSum([6,2,6,5,1,2])); // Expected: 9