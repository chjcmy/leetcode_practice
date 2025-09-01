/**
 * 403. Frog Jump (Hard)
 * 
 * A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.
 * Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.
 * If the frog's last jump was k units, then its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.
 * 
 * Example:
 * Input: stones = [0,1,3,5,6,8,12,17]
 * Output: true
 * Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.
 * 
 * Example:
 * Input: stones = [0,1,2,3,4,8,9,11]
 * Output: false
 * Explanation: There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.
 */

/**
 * 403. 개구리 점프 (Hard)
 *
 * 개구리가 강을 건너고 있습니다. 강은 여러 단위로 나뉘어 있으며 각 단위에는 돌이 있을 수도 있고 없을 수도 있습니다. 개구리는 돌 위로 점프할 수 있지만 물 속으로 점프해서는 안 됩니다.
 * 정렬된 오름차순으로 돌의 위치 목록(단위)이 주어지면 개구리가 마지막 돌에 착지하여 강을 건널 수 있는지 확인합니다. 처음에 개구리는 첫 번째 돌 위에 있으며 첫 번째 점프는 1단위여야 한다고 가정합니다.
 * 개구리의 마지막 점프가 k 단위였다면 다음 점프는 k - 1, k 또는 k + 1 단위여야 합니다. 개구리는 앞으로만 점프할 수 있습니다.
 *
 * 예시:
 * 입력: stones = [0,1,3,5,6,8,12,17]
 * 출력: true
 * 설명: 개구리는 2번째 돌까지 1단위, 3번째 돌까지 2단위, 4번째 돌까지 2단위, 6번째 돌까지 3단위, 7번째 돌까지 4단위, 8번째 돌까지 5단위 점프하여 마지막 돌까지 점프할 수 있습니다.
 *
 * 예시:
 * 입력: stones = [0,1,2,3,4,8,9,11]
 * 출력: false
 * 설명: 5번째 돌과 6번째 돌 사이의 간격이 너무 커서 마지막 돌까지 점프할 방법이 없습니다.
 */

function canCross(stones: number[]): boolean {
    // 여기에 구현하세요
    return false;
}

// Test cases
console.log(canCross([0,1,3,5,6,8,12,17])); // Expected: true
console.log(canCross([0,1,2,3,4,8,9,11])); // Expected: false