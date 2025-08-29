/**
 * 7. Reverse Integer (Medium)
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Example:
 * Input: x = 123
 * Output: 321
 */

/**
 * 7. 정수 뒤집기 (Medium)
 *
 * 부호 있는 32비트 정수 x가 주어지면 x의 숫자를 뒤집어 반환합니다. x를 뒤집으면 값이 부호 있는 32비트 정수 범위 [-2^31, 2^31 - 1]를 벗어나면 0을 반환합니다.
 * 환경에서 64비트 정수(부호 있거나 없음)를 저장할 수 없다고 가정합니다.
 *
 * 예시:
 * 입력: x = 123
 * 출력: 321
 */

function reverse(x: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(reverse(123)); // Expected: 321
console.log(reverse(-123)); // Expected: -321
console.log(reverse(120)); // Expected: 21