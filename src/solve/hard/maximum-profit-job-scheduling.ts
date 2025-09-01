/**
 * 1235. Maximum Profit in Job Scheduling (Hard)
 * 
 * We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].
 * You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.
 * If you choose a job that ends at time X you will be able to start another job that starts at time X.
 * 
 * Example:
 * Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
 * Output: 120
 * Explanation: The subset chosen is the first and fourth job. 
 * Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
 * 
 * Example:
 * Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
 * Output: 150
 * Explanation: The subset chosen is the first, fourth and fifth job. 
 * Profit obtained 150 = 20 + 70 + 60.
 */

/**
 * 1235. 작업 스케줄링에서 최대 이익 (Hard)
 *
 * n개의 작업이 있으며, 모든 작업은 startTime[i]에서 endTime[i]까지 수행되며 profit[i]의 이익을 얻습니다.
 * startTime, endTime 및 profit 배열이 주어지면, 시간 범위가 겹치는 두 작업이 없는 하위 집합을 선택하여 얻을 수 있는 최대 이익을 반환합니다.
 * 시간 X에 끝나는 작업을 선택하면 시간 X에 시작하는 다른 작업을 시작할 수 있습니다.
 *
 * 예시:
 * 입력: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
 * 출력: 120
 * 설명: 선택된 하위 집합은 첫 번째와 네 번째 작업입니다.
 * 시간 범위 [1-3]+[3-6], 이익 120 = 50 + 70을 얻습니다.
 *
 * 예시:
 * 입력: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
 * 출력: 150
 * 설명: 선택된 하위 집합은 첫 번째, 네 번째, 다섯 번째 작업입니다.
 * 얻은 이익 150 = 20 + 70 + 60.
 */

function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70])); // Expected: 120
console.log(jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60])); // Expected: 150