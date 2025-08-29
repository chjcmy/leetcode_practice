/**
 * 480. Sliding Window Median (Hard)
 * 
 * The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.
 * You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 * Return the median array for each window in the original array.
 * 
 * Example:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
 */

/**
 * 480. 슬라이딩 윈도우 중앙값 (Hard)
 *
 * 중앙값은 정렬된 정수 목록의 중간 값입니다. 목록의 크기가 짝수이면 중간 값이 없습니다. 따라서 중앙값은 두 중간 값의 평균입니다.
 * 정수 배열 nums와 정수 k가 주어집니다. 배열의 맨 왼쪽에서 맨 오른쪽으로 이동하는 크기 k의 슬라이딩 윈도우가 있습니다. 윈도우에서 k개의 숫자만 볼 수 있습니다. 슬라이딩 윈도우가 오른쪽으로 한 위치씩 이동할 때마다.
 * 원래 배열의 각 윈도우에 대한 중앙값 배열을 반환합니다.
 *
 * 예시:
 * 입력: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 출력: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
 */

function medianSlidingWindow(nums: number[], k: number): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Expected: [1,-1,-1,3,5,6]
console.log(medianSlidingWindow([1,2,3,4,2,3,1,4,2], 3)); // Expected: [2,3,3,3,2,3,2]