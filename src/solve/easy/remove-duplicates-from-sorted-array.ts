/**
 * Remove Duplicates from Sorted Array
 *
 * 문제: 정렬된 배열에서 중복된 요소를 제거하여 각 요소가 한 번만 나타나도록 만드세요.
 * 배열은 in-place로 수정되어야 하며, 추가적인 공간을 사용해서는 안 됩니다.
 *
 * 예시 1:
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2,_]
 * 설명: 함수는 새로운 길이 2를 반환해야 하며, nums 배열의 처음 두 요소는 각각 1과 2가 됩니다.
 * 새로운 길이를 넘어서는 요소는 무엇이든 상관없습니다.
 *
 * 예시 2:
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 * 설명: 함수는 새로운 길이 5를 반환해야 하며, nums 배열의 처음 다섯 요소는 각각 0, 1, 2, 3, 4가 됩니다.
 * 새로운 길이를 넘어서는 요소는 무엇이든 상관없습니다.
 */

function removeDuplicates(nums: number[]): number {
    // 여기에 코드를 작성하세요
    return 0;
}

// 테스트 케이스
const testCases = [
    [1, 1, 2],
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
];

testCases.forEach((test, index) => {
    console.log(`테스트 케이스 ${index + 1}:`);
    const originalArray = [...test];
    const k = removeDuplicates(test);
    console.log(`Input: [${originalArray.join(', ')}]`);
    console.log(`Output: ${k}, nums = [${test.slice(0, k).join(', ')}]`);
    console.log('---');
});

export { removeDuplicates };