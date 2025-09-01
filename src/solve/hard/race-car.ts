/**
 * 818. Race Car (Hard)
 * 
 * Your car starts at position 0 and speed +1 on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions 'A' (accelerate) and 'R' (reverse).
 * - When you get an instruction 'A', your car does the following:
 *   - position += speed
 *   - speed *= 2
 * - When you get an instruction 'R', your car does the following:
 *   - If your speed is positive then speed = -1
 *   - Otherwise speed = 1
 *   - Your position stays the same.
 * For example, after commands "AAR", your car goes to positions 0 --> 1 --> 3 --> 3, and your speed goes to 1 --> 2 --> 4 --> -1.
 * Given a target position target, return the length of the shortest sequence of instructions to get there.
 * 
 * Example:
 * Input: target = 3
 * Output: 2
 * Explanation: 
 * The shortest instruction sequence is "AA".
 * Your position goes from 0 --> 1 --> 3.
 * 
 * Example:
 * Input: target = 6
 * Output: 5
 * Explanation: 
 * The shortest instruction sequence is "AAARA".
 * Your position goes from 0 --> 1 --> 3 --> 7 --> 7 --> 6.
 */

/**
 * 818. 레이스 카 (Hard)
 *
 * 당신의 차는 무한한 수직선 위의 위치 0에서 속도 +1로 시작합니다. 당신의 차는 음수 위치로 갈 수 있습니다. 당신의 차는 'A'(가속)와 'R'(후진) 지침 순서에 따라 자동으로 운전됩니다.
 * - 'A' 지침을 받으면 차는 다음을 수행합니다:
 *   - position += speed
 *   - speed *= 2
 * - 'R' 지침을 받으면 차는 다음을 수행합니다:
 *   - 속도가 양수이면 speed = -1
 *   - 그렇지 않으면 speed = 1
 *   - 위치는 그대로 유지됩니다.
 * 예를 들어, "AAR" 명령 후 차는 위치 0 --> 1 --> 3 --> 3으로 이동하고 속도는 1 --> 2 --> 4 --> -1로 변경됩니다.
 * 목표 위치 target이 주어지면, 거기에 도달하기 위한 가장 짧은 지침 순서의 길이를 반환하세요.
 *
 * 예시:
 * 입력: target = 3
 * 출력: 2
 * 설명:
 * 가장 짧은 지침 순서는 "AA"입니다.
 * 당신의 위치는 0 --> 1 --> 3으로 이동합니다.
 *
 * 예시:
 * 입력: target = 6
 * 출력: 5
 * 설명:
 * 가장 짧은 지침 순서는 "AAARA"입니다.
 * 당신의 위치는 0 --> 1 --> 3 --> 7 --> 7 --> 6으로 이동합니다.
 */

function racecar(target: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(racecar(3)); // Expected: 2
console.log(racecar(6)); // Expected: 5