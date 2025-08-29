/**
 * 1335. Minimum Difficulty of a Job Schedule (Hard)
 * 
 * You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i).
 * You have to finish at least one task every day. The difficulty of a job schedule is the sum of difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job done on that day.
 * Given an array of integers jobDifficulty and an integer d. Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.
 * 
 * Example:
 * Input: jobDifficulty = [6,5,4,3,2,1], d = 2
 * Output: 7
 * Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
 * Second day you can finish the last job, total difficulty = 1.
 * The difficulty of the schedule = 6 + 1 = 7
 * 
 * Example:
 * Input: jobDifficulty = [9,9,9], d = 4
 * Output: -1
 * Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule for the given jobs.
 */

/**
 * 1335. 작업 스케줄의 최소 난이도 (Hard)
 *
 * d일 동안의 작업 목록을 예약하려고 합니다. 작업은 종속적입니다(즉, i번째 작업을 하려면 0 <= j < i인 모든 작업 j를 완료해야 함).
 * 매일 적어도 하나의 작업을 완료해야 합니다. 작업 스케줄의 난이도는 d일 각 날의 난이도의 합입니다. 하루의 난이도는 그날 수행된 작업의 최대 난이도입니다.
 * 정수 배열 jobDifficulty와 정수 d가 주어집니다. 작업 스케줄의 최소 난이도를 반환합니다. 작업 스케줄을 찾을 수 없으면 -1을 반환합니다.
 *
 * 예시:
 * 입력: jobDifficulty = [6,5,4,3,2,1], d = 2
 * 출력: 7
 * 설명: 첫째 날에는 처음 5개의 작업을 완료할 수 있으며 총 난이도는 6입니다.
 * 둘째 날에는 마지막 작업을 완료할 수 있으며 총 난이도는 1입니다.
 * 스케줄의 난이도 = 6 + 1 = 7
 *
 * 예시:
 * 입력: jobDifficulty = [9,9,9], d = 4
 * 출력: -1
 * 설명: 하루에 한 가지 작업을 완료하면 여전히 자유로운 날이 있습니다. 주어진 작업에 대한 스케줄을 찾을 수 없습니다.
 */

function minDifficulty(jobDifficulty: number[], d: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(minDifficulty([6,5,4,3,2,1], 2)); // Expected: 7
console.log(minDifficulty([9,9,9], 4)); // Expected: -1
console.log(minDifficulty([1,1,1], 3)); // Expected: 3