/**
 * 121. Best Time to Buy and Sell Stock (Easy)
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Example 1:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 * 
 * Example 2:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 */

/**
 * 121. 주식을 사고팔기 가장 좋은 시점 (Easy)
 *
 * `prices[i]`가 i번째 날의 특정 주식 가격인 배열 `prices`가 주어집니다.
 * 하나의 주식을 살 날을 선택하고 미래의 다른 날에 해당 주식을 팔아 이익을 극대화하고 싶습니다.
 * 이 거래에서 얻을 수 있는 최대 이익을 반환하세요. 이익을 얻을 수 없으면 0을 반환하세요.
 *
 * 예시 1:
 * 입력: prices = [7,1,5,3,6,4]
 * 출력: 5
 * 설명: 2일차(가격 = 1)에 사서 5일차(가격 = 6)에 팔면 이익 = 6-1 = 5입니다.
 * 2일차에 사고 1일차에 파는 것은 허용되지 않습니다. 왜냐하면 사기 전에 팔아야 하기 때문입니다.
 *
 * 예시 2:
 * 입력: prices = [7,6,4,3,1]
 * 출력: 0
 * 설명: 이 경우 거래가 이루어지지 않으며 최대 이익 = 0입니다.
 */
function maxProfit(prices: number[]): number {

    let minPrice = Infinity;

    let maxProfit = 0;

    // 여기에 코드를 작성하세요
    for (const price of prices) {
        // 먼저 값을 받아 max_profit이 0이거나 max_profit보다 크면 바꾼다
        if (price < minPrice) {
            minPrice = price;
        } else {
            if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
    }

    return maxProfit;
}

// 테스트 케이스
const testCases = [
    [7, 1, 5, 3, 6, 4],
    [7, 6, 4, 3, 1],
    [1, 2, 3, 4, 5]
];

testCases.forEach(test => {
    const result = maxProfit(test);
    console.log(result);
});

