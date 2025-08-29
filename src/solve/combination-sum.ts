/**
 * 39. Combination Sum (Medium)
 * 
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.
 * The same number may be chosen from candidates an unlimited number of times.
 * 
 * Example:
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 * Explanation:
 * 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
 * 7 is a candidate, and 7 = 7.
 */

/**
 * 39. 조합 합계 (Medium)
 *
 * 고유한 정수 배열 candidates와 목표 정수 target이 주어지면, 선택된 숫자의 합이 target이 되는 모든 고유한 조합 목록을 반환합니다.
 * 동일한 숫자는 candidates에서 무제한으로 선택할 수 있습니다.
 *
 * 예시:
 * 입력: candidates = [2,3,6,7], target = 7
 * 출력: [[2,2,3],[7]]
 * 설명:
 * 2와 3은 후보이며, 2 + 2 + 3 = 7입니다. 2는 여러 번 사용할 수 있습니다.
 * 7은 후보이며, 7 = 7입니다.
 */

function combinationSum(candidates: number[], target: number): number[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(combinationSum([2,3,6,7], 7)); // Expected: [[2,2,3],[7]]
console.log(combinationSum([2,3,5], 8)); // Expected: [[2,2,2,2],[2,3,3],[3,5]]