/**
 * 57. Insert Interval (Medium)
 * 
 * You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * Return intervals after the insertion.
 * 
 * Example:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 */

/**
 * 57. 간격 삽입 (Medium)
 *
 * 겹치지 않는 간격 배열 intervals가 주어지며, 여기서 intervals[i] = [starti, endi]는 i번째 간격의 시작과 끝을 나타내고 intervals는 starti를 기준으로 오름차순으로 정렬됩니다. 또한 다른 간격의 시작과 끝을 나타내는 간격 newInterval = [start, end]도 주어집니다.
 * newInterval을 intervals에 삽입하여 intervals가 여전히 starti를 기준으로 오름차순으로 정렬되고 intervals에 겹치는 간격이 없도록 합니다(필요한 경우 겹치는 간격 병합).
 * 삽입 후 intervals를 반환합니다.
 *
 * 예시:
 * 입력: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 출력: [[1,5],[6,9]]
 */

function insert(intervals: number[][], newInterval: number[]): number[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(insert([[1,3],[6,9]], [2,5])); // Expected: [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // Expected: [[1,2],[3,10],[12,16]]