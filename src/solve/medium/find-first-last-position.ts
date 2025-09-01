/**
 * 34. Find First and Last Position of Element in Sorted Array (Medium)
 * 
 * Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 */

/**
 * 34. 정렬된 배열에서 요소의 첫 번째와 마지막 위치 찾기 (Medium)
 *
 * 감소하지 않는 순서로 정렬된 정수 배열 nums가 주어지면 주어진 대상 값의 시작 및 끝 위치를 찾습니다.
 * 대상이 배열에 없으면 [-1, -1]을 반환합니다.
 * O(log n) 런타임 복잡도를 가진 알고리즘을 작성해야 합니다.
 *
 * 예시:
 * 입력: nums = [5,7,7,8,8,10], target = 8
 * 출력: [3,4]
 */

function searchRange(nums: number[], target: number): number[] {
    // 여기에 구현하세요
    return [-1, -1];
}

// Test cases
console.log(searchRange([5,7,7,8,8,10], 8)); // Expected: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Expected: [-1,-1]
console.log(searchRange([], 0)); // Expected: [-1,-1]