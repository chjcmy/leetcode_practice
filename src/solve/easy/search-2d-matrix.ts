/**
 * 74. Search a 2D Matrix (Medium)
 * 
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
 * - Integers in each row are sorted from left to right.
 * - The first integer of each row is greater than the last integer of the previous row.
 * 
 * Example:
 * Input: matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target = 5
 * Output: true
 */

/**
 * 74. 2D 행렬 검색 (Medium)
 *
 * m x n 정수 행렬 matrix에서 값 target을 검색하는 효율적인 알고리즘을 작성합니다. 이 행렬에는 다음과 같은 속성이 있습니다:
 * - 각 행의 정수는 왼쪽에서 오른쪽으로 정렬됩니다.
 * - 각 행의 첫 번째 정수는 이전 행의 마지막 정수보다 큽니다.
 *
 * 예시:
 * 입력: matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target = 5
 * 출력: true
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(searchMatrix([[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], 5)); // Expected: true
console.log(searchMatrix([[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], 13)); // Expected: true