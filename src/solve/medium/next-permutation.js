/**
 * 31. Next Permutation (Medium)
 * 
 * A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
 * The next permutation of an array of integers is the next lexicographically greater permutation of its integer.
 * If such an arrangement is not possible, the array must be rearranged as the lowest possible order.
 * The replacement must be in place and use only constant extra memory.
 * 
 * --- 
 * 
 * ### 한글 설명
 *
 * 정수 배열의 순열은 해당 멤버를 시퀀스 또는 선형 순서로 배열하는 것입니다.
 * 정수 배열의 다음 순열은 해당 정수의 사전순으로 다음으로 큰 순열입니다.
 * 이러한 배열이 불가능한 경우 배열을 가능한 가장 낮은 순서로 재정렬해야 합니다.
 * 교체는 제자리에서 이루어져야 하며 상수 추가 메모리만 사용해야 합니다.
 *
 * --- 
 * 
 * ### 예시
 * Input: nums = [1,2,3] -> Output: [1,3,2]
 * Input: nums = [3,2,1] -> Output: [1,2,3]
 * Input: nums = [1,1,5] -> Output: [1,5,1]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    // 1. 피봇(i) 찾기: 오른쪽에서 왼쪽으로 가면서, 오른쪽 값보다 작은 첫번째 값
    // 예: [1, 3, 5, 4, 2] -> i는 3을 가리키는 인덱스 1
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 피봇을 찾았다면 (배열이 완전히 내림차순이 아니라면)
    if (i >= 0) {
        // 2. 피봇과 바꿀 값(j) 찾기: 오른쪽에서 왼쪽으로 가면서, 피봇(i)보다 큰 첫번째 값
        // 예: [1, 3, 5, 4, 2] -> j는 4를 가리키는 인덱스 3
        let j = nums.length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        // 3. i와 j의 값을 스왑
        // 예: [1, 4, 5, 3, 2]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 4. 피봇(i)의 오른쪽 부분을 뒤집기
    // (만약 i가 -1이면, 배열 전체가 내림차순이므로 전체를 뒤집어 오름차순으로 만듦)
    // 예: [1, 4, | 5, 3, 2] -> [1, 4, 2, 3, 5]
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

// --- 테스트 케이스 ---
const testCases = [
    { input: [1, 2, 3], expected: [1, 3, 2] },
    { input: [3, 2, 1], expected: [1, 2, 3] },
    { input: [1, 1, 5], expected: [1, 5, 1] },
    { input: [1, 3, 2], expected: [2, 1, 3] },
    { input: [2, 3, 1], expected: [3, 1, 2] },
    { input: [5, 4, 7, 5, 3, 2], expected: [5, 5, 2, 3, 4, 7] },
];

console.log("--- Next Permutation 테스트 ---");
testCases.forEach(({ input, expected }, index) => {
    const originalInput = [...input];
    nextPermutation(input);
    const result = input;

    const passed = JSON.stringify(result) === JSON.stringify(expected);

    console.log(`Test Case ${index + 1}:`);
    console.log(`  - Input: [${originalInput.join(", ")}]`);
    console.log(`  - Expected: [${expected.join(", ")}]`);
    console.log(`  - Result: [${result.join(", ")}]`);
    console.log(`  - Passed: ${passed ? '✅' : '❌'}`);
    console.log("---");
});
