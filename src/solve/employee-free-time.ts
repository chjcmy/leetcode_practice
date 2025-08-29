/**
 * 759. Employee Free Time (Hard)
 * 
 * We are given a list schedule of employees, which represents the working time for each employee.
 * Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.
 * Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.
 * (Even though we are representing Intervals in the form [x, y], the objects inside are Intervals, not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 3, and schedule[0][0][0] is not defined). Also, we wouldn't include intervals like [5, 5] as they have zero length.
 * 
 * Example:
 * Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
 * Output: [[5,6],[7,9]]
 * 
 * Example:
 * Input: schedule = [[[1,3],[4,6]]]
 * Output: []
 * Explanation: There is only one employee, and there is no free time for all employees.
 */

/**
 * 759. 직원 자유 시간 (Hard)
 *
 * 각 직원의 근무 시간을 나타내는 직원 목록 스케줄이 주어집니다.
 * 각 직원에게는 겹치지 않는 간격 목록이 있으며 이 간격은 정렬된 순서입니다.
 * 모든 직원의 공통적이고 양수 길이를 갖는 유한한 간격 목록을 정렬된 순서로 반환하세요.
 * (간격을 [x, y] 형태로 나타내더라도 내부 객체는 간격이며 목록이나 배열이 아닙니다. 예를 들어 schedule[0][0].start = 1, schedule[0][0].end = 3이고 schedule[0][0][0]은 정의되지 않았습니다). 또한 길이가 0인 [5, 5]와 같은 간격은 포함하지 않습니다.
 *
 * 예시:
 * 입력: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
 * 출력: [[5,6],[7,9]]
 *
 * 예시:
 * 입력: schedule = [[[1,3],[4,6]]]
 * 출력: []
 * 설명: 직원이 한 명뿐이며 모든 직원을 위한 자유 시간이 없습니다.
 */

class Interval {
    start: number
    end: number
    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
}

function employeeFreeTime(schedule: Interval[][]): Interval[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
const schedule1 = [
    [new Interval(1, 3), new Interval(6, 7)],
    [new Interval(2, 4)],
    [new Interval(2, 5), new Interval(9, 12)]
];
console.log(employeeFreeTime(schedule1)); // Expected: [[5,6],[7,9]]

const schedule2 = [
    [new Interval(1, 3), new Interval(4, 6)]
];
console.log(employeeFreeTime(schedule2)); // Expected: []