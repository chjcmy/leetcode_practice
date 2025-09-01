/**
 * 378. Kth Smallest Element in a Sorted Matrix (Medium)
 * 
 * Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 * You must find a solution with a memory complexity better than O(n²).
 * 
 * Example:
 * Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
 * Output: 13
 * Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
 */

/**
 * 378. 정렬된 행렬에서 k번째로 작은 요소 (Medium)
 *
 * 행과 열이 모두 오름차순으로 정렬된 n x n 행렬이 주어지면 행렬에서 k번째로 작은 요소를 반환합니다.
 * 정렬된 순서에서 k번째로 작은 요소이며, k번째로 고유한 요소가 아닙니다.
 * O(n²)보다 나은 메모리 복잡도를 가진 솔루션을 찾아야 합니다.
 *
 * 예시:
 * 입력: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
 * 출력: 13
 * 설명: 행렬의 요소는 [1,5,9,10,11,12,13,13,15]이며, 8번째로 작은 숫자는 13입니다.
 */

function kthSmallestMatrix(matrix: number[][], k: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(kthSmallestMatrix([[1,5,9],[10,11,13],[12,13,15]], 8)); // Expected: 13
console.log(kthSmallestMatrix([[-5]], 1)); // Expected: -5