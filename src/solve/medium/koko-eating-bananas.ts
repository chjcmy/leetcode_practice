/**
 * 875. Koko Eating Bananas (Medium)
 * 
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards come back.
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 * 
 * Example:
 * Input: piles = [3,6,7,11], h = 8
 * Output: 4
 */

/**
 * 875. 코코는 바나나를 좋아해 (Medium)
 *
 * 코코는 바나나를 먹는 것을 좋아합니다. n개의 바나나 더미가 있으며, i번째 더미에는 piles[i]개의 바나나가 있습니다. 경비원들은 갔다가 h시간 후에 돌아올 것입니다.
 * 코코는 시간당 바나나 먹는 속도 k를 결정할 수 있습니다. 매시간 그녀는 바나나 더미를 선택하고 그 더미에서 k개의 바나나를 먹습니다. 더미에 k개 미만의 바나나가 있으면 대신 모두 먹고 이 시간 동안 더 이상 바나나를 먹지 않습니다.
 * 코코는 천천히 먹는 것을 좋아하지만 경비원들이 돌아오기 전에 모든 바나나를 다 먹고 싶어합니다.
 * h시간 안에 모든 바나나를 먹을 수 있는 최소 정수 k를 반환합니다.
 *
 * 예시:
 * 입력: piles = [3,6,7,11], h = 8
 * 출력: 4
 */

function minEatingSpeed(piles: number[], h: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(minEatingSpeed([3,6,7,11], 8)); // Expected: 4
console.log(minEatingSpeed([30,11,23,4,20], 5)); // Expected: 30