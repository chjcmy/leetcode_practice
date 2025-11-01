/**
 * Course Schedule
 * 
 * 문제: 주어진 수업과 선수과목 조건으로 모든 수업을 들을 수 있는지 판단하라
 * prerequisites[i] = [ai, bi]는 ai 수업을 듣기 위해 bi 수업을 먼저 들어야 함을 의미
 * 
 * 예시:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: 수업 0을 듣고 수업 1을 들으면 됨
 * 
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: 순환 종속성이 있어서 불가능
 * 
 * Input: numCourses = 5, prerequisites = [[1,4],[2,4],[3,1],[3,2]]
 * Output: true
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // 여기에 코드를 작성하세요
    // Hint 1: 그래프 문제 - 사이클 검출
    // Hint 2: DFS with 방문 상태 추적 또는 위상 정렬(Topological Sort)
    
    return false;
}

// 테스트 케이스
const testCases = [
    { numCourses: 2, prerequisites: [[1, 0]] },
    { numCourses: 2, prerequisites: [[1, 0], [0, 1]] },
    { numCourses: 5, prerequisites: [[1, 4], [2, 4], [3, 1], [3, 2]] },
    { numCourses: 3, prerequisites: [[0, 1], [0, 2], [1, 2]] },
    { numCourses: 4, prerequisites: [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]] }
];

testCases.forEach((test, index) => {
    const result = canFinish(test.numCourses, test.prerequisites);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Courses: ${test.numCourses}`);
    console.log(`Prerequisites: [${test.prerequisites.map(p => `[${p.join(', ')}]`).join(', ')}]`);
    console.log(`Can Finish: ${result}`);
    console.log('---');
});

