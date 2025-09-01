/**
 * 1326. Minimum Number of Taps to Open to Water a Garden (Hard)
 * 
 * There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at the point n.
 * There are n + 1 taps located at points [0, 1, 2, ..., n] in the garden.
 * Given an integer n and an integer array ranges of length n + 1 where ranges[i] (0-indexed) means the i-th tap can water the area [i - ranges[i], i + ranges[i]] if it was open.
 * Return the minimum number of taps to open to water the whole garden, If the garden cannot be watered return -1.
 * 
 * Example:
 * Input: n = 5, ranges = [3,4,1,1,0,0]
 * Output: 1
 * Explanation: The tap at point 0 can cover the interval [-3,3]
 * The tap at point 1 can cover the interval [-3,5]
 * The tap at point 2 can cover the interval [1,3]
 * The tap at point 3 can cover the interval [2,4]
 * The tap at point 4 can cover the interval [4,4]
 * The tap at point 5 can cover the interval [5,5]
 * Opening Only the second tap will water the whole garden [0,5]
 * 
 * Example:
 * Input: n = 3, ranges = [0,0,0,0]
 * Output: -1
 * Explanation: Even if you activate all the four taps you cannot water the whole garden.
 */

/**
 * 1326. 정원에 물을 주기 위해 열어야 하는 최소 탭 수 (Hard)
 *
 * x축에 1차원 정원이 있습니다. 정원은 0 지점에서 시작하여 n 지점에서 끝납니다.
 * 정원에는 [0, 1, 2, ..., n] 지점에 n + 1개의 탭이 있습니다.
 * 정수 n과 길이가 n + 1인 정수 배열 ranges가 주어지며, ranges[i](0-인덱스)는 i번째 탭이 열려 있으면 [i - ranges[i], i + ranges[i]] 영역에 물을 줄 수 있음을 의미합니다.
 * 전체 정원에 물을 주기 위해 열어야 하는 최소 탭 수를 반환하고, 정원에 물을 줄 수 없으면 -1을 반환합니다.
 *
 * 예시:
 * 입력: n = 5, ranges = [3,4,1,1,0,0]
 * 출력: 1
 * 설명: 0 지점의 탭은 [-3,3] 간격을 덮을 수 있습니다.
 * 1 지점의 탭은 [-3,5] 간격을 덮을 수 있습니다.
 * 2 지점의 탭은 [1,3] 간격을 덮을 수 있습니다.
 * 3 지점의 탭은 [2,4] 간격을 덮을 수 있습니다.
 * 4 지점의 탭은 [4,4] 간격을 덮을 수 있습니다.
 * 5 지점의 탭은 [5,5] 간격을 덮을 수 있습니다.
 * 두 번째 탭만 열면 전체 정원 [0,5]에 물을 줄 수 있습니다.
 *
 * 예시:
 * 입력: n = 3, ranges = [0,0,0,0]
 * 출력: -1
 * 설명: 네 개의 탭을 모두 활성화해도 전체 정원에 물을 줄 수 없습니다.
 */

function minTaps(n: number, ranges: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(minTaps(5, [3,4,1,1,0,0])); // Expected: 1
console.log(minTaps(3, [0,0,0,0])); // Expected: -1