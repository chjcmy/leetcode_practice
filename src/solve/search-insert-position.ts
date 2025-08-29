/**
 * 35. Search Insert Position (Easy)
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 */

/**
 * 35. 검색 삽입 위치 (Easy)
 *
 * 고유한 정수로 정렬된 배열과 대상 값이 주어지면 대상이 발견되면 인덱스를 반환합니다. 그렇지 않으면 순서대로 삽입되었을 경우의 인덱스를 반환합니다.
 * O(log n) 런타임 복잡도를 가진 알고리즘을 작성해야 합니다.
 *
 * 예시:
 * 입력: nums = [1,3,5,6], target = 5
 * 출력: 2
 */

function searchInsert(nums: number[], target: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(searchInsert([1,3,5,6], 5)); // Expected: 2
console.log(searchInsert([1,3,5,6], 2)); // Expected: 1
console.log(searchInsert([1,3,5,6], 7)); // Expected: 4