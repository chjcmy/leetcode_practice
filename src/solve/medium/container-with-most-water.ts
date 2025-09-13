/**
 * 11. Container With Most Water
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the i-th line are (i, 0) and (i, height[i]).
 *
 * Find two lines that, together with the x-axis, form a container that can hold the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 * ---
 *
 * ### 한글 설명
 *
 * 길이가 n인 정수 배열 `height`가 주어집니다. `i`번째 선의 두 끝점은 `(i, 0)`과 `(i, height[i])`가 되도록 그려진 `n`개의 수직선이 있습니다.
 *
 * x축과 함께 컨테이너를 형성하여 가장 많은 물을 담을 수 있는 두 개의 선을 찾으세요.
 *
 * 컨테이너가 저장할 수 있는 최대 물의 양을 반환하세요.
 *
 * 참고: 컨테이너를 기울일 수 없습니다.
 *
 * ---
 *
 * ### 예시
 *
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: 이 경우, 컨테이너가 담을 수 있는 최대 물의 넓이는 49입니다.
 *
 * Input: height = [1,1]
 * Output: 1
 *
 * ### 제약 조건
 * n == height.length
 * 2 <= n <= 10^5
 * 0 <= height[i] <= 10^4
 */

function maxArea(height: number[]): number {
    // 여기에 코드를 작성하세요
    // Hint: Two Pointer 기법 사용 - 양 끝에서 시작하여 중앙으로

    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;


    while(left < right) {
        if(left === right) {
            right++;
            continue;
        }

        const currentArea = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, currentArea)

        if(height[left] < height[right] ){
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

// 테스트 케이스
const testCases = [
    { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
    { input: [1, 1], expected: 1 },
    { input: [1, 2, 1], expected: 2 },
    { input: [2, 3, 4, 5, 18, 17, 6], expected: 17 },
    { input: [1, 2, 4, 3], expected: 4 }
];

testCases.forEach(({ input, expected }, index) => {
    const result = maxArea(input.slice()); // 원본 배열 수정을 방지하기 위해 복사본 사용
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: [${input.join(', ')}]`);
    console.log(`Expected: ${expected}`);
    console.log(`Result: ${result}`);
    console.log(`Passed: ${result === expected}`);
    console.log('---');
});

export { maxArea };
