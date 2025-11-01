/**
 * Product of Array Except Self
 * 
 * 문제: 자기 자신을 제외한 모든 원소의 곱으로 이루어진 배열을 반환하라
 * 나눗셈을 사용하지 말고, O(n) 시간복잡도로 해결해야 함
 * 
 * 예시:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Explanation: [2*3*4, 1*3*4, 1*2*4, 1*2*3]
 * 
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * 
 * Follow up: O(1) 공간복잡도로 해결할 수 있는가? (출력 배열 제외)
 */

function productExceptSelf(nums: number[]): number[] {
    // 여기에 코드를 작성하세요
    // Hint 1: 왼쪽 곱과 오른쪽 곱을 따로 계산
    // Hint 2: 두 번의 패스로 해결 가능
    
    return [];
}

// 테스트 케이스
const testCases = [
    [1, 2, 3, 4],
    [-1, 1, 0, -3, 3],
    [2, 3, 4, 5],
    [1, 0],
    [0, 0],
    [1, 2, 3, 0, 5]
];

testCases.forEach((test, index) => {
    const result = productExceptSelf(test);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: [${test.join(', ')}]`);
    console.log(`Output: [${result.join(', ')}]`);
    console.log('---');
});

