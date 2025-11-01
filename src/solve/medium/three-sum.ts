/**
 * 3Sum
 *
 * 문제: 배열에서 세 수의 합이 0이 되는 모든 조합을 찾아라
 * 중복된 조합은 제외하고 반환해야 함
 *
 * 예시:
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * Input: nums = [0,1,1]
 * Output: []
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 */

function threeSum(nums: number[]): number[][] {
    // 여기에 코드를 작성하세요
    // Hint: 정렬 후 Two Pointer 기법 사용

    return [];
}

// 테스트 케이스
const testCases = [
    [-1, 0, 1, 2, -1, -4],
    [0, 1, 1],
    [0, 0, 0],
    [-2, 0, 1, 1, 2]
];

testCases.forEach(test => {
    const result = threeSum(test);
    console.log(`Input: [${test.join(', ')}]`);
    console.log(`Output: [${result.map(arr => `[${arr.join(', ')}]`).join(', ')}]`);
    console.log('---');
});

