/**
 * 239. Sliding Window Maximum (Hard)
 * 
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the max sliding window.
 * 
 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation: 
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 */

/**
 * 239. 슬라이딩 윈도우 최대값 (Hard)
 *
 * 정수 배열 nums가 주어지면, 배열의 맨 왼쪽에서 맨 오른쪽으로 이동하는 크기 k의 슬라이딩 윈도우가 있습니다. 윈도우에서 k개의 숫자만 볼 수 있습니다. 슬라이딩 윈도우가 오른쪽으로 한 위치씩 이동할 때마다.
 * 최대 슬라이딩 윈도우를 반환합니다.
 *
 * 예시:
 * 입력: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 출력: [3,3,5,5,6,7]
 * 설명:
 * 윈도우 위치                최대값
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Expected: [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // Expected: [1]