/**
 * 268. Missing Number (Easy)
 * 
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * 
 * Example:
 * Input: nums = [3,0,1]
 * Output: 2
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
 */

/**
 * 268. 누락된 숫자 (Easy)
 *
 * [0, n] 범위의 n개의 고유한 숫자를 포함하는 배열 nums가 주어지면, 배열에서 누락된 범위의 유일한 숫자를 반환합니다.
 *
 * 예시:
 * 입력: nums = [3,0,1]
 * 출력: 2
 * 설명: 숫자가 3개이므로 n = 3이므로 모든 숫자는 [0,3] 범위에 있습니다. 2는 nums에 나타나지 않으므로 범위에서 누락된 숫자입니다.
 */

function missingNumber(nums: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(missingNumber([3,0,1])); // Expected: 2
console.log(missingNumber([0,1])); // Expected: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Expected: 8