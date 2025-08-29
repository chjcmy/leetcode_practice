/**
 * 704. Binary Search (Easy)
 * 
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * 
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 */

/**
 * 704. 이진 탐색 (Easy)
 *
 * 오름차순으로 정렬된 정수 배열 `nums`와 정수 `target`이 주어지면, `nums`에서 `target`을 검색하는 함수를 작성하세요. `target`이 존재하면 해당 인덱스를 반환합니다. 그렇지 않으면 -1을 반환합니다.
 * O(log n) 런타임 복잡도를 가진 알고리즘을 작성해야 합니다.
 *
 * 예시 1:
 * 입력: nums = [-1,0,3,5,9,12], target = 9
 * 출력: 4
 * 설명: 9는 nums에 존재하며 인덱스는 4입니다.
 *
 * 예시 2:
 * 입력: nums = [-1,0,3,5,9,12], target = 2
 * 출력: -1
 * 설명: 2는 nums에 존재하지 않으므로 -1을 반환합니다.
 */
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;  // 마지막 인덱스

    while (left <= right) {  // 반복 조건
        let mid = Math.floor((left + right) / 2);  // 중간 계산

        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            right = mid - 1;  // 왼쪽 절반으로
        } else {
            left = mid + 1;   // 오른쪽 절반으로
        }
    }

    return -1;
}

// 테스트 케이스
const testCases = [
    { nums: [-1, 0, 3, 5, 9, 12], target: 9 },
    { nums: [-1, 0, 3, 5, 9, 12], target: 2 },
    { nums: [5], target: 5 }
];

testCases.forEach(test => {
    const result = search(test.nums, test.target);
    console.log(result);
});

export { search };