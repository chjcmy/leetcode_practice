/**
 * Container With Most Water
 * 
 * 문제: 배열에서 두 선을 선택하여 가장 많은 물을 담을 수 있는 컨테이너의 넓이를 구하라
 * x축은 인덱스 거리, y축은 더 낮은 높이가 물의 높이가 됨
 * 
 * 예시:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: 인덱스 1(높이 8)과 인덱스 8(높이 7) 사이
 *              넓이 = (8-1) * min(8,7) = 7 * 7 = 49
 * 
 * Input: height = [1,1]
 * Output: 1
 * 
 * Input: height = [1,2,1]
 * Output: 2
 */

function maxArea(height: number[]): number {
    // 여기에 코드를 작성하세요
    // Hint: Two Pointer 기법 사용 - 양 끝에서 시작하여 중앙으로
    
    return 0;
}

// 테스트 케이스
const testCases = [
    [1, 8, 6, 2, 5, 4, 8, 3, 7],
    [1, 1],
    [1, 2, 1],
    [2, 3, 4, 5, 18, 17, 6],
    [1, 2, 4, 3]
];

testCases.forEach((test, index) => {
    const result = maxArea(test);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: [${test.join(', ')}]`);
    console.log(`Max Area: ${result}`);
    console.log('---');
});

export { maxArea };