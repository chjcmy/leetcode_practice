/**
 * 739. Daily Temperatures (Medium)
 * 
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * 
 * Example:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 */

/**
 * 739. 일일 온도 (Medium)
 *
 * 일일 온도를 나타내는 정수 배열 temperatures가 주어지면, i번째 날 이후에 더 따뜻한 온도를 얻기 위해 기다려야 하는 날짜 수를 나타내는 배열 answer를 반환합니다. 이것이 불가능한 미래 날짜가 없으면 대신 answer[i] == 0을 유지합니다.
 *
 * 예시:
 * 입력: temperatures = [73,74,75,71,69,72,76,73]
 * 출력: [1,1,4,2,1,1,0,0]
 */

function dailyTemperatures(temperatures: number[]): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // Expected: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // Expected: [1,1,1,0]