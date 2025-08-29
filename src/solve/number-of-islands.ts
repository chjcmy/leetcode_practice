/**
 * Number of Islands
 * 
 * 문제: 2D 그리드에서 섬의 개수를 세어라
 * '1'은 땅, '0'은 물을 나타냄
 * 섬은 수평 또는 수직으로 연결된 땅으로 구성됨
 * 
 * 예시:
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 * 
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 */

function numIslands(grid: string[][]): number {
    // 여기에 코드를 작성하세요
    // Hint: DFS 또는 BFS로 연결된 땅을 모두 방문 처리
    
    return 0;
}

// 테스트 케이스
const testCases = [
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ],
    [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ],
    [
        ["1","0","1","1","1"],
        ["1","0","1","0","1"],
        ["1","1","1","0","1"]
    ]
];

testCases.forEach((test, index) => {
    const result = numIslands(test);
    console.log(`Test Case ${index + 1}:`);
    console.log('Grid:');
    test.forEach(row => console.log(`[${row.map(cell => `"${cell}"`).join(', ')}]`));
    console.log(`Number of Islands: ${result}`);
    console.log('---');
});

export { numIslands };