/**
 * 88. Merge Sorted Array (Easy)
 * 
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * Example:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 */

/**
 * 88. 정렬된 배열 병합 (Easy)
 *
 * 감소하지 않는 순서로 정렬된 두 정수 배열 nums1과 nums2, 그리고 각각 nums1과 nums2의 요소 수를 나타내는 두 정수 m과 n이 주어집니다.
 * nums1과 nums2를 감소하지 않는 순서로 정렬된 단일 배열로 병합합니다.
 *
 * 예시:
 * 입력: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 출력: [1,2,2,3,5,6]
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}

// Test cases
const nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(nums1); // Expected: [1,2,2,3,5,6]