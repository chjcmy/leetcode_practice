/**
 * 322. Coin Change (Medium)
 * 
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 * 
 * Example 1:
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 * 
 * Example 2:
 * Input: coins = [2], amount = 3
 * Output: -1
 * 
 * Example 3:
 * Input: coins = [1], amount = 0
 * Output: 0
 */

/**
 * 322. 동전 교환 (Medium)
 *
 * 서로 다른 종류의 동전을 나타내는 정수 배열 `coins`와 총 금액을 나타내는 정수 `amount`가 주어집니다.
 * 그 금액을 만들기 위해 필요한 동전의 최소 개수를 반환하세요. 어떤 동전 조합으로도 그 금액을 만들 수 없으면 -1을 반환하세요.
 * 각 종류의 동전은 무한정 가지고 있다고 가정할 수 있습니다.
 *
 * 예시 1:
 * 입력: coins = [1,2,5], amount = 11
 * 출력: 3
 * 설명: 11 = 5 + 5 + 1
 *
 * 예시 2:
 * 입력: coins = [2], amount = 3
 * 출력: -1
 *
 * 예시 3:
 * 입력: coins = [1], amount = 0
 * 출력: 0
 */
function coinChange(coins: number[], amount: number): number {
    // 여기에 코드를 작성하세요
    
    return -1;
}

// 테스트 케이스
const testCases = [
    { coins: [1, 3, 4], amount: 6 },
    { coins: [2], amount: 3 },
    { coins: [1], amount: 0 }
];

testCases.forEach(test => {
    const result = coinChange(test.coins, test.amount);
    console.log(result);
});

export { coinChange };