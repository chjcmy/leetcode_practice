/**
 * 1046. Last Stone Weight (Easy)
 * 
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
 * - If x == y, both stones are destroyed, and
 * - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 * At the end of the game, there is at most one stone left.
 * Return the weight of the last remaining stone. If there are no stones left, return 0.
 * 
 * Example:
 * Input: stones = [2,7,4,1,8,1]
 * Output: 1
 * Explanation: 
 * We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
 * we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
 * we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
 * we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
 */

/**
 * 1046. 마지막 돌의 무게 (Easy)
 *
 * stones[i]가 i번째 돌의 무게인 정수 배열 stones가 주어집니다.
 * 우리는 돌로 게임을 하고 있습니다. 매 턴마다 가장 무거운 두 돌을 골라 함께 부딪칩니다. 가장 무거운 두 돌의 무게가 x <= y인 x와 y라고 가정합니다. 이 부딪힘의 결과는 다음과 같습니다:
 * - x == y이면 두 돌 모두 파괴됩니다.
 * - x != y이면 무게 x의 돌은 파괴되고 무게 y의 돌은 새로운 무게 y - x를 갖습니다.
 * 게임이 끝나면 최대 하나의 돌이 남습니다.
 * 마지막으로 남은 돌의 무게를 반환합니다. 남은 돌이 없으면 0을 반환합니다.
 *
 * 예시:
 * 입력: stones = [2,7,4,1,8,1]
 * 출력: 1
 * 설명:
 * 7과 8을 결합하여 1을 얻으므로 배열은 [2,4,1,1,1]로 변환됩니다.
 * 그런 다음 2와 4를 결합하여 2를 얻으므로 배열은 [2,1,1,1]로 변환됩니다.
 * 그런 다음 2와 1을 결합하여 1을 얻으므로 배열은 [1,1,1]로 변환됩니다.
 * 그런 다음 1과 1을 결합하여 0을 얻으므로 배열은 [1]로 변환되고 그것이 마지막 돌의 값입니다.
 */

function lastStoneWeight(stones: number[]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(lastStoneWeight([2,7,4,1,8,1])); // Expected: 1
console.log(lastStoneWeight([1])); // Expected: 1