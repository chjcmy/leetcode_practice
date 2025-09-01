/**
 * 506. Relative Ranks (Easy)
 * 
 * You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
 * The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
 * - The 1st place athlete's rank is "Gold Medal".
 * - The 2nd place athlete's rank is "Silver Medal".
 * - The 3rd place athlete's rank is "Bronze Medal".
 * - For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
 * Return an array answer of size n where answer[i] is the rank of the ith athlete.
 * 
 * Example:
 * Input: score = [5,4,3,2,1]
 * Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
 */

/**
 * 506. 상대 순위 (Easy)
 *
 * 크기가 n인 정수 배열 score가 주어지며, 여기서 score[i]는 대회에서 i번째 선수의 점수입니다. 모든 점수는 고유함이 보장됩니다.
 * 선수들은 점수를 기준으로 순위가 매겨지며, 1위 선수는 가장 높은 점수를, 2위 선수는 두 번째로 높은 점수를 받는 식입니다. 각 선수의 순위는 다음과 같이 결정됩니다:
 * - 1위 선수의 순위는 "Gold Medal"입니다.
 * - 2위 선수의 순위는 "Silver Medal"입니다.
 * - 3위 선수의 순위는 "Bronze Medal"입니다.
 * - 4위부터 n위까지의 선수의 순위는 해당 순위 번호입니다(즉, x위 선수의 순위는 "x"임).
 * answer[i]가 i번째 선수의 순위인 크기 n의 배열 answer를 반환합니다.
 *
 * 예시:
 * 입력: score = [5,4,3,2,1]
 * 출력: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
 */

function findRelativeRanks(score: number[]): string[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(findRelativeRanks([5,4,3,2,1])); // Expected: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10,3,8,9,4])); // Expected: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]