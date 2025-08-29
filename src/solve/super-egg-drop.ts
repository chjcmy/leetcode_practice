/**
 * 887. Super Egg Drop (Hard)
 * 
 * You are given k identical eggs and you have access to a building with n floors labeled from 1 to n.
 * You know that there exists a floor f where 0 <= f <= n such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break.
 * Each move, you may take an unbroken egg and drop it from any floor x (where 1 <= x <= n).
 * If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in another move.
 * You want to know the minimum number of moves that you need to determine with certainty what the value of f is.
 * 
 * Example:
 * Input: k = 1, n = 2
 * Output: 2
 * Explanation: 
 * Drop the egg from floor 1. If it breaks, we know that f = 0.
 * If it does not break, drop the egg from floor 2. If it breaks, we know that f = 1.
 * If it does not break, then we know f = 2.
 * Hence, we need at minimum 2 moves to determine with certainty what the value of f is.
 * 
 * Example:
 * Input: k = 2, n = 6
 * Output: 3
 */

/**
 * 887. 계란 떨어뜨리기 (Hard)
 *
 * k개의 동일한 계란이 주어지고 1부터 n까지 번호가 매겨진 n층 건물을 이용할 수 있습니다.
 * f보다 높은 층에서 떨어뜨린 계란은 깨지고, f층 이하에서 떨어뜨린 계란은 깨지지 않는 층 f(0 <= f <= n)가 존재한다는 것을 알고 있습니다.
 * 각 이동에서 깨지지 않은 계란을 가져와 임의의 층 x(1 <= x <= n)에서 떨어뜨릴 수 있습니다.
 * 계란이 깨지면 더 이상 사용할 수 없습니다. 그러나 계란이 깨지지 않으면 다른 이동에서 재사용할 수 있습니다.
 * f의 값이 무엇인지 확실하게 결정하는 데 필요한 최소 이동 횟수를 알고 싶습니다.
 *
 * 예시:
 * 입력: k = 1, n = 2
 * 출력: 2
 * 설명:
 * 1층에서 계란을 떨어뜨립니다. 깨지면 f = 0임을 알 수 있습니다.
 * 깨지지 않으면 2층에서 계란을 떨어뜨립니다. 깨지면 f = 1임을 알 수 있습니다.
 * 깨지지 않으면 f = 2임을 알 수 있습니다.
 * 따라서 f의 값을 확실하게 결정하려면 최소 2번의 이동이 필요합니다.
 *
 * 예시:
 * 입력: k = 2, n = 6
 * 출력: 3
 */

function superEggDrop(k: number, n: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(superEggDrop(1, 2)); // Expected: 2
console.log(superEggDrop(2, 6)); // Expected: 3
console.log(superEggDrop(3, 14)); // Expected: 4