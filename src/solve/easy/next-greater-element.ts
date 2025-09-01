/**
 * 496. Next Greater Element I (Easy)
 * 
 * The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
 * For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
 * Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 * 
 * Example:
 * Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * Output: [-1,3,-1]
 * Explanation: The next greater element for each value of nums1 is as follows:
 * - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
 * - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
 * - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
 */

/**
 * 496. 다음으로 큰 원소 I (Easy)
 *
 * 배열에서 어떤 원소 x의 다음으로 큰 원소는 같은 배열에서 x의 오른쪽에 있는 첫 번째로 큰 원소입니다.
 * 두 개의 고유한 0-인덱스 정수 배열 nums1과 nums2가 주어지며, 여기서 nums1은 nums2의 부분 집합입니다.
 * 각 0 <= i < nums1.length에 대해, nums1[i] == nums2[j]인 인덱스 j를 찾고 nums2에서 nums2[j]의 다음으로 큰 원소를 결정합니다. 다음으로 큰 원소가 없으면 이 쿼리에 대한 답은 -1입니다.
 * 위에서 설명한 대로 ans[i]가 다음으로 큰 원소인 길이 nums1.length의 배열 ans를 반환합니다.
 *
 * 예시:
 * 입력: nums1 = [4,1,2], nums2 = [1,3,4,2]
 * 출력: [-1,3,-1]
 * 설명: nums1의 각 값에 대한 다음으로 큰 원소는 다음과 같습니다:
 * - 4는 nums2 = [1,3,4,2]에서 밑줄이 그어져 있습니다. 다음으로 큰 원소가 없으므로 답은 -1입니다.
 * - 1은 nums2 = [1,3,4,2]에서 밑줄이 그어져 있습니다. 다음으로 큰 원소는 3입니다.
 * - 2는 nums2 = [1,3,4,2]에서 밑줄이 그어져 있습니다. 다음으로 큰 원소가 없으므로 답은 -1입니다.
 */

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(nextGreaterElement([4,1,2], [1,3,4,2])); // Expected: [-1,3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4])); // Expected: [3,-1]