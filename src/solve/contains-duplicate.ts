/**
 * 217. Contains Duplicate (Easy)
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */

/**
 * 217. 중복 포함 (Easy)
 *
 * 정수 배열 nums가 주어졌을 때, 어떤 값이 배열에 최소 두 번 이상 나타나면 true를 반환하고, 모든 요소가 고유하면 false를 반환하세요.
 *
 * 예시 1:
 * 입력: nums = [1,2,3,1]
 * 출력: true
 *
 * 예시 2:
 * 입력: nums = [1,2,3,4]
 * 출력: false
 *
 * 예시 3:
 * 입력: nums = [1,1,1,3,3,4,3,2,4,2]
 * 출력: true
 */
function containsDuplicate(nums: number[]): boolean {
    // 여기에 코드를 작성하세요
    const set = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }

        set.add(nums[i]);
    }
    
    return false;
}

// 테스트 케이스
const testCases = [
    [1, 2, 3, 1],
    [1, 2, 3, 4],
    [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
];

testCases.forEach(test => {
    const result = containsDuplicate(test);
    console.log(result);
});

export { containsDuplicate };