/**
 * 494. Target Sum (Medium)
 * 
 * You are given an integer array nums and an integer target.
 * You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.
 * Return the number of different expressions that you can build, which evaluates to target.
 * 
 * Example:
 * Input: nums = [1,1,1,1,1], target = 3
 * Output: 5
 * Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
 * -1 + 1 + 1 + 1 + 1 = 3
 * +1 - 1 + 1 + 1 + 1 = 3
 * +1 + 1 - 1 + 1 + 1 = 3
 * +1 + 1 + 1 - 1 + 1 = 3
 * +1 + 1 + 1 + 1 - 1 = 3
 */

function findTargetSumWays(nums: number[], target: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(findTargetSumWays([1,1,1,1,1], 3)); // Expected: 5
console.log(findTargetSumWays([1], 1)); // Expected: 1