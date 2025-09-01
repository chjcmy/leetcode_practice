/**
 * 412. Fizz Buzz (Easy)
 * 
 * Given an integer n, return a string array answer (1-indexed) where:
 * - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * - answer[i] == "Fizz" if i is divisible by 3.
 * - answer[i] == "Buzz" if i is divisible by 5.
 * - answer[i] == i (as a string) if none of the above conditions are true.
 * 
 * Example:
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 */

/**
 * 412. 피즈 버즈 (Easy)
 *
 * 정수 n이 주어지면 다음 조건에 따라 문자열 배열 answer(1-인덱스)를 반환합니다:
 * - i가 3과 5로 나누어지면 answer[i] == "FizzBuzz"입니다.
 * - i가 3으로 나누어지면 answer[i] == "Fizz"입니다.
 * - i가 5로 나누어지면 answer[i] == "Buzz"입니다.
 * - 위의 조건 중 어느 것도 해당되지 않으면 answer[i] == i(문자열)입니다.
 *
 * 예시:
 * 입력: n = 3
 * 출력: ["1","2","Fizz"]
 */

function fizzBuzz(n: number): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(fizzBuzz(3)); // Expected: ["1","2","Fizz"]
console.log(fizzBuzz(5)); // Expected: ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)); // Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]