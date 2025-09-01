/**
 * 153. Find Minimum in Rotated Sorted Array (Medium)
 * 
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 * Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 * 
 * Example:
 * Input: nums = [3,4,5,1,2]
 * Output: 1
 * Explanation: The original array was [1,2,3,4,5] rotated 3 times.
 */

/**
 * 153. 회전된 정렬 배열에서 최솟값 찾기 (Medium)
 *
 * 오름차순으로 정렬된 길이 n의 배열이 1에서 n번 회전했다고 가정합니다.
 * 고유한 요소의 정렬된 회전 배열 nums가 주어지면 이 배열의 최소 요소를 반환합니다.
 * O(log n) 시간에 실행되는 알고리즘을 작성해야 합니다.
 *
 * 예시:
 * 입력: nums = [3,4,5,1,2]
 * 출력: 1
 * 설명: 원래 배열은 [1,2,3,4,5]를 3번 회전한 것입니다.
 */

function findMin(nums: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(findMin([3,4,5,1,2])); // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0
console.log(findMin([11,13,15,17])); // Expected: 11