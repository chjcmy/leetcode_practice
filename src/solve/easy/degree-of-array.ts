/**
 * Degree of an Array
 *
 * 문제: 음이 아닌 정수로 이루어진 비어 있지 않은 배열이 주어졌을 때, 이 배열의 차수(degree)는 배열의 요소 중 가장 높은 빈도수로 정의됩니다.
 * 배열의 차수와 동일한 차수를 갖는 가장 작은 (연속적인) 하위 배열의 길이를 찾아야 합니다.
 *
 * 예시 1:
 * Input: nums = [1, 2, 2, 3, 1]
 * Output: 2
 * 설명:
 * 입력 배열의 차수는 2입니다. 왜냐하면 1과 2가 두 번 나타나기 때문입니다.
 * 동일한 차수를 갖는 하위 배열 중 [1, 2, 2, 3, 1], [1, 2, 2], [2, 2, 3, 1], [2, 2]가 있습니다.
 * 이 중 가장 짧은 것은 [2, 2]이며 길이는 2입니다.
 *
 * 예시 2:
 * Input: nums = [1, 2, 2, 3, 1, 4, 2]
 * Output: 6
 * 설명:
 * 차수는 3입니다 (요소 2가 3번 나타남).
 * 하위 배열 [2, 2, 3, 1, 4, 2]는 차수가 3인 가장 짧은 하위 배열이며 길이는 6입니다.
 */

function findShortestSubArray(nums: number[]): number {
    // 여기에 코드를 작성하세요
    return 0;
}

// 테스트 케이스
const testCases = [
    [1, 2, 2, 3, 1],
    [1, 2, 2, 3, 1, 4, 2]
];

testCases.forEach((test, index) => {
    const result = findShortestSubArray(test);
    console.log(`테스트 케이스 ${index + 1}:`);
    console.log(`Input: [${test.join(', ')}]`);
    console.log(`Output: ${result}`);
    console.log('---');
});

export { findShortestSubArray };
