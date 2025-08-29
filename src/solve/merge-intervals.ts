/**
 * 56. Merge Intervals (Medium)
 * 
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * Example:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */

/**
 * 56. 간격 병합 (Medium)
 *
 * 간격 배열 intervals가 주어지면, 여기서 intervals[i] = [starti, endi]일 때, 모든 겹치는 간격을 병합하고, 입력의 모든 간격을 포함하는 겹치지 않는 간격 배열을 반환합니다.
 *
 * 예시:
 * 입력: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 출력: [[1,6],[8,10],[15,18]]
 * 설명: 간격 [1,3]과 [2,6]이 겹치므로 [1,6]으로 병합합니다.
 */

function merge(intervals: number[][]): number[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]