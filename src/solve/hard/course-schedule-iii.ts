/**
 * 630. Course Schedule III (Hard)
 * 
 * There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.
 * You will start on the 1st day and you cannot take two or more courses simultaneously.
 * Return the maximum number of courses that you can take.
 * 
 * Example:
 * Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
 * Output: 3
 * Explanation: 
 * There are totally 4 courses, but you can take 3 courses at most:
 * First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
 * Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day.
 * Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day.
 * The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.
 * 
 * Example:
 * Input: courses = [[1,2]]
 * Output: 1
 * 
 * Example:
 * Input: courses = [[3,2],[4,3]]
 * Output: 0
 */

/**
 * 630. 수강 계획 III (Hard)
 *
 * 1부터 n까지 번호가 매겨진 n개의 다른 온라인 과정이 있습니다. courses[i] = [durationi, lastDayi]는 i번째 과정이 durationi일 동안 계속 수강해야 하며 lastDayi 이전에 또는 당일에 완료해야 함을 나타내는 배열 courses가 주어집니다.
 * 당신은 1일차에 시작하며 동시에 두 개 이상의 과정을 수강할 수 없습니다.
 * 수강할 수 있는 최대 과정 수를 반환하세요.
 *
 * 예시:
 * 입력: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
 * 출력: 3
 * 설명:
 * 총 4개의 과정이 있지만 최대 3개의 과정만 수강할 수 있습니다:
 * 첫째, 첫 번째 과정을 수강하면 100일이 소요되므로 100일째에 완료하고 101일째에 다음 과정을 수강할 준비가 됩니다.
 * 둘째, 세 번째 과정을 수강하면 1000일이 소요되므로 1100일째에 완료하고 1101일째에 다음 과정을 수강할 준비가 됩니다.
 * 셋째, 두 번째 과정을 수강하면 200일이 소요되므로 1300일째에 완료합니다.
 * 네 번째 과정은 마감일을 초과하므로 지금 수강할 수 없습니다.
 *
 * 예시:
 * 입력: courses = [[1,2]]
 * 출력: 1
 *
 * 예시:
 * 입력: courses = [[3,2],[4,3]]
 * 출력: 0
 */

function scheduleCourse(courses: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(scheduleCourse([[100,200],[200,1300],[1000,1250],[2000,3200]])); // Expected: 3
console.log(scheduleCourse([[1,2]])); // Expected: 1
console.log(scheduleCourse([[3,2],[4,3]])); // Expected: 0