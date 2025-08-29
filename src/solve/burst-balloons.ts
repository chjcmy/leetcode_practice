/**
 * 312. Burst Balloons (Hard)
 * 
 * You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.
 * If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.
 * Return the maximum coins you can collect by bursting the balloons wisely.
 * 
 * Example:
 * Input: nums = [3,1,5,8]
 * Output: 167
 * Explanation:
 * nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
 * coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
 */

/**
 * 312. 풍선 터뜨리기 (Hard)
 *
 * 0에서 n-1까지 인덱싱된 n개의 풍선이 주어집니다. 각 풍선에는 배열 nums로 표시된 숫자가 그려져 있습니다. 모든 풍선을 터뜨려야 합니다.
 * i번째 풍선을 터뜨리면 nums[i - 1] * nums[i] * nums[i + 1] 코인을 얻습니다. i - 1 또는 i + 1이 배열의 범위를 벗어나면 1이 그려진 풍선이 있는 것처럼 처리합니다.
 * 풍선을 현명하게 터뜨려 수집할 수 있는 최대 코인을 반환합니다.
 *
 * 예시:
 * 입력: nums = [3,1,5,8]
 * 출력: 167
 * 설명:
 * nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
 * 코인 =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
 */

function maxCoins(nums: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(maxCoins([3,1,5,8])); // Expected: 167
console.log(maxCoins([1,5])); // Expected: 10