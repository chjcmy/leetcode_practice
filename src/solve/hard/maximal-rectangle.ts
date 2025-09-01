/**
 * 85. Maximal Rectangle (Hard)
 * 
 * Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 * 
 * Example:
 * Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * Output: 6
 * Explanation: The maximal rectangle is shown in the above picture.
 */

/**
 * 85. 최대 직사각형 (Hard)
 *
 * 0과 1로 채워진 행 x 열 이진 행렬이 주어지면 1만 포함하는 가장 큰 직사각형을 찾아 해당 영역을 반환합니다.
 *
 * 예시:
 * 입력: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 출력: 6
 * 설명: 최대 직사각형이 위 그림에 나와 있습니다.
 */

function maximalRectangle(matrix: string[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])); // Expected: 6
console.log(maximalRectangle([["0"]])); // Expected: 0
console.log(maximalRectangle([["1"]])); // Expected: 1