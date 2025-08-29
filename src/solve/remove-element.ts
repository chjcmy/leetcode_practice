/**
 * 27. Remove Element (Easy)
 * 
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * 
 * Example:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 2.
 */

/**
 * 27. 요소 제거 (Easy)
 *
 * 정수 배열 nums와 정수 val이 주어지면 nums에서 val의 모든 발생을 제자리에서 제거합니다. 요소의 순서는 변경될 수 있습니다. 그런 다음 val과 같지 않은 nums의 요소 수를 반환합니다.
 *
 * 예시:
 * 입력: nums = [3,2,2,3], val = 3
 * 출력: 2, nums = [2,2,_,_]
 * 설명: 함수는 k = 2를 반환해야 하며, nums의 처음 두 요소는 2입니다.
 */

function removeElement(nums: number[], val: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(removeElement([3,2,2,3], 3)); // Expected: 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // Expected: 5