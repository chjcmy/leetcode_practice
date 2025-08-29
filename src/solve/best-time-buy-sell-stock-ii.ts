/**
 * 122. Best Time to Buy and Sell Stock II (Medium)
 * 
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 * 
 * Example:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 * Total profit is 4 + 3 = 7.
 */

/**
 * 122. 주식을 사고팔기 가장 좋은 시점 II (Medium)
 *
 * i번째 날의 주어진 주식 가격인 prices[i]가 있는 정수 배열 prices가 주어집니다.
 * 매일 주식을 사거나 팔기로 결정할 수 있습니다. 언제든지 최대 한 주만 보유할 수 있습니다. 그러나 같은 날에 즉시 사서 팔 수 있습니다.
 * 달성할 수 있는 최대 이익을 찾아 반환합니다.
 *
 * 예시:
 * 입력: prices = [7,1,5,3,6,4]
 * 출력: 7
 * 설명: 2일차(가격=1)에 사서 3일차(가격=5)에 팔면 이익 = 5-1 = 4입니다.
 * 그런 다음 4일차(가격=3)에 사서 5일차(가격=6)에 팔면 이익 = 6-3 = 3입니다.
 * 총 이익은 4 + 3 = 7입니다.
 */

function maxProfitII(prices: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(maxProfitII([7,1,5,3,6,4])); // Expected: 7
console.log(maxProfitII([1,2,3,4,5])); // Expected: 4
console.log(maxProfitII([7,6,4,3,1])); // Expected: 0