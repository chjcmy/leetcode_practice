/**
 * 621. Task Scheduler (Medium)
 * 
 * Given a characters array tasks, representing the tasks a CPU must do, where each letter represents a different task. Tasks could be done in any order, but there is a constraint: there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter).
 * Return the least number of intervals the CPU will take to finish all the given tasks.
 * 
 * Example:
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B
 * There is at least 2 units of time between any two same tasks.
 */

/**
 * 621. 작업 스케줄러 (Medium)
 *
 * CPU가 수행해야 하는 작업을 나타내는 문자 배열 tasks가 주어지며, 각 문자는 다른 작업을 나타냅니다. 작업은 어떤 순서로든 수행할 수 있지만, 제약 조건이 있습니다: 두 개의 동일한 작업(동일한 문자) 사이에 재사용 대기시간을 나타내는 음이 아닌 정수 n이 있습니다.
 * CPU가 주어진 모든 작업을 완료하는 데 걸리는 최소 간격 수를 반환합니다.
 *
 * 예시:
 * 입력: tasks = ["A","A","A","B","B","B"], n = 2
 * 출력: 8
 * 설명: A -> B -> idle -> A -> B -> idle -> A -> B
 * 동일한 두 작업 사이에는 최소 2단위의 시간이 있습니다.
 */

function leastInterval(tasks: string[], n: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(leastInterval(["A","A","A","B","B","B"], 2)); // Expected: 8
console.log(leastInterval(["A","A","A","B","B","B"], 0)); // Expected: 6