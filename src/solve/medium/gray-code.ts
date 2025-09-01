/**
 * 89. Gray Code (Medium)
 * 
 * An n-bit gray code sequence is a sequence of 2^n integers where:
 * - Every integer is in the inclusive range [0, 2^n - 1],
 * - The first integer is 0,
 * - An integer appears no more than once in the sequence,
 * - The binary representation of every pair of adjacent integers differs by exactly one bit, and
 * - The binary representation of the first and last integers differs by exactly one bit.
 * Given an integer n, return any valid n-bit gray code sequence.
 * 
 * Example:
 * Input: n = 2
 * Output: [0,1,3,2]
 */

/**
 * 89. 그레이 코드 (Medium)
 *
 * n비트 그레이 코드 시퀀스는 다음 조건을 만족하는 2^n개의 정수 시퀀스입니다:
 * - 모든 정수는 [0, 2^n - 1] 범위에 있습니다.
 * - 첫 번째 정수는 0입니다.
 * - 정수는 시퀀스에 한 번만 나타납니다.
 * - 인접한 모든 정수 쌍의 이진 표현은 정확히 한 비트만 다릅니다.
 * - 첫 번째와 마지막 정수의 이진 표현은 정확히 한 비트만 다릅니다.
 * 정수 n이 주어지면 유효한 n비트 그레이 코드 시퀀스를 반환합니다.
 *
 * 예시:
 * 입력: n = 2
 * 출력: [0,1,3,2]
 */

function grayCode(n: number): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(grayCode(2)); // Expected: [0,1,3,2]
console.log(grayCode(1)); // Expected: [0,1]