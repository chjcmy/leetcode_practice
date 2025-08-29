/**
 * 66. Plus One (Easy)
 * 
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading zeros.
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * Example:
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 */

/**
 * 66. 1 더하기 (Easy)
 *
 * 각 digits[i]가 정수의 i번째 숫자인 정수 배열 digits로 표현되는 큰 정수가 주어집니다. 숫자는 왼쪽에서 오른쪽으로 가장 중요한 것부터 가장 중요하지 않은 순서로 정렬됩니다. 큰 정수에는 선행 0이 포함되지 않습니다.
 * 큰 정수를 1만큼 증가시키고 결과 숫자 배열을 반환합니다.
 *
 * 예시:
 * 입력: digits = [1,2,3]
 * 출력: [1,2,4]
 * 설명: 배열은 정수 123을 나타냅니다.
 * 1을 더하면 123 + 1 = 124가 됩니다.
 * 따라서 결과는 [1,2,4]여야 합니다.
 */

function plusOne(digits: number[]): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(plusOne([1,2,3])); // Expected: [1,2,4]
console.log(plusOne([4,3,2,1])); // Expected: [4,3,2,2]
console.log(plusOne([9])); // Expected: [1,0]