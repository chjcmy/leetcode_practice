/**
 * Longest Increasing Subsequence
 * 
 * 문제: 배열에서 가장 긴 증가하는 부분 수열의 길이를 구하라
 * 부분 수열은 연속될 필요가 없음
 * 
 * 예시:
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: [2,3,7,18] 또는 [2,3,7,101]
 * 
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4
 * 
 * Input: nums = [7,7,7,7,7,7,7]
 * Output: 1
 */

function lengthOfLIS(nums: number[]): number {
    // 여기에 코드를 작성하세요
    // Hint 1: DP 접근법 - O(n²)
    // Hint 2: Binary Search 접근법 - O(n log n)
    
    return 0;
}

// 테스트 케이스
const testCases = [
    [10, 9, 2, 5, 3, 7, 101, 18],
    [0, 1, 0, 3, 2, 3],
    [7, 7, 7, 7, 7, 7, 7],
    [1, 3, 6, 7, 9, 4, 10, 5, 6],
    [4, 10, 4, 3, 8, 9]
];

testCases.forEach((test, index) => {
    const result = lengthOfLIS(test);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: [${test.join(', ')}]`);
    console.log(`Length of LIS: ${result}`);
    console.log('---');
});

export { lengthOfLIS };