/**
 * 435. Non-overlapping Intervals (Medium)
 * 
 * Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 * 
 * Example:
 * Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
 * Output: 1
 * Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
 */

/**
 * 435. 겹치지 않는 간격 (Medium)
 *
 * 간격 배열 intervals가 주어지면, 여기서 intervals[i] = [starti, endi]일 때, 나머지 간격이 겹치지 않도록 하기 위해 제거해야 하는 최소 간격 수를 반환합니다.
 *
 * 예시:
 * 입력: intervals = [[1,2],[2,3],[3,4],[1,3]]
 * 출력: 1
 * 설명: [1,3]을 제거하면 나머지 간격이 겹치지 않습니다.
 */

function eraseOverlapIntervals(intervals: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Expected: 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // Expected: 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // Expected: 0