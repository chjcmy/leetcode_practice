/**
 * 1723. Find Minimum Time to Finish All Jobs (Hard)
 * 
 * You are given an integer array jobs, where jobs[i] is the amount of time it takes to complete the ith job.
 * There are k workers available, and you can assign jobs to workers such that some workers stay idle.
 * Each job should be assigned to exactly one worker.
 * The working time of a worker is the sum of the time it takes to complete all jobs assigned to that worker.
 * Return the minimum possible maximum working time of any assignment.
 * 
 * Example:
 * Input: jobs = [3,2,3], k = 3
 * Output: 3
 * Explanation: By assigning each person one job, the maximum time is 3.
 * 
 * Example:
 * Input: jobs = [1,2,4,7,8], k = 2
 * Output: 11
 * Explanation: Assign the jobs the following way:
 * Worker 1: 1, 2, 8 (working time = 1 + 2 + 8 = 11)
 * Worker 2: 4, 7 (working time = 4 + 7 = 11)
 * The maximum working time is 11.
 */

/**
 * 1723. 모든 작업을 완료하기 위한 최소 시간 찾기 (Hard)
 *
 * 정수 배열 jobs가 주어지며, jobs[i]는 i번째 작업을 완료하는 데 걸리는 시간입니다.
 * k명의 작업자가 있으며, 일부 작업자는 쉬어도 되도록 작업을 할당할 수 있습니다.
 * 각 작업은 정확히 한 명의 작업자에게 할당되어야 합니다.
 * 작업자의 작업 시간은 해당 작업자에게 할당된 모든 작업을 완료하는 데 걸리는 시간의 합입니다.
 * 가능한 할당 중 최대 작업 시간의 최소값을 반환하세요.
 *
 * 예시:
 * 입력: jobs = [3,2,3], k = 3
 * 출력: 3
 * 설명: 각 사람에게 하나의 작업을 할당하면 최대 시간은 3입니다.
 *
 * 예시:
 * 입력: jobs = [1,2,4,7,8], k = 2
 * 출력: 11
 * 설명: 다음과 같이 작업을 할당합니다:
 * 작업자 1: 1, 2, 8 (작업 시간 = 1 + 2 + 8 = 11)
 * 작업자 2: 4, 7 (작업 시간 = 4 + 7 = 11)
 * 최대 작업 시간은 11입니다.
 */

function minimumTimeRequired(jobs: number[], k: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(minimumTimeRequired([3,2,3], 3)); // Expected: 3
console.log(minimumTimeRequired([1,2,4,7,8], 2)); // Expected: 11