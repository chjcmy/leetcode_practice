/**
 * 70. Climbing Stairs (Easy)
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */

/**
 * 70. 계단 오르기 (Easy)
 *
 * 계단을 오르고 있습니다. 꼭대기에 도달하려면 n개의 계단을 올라야 합니다.
 * 매번 1개 또는 2개의 계단을 오를 수 있습니다. 꼭대기까지 오르는 데 몇 가지 고유한 방법이 있습니까?
 *
 * 예시 1:
 * 입력: n = 2
 * 출력: 2
 * 설명: 꼭대기까지 오르는 방법은 두 가지입니다.
 * 1. 1 계단 + 1 계단
 * 2. 2 계단
 *
 * 예시 2:
 * 입력: n = 3
 * 출력: 3
 * 설명: 꼭대기까지 오르는 방법은 세 가지입니다.
 * 1. 1 계단 + 1 계단 + 1 계단
 * 2. 1 계단 + 2 계단
 * 3. 2 계단 + 1 계단
 */
function climbStairs(n: number): number {

    let prev2 = 1;  // f(0)
    let prev1 = 1;  // f(1)

    for (let i = 2; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

// 테스트 케이스
const testCases = [2, 3, 4, 5, 6];

testCases.forEach(test => {
    const result = climbStairs(test);
    console.log(result);
});

export { climbStairs };