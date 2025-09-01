/**
 * 1. Two Sum (Easy)
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

/**
 * 1. 두 수의 합 (Easy)
 *
 * 정수 배열 `nums`와 정수 `target`이 주어지면, 두 숫자의 합이 `target`이 되는 두 숫자의 인덱스를 반환하세요.
 * 각 입력에는 정확히 하나의 해가 있다고 가정할 수 있으며, 동일한 요소를 두 번 사용할 수 없습니다.
 * 답은 어떤 순서로든 반환할 수 있습니다.
 *
 * 예시 1:
 * 입력: nums = [2,7,11,15], target = 9
 * 출력: [0,1]
 * 설명: nums[0] + nums[1] == 9이므로 [0, 1]을 반환합니다.
 *
 * 예시 2:
 * 입력: nums = [3,2,4], target = 6
 * 출력: [1,2]
 *
 * 예시 3:
 * 입력: nums = [3,3], target = 6
 * 출력: [0,1]
 */
function twoSum(nums: number[], target: number): number[] {
    // 여기에 코드를 작성하세요
    const map = new Map<number, number>();

    for (let i = 0 ; i < nums.length; i += 1) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }


    return [];
}

// 테스트 케이스
const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [3, 2, 4], target: 6 },
    { nums: [3, 3], target: 6 }
];

testCases.forEach(test => {
    const result = twoSum(test.nums, test.target);
    console.log(result);
});

export { twoSum };