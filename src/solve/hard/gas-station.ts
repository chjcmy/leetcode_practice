/**
 * 134. Gas Station (Medium)
 * 
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
 * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
 * If there exists a solution, it is guaranteed to be unique.
 * 
 * Example:
 * Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 * Output: 3
 * Explanation:
 * Start at station 3 (index 3) and fill up with 4 units of gas. Your tank = 0 + 4 = 4
 * Travel to station 4. Your tank = 4 - 1 + 5 = 8
 * Travel to station 0. Your tank = 8 - 2 + 1 = 7
 * Travel to station 1. Your tank = 7 - 3 + 2 = 6
 * Travel to station 2. Your tank = 6 - 4 + 3 = 5
 * Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
 * Therefore, return 3 as the starting index.
 */

/**
 * 134. 주유소 (Medium)
 *
 * 원형 경로를 따라 n개의 주유소가 있으며, i번째 주유소의 가스 양은 gas[i]입니다.
 * 당신은 무제한 가스 탱크가 있는 자동차를 가지고 있으며, i번째 주유소에서 다음 (i + 1)번째 주유소로 이동하는 데 cost[i]의 가스가 필요합니다. 당신은 주유소 중 한 곳에서 빈 탱크로 여행을 시작합니다.
 * 두 개의 정수 배열 gas와 cost가 주어지면, 시계 방향으로 한 바퀴 돌 수 있는 경우 시작 주유소의 인덱스를 반환하고, 그렇지 않으면 -1을 반환합니다.
 * 해가 존재하면 고유함이 보장됩니다.
 *
 * 예시:
 * 입력: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 * 출력: 3
 * 설명:
 * 3번 주유소(인덱스 3)에서 시작하여 4단위의 가스를 채웁니다. 탱크 = 0 + 4 = 4
 * 4번 주유소로 이동합니다. 탱크 = 4 - 1 + 5 = 8
 * 0번 주유소로 이동합니다. 탱크 = 8 - 2 + 1 = 7
 * 1번 주유소로 이동합니다. 탱크 = 7 - 3 + 2 = 6
 * 2번 주유소로 이동합니다. 탱크 = 6 - 4 + 3 = 5
 * 3번 주유소로 이동합니다. 비용은 5입니다. 가스는 3번 주유소로 돌아갈 만큼만 충분합니다.
 * 따라서 시작 인덱스로 3을 반환합니다.
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
    // 여기에 구현하세요
    return -1;
}

// Test cases
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // Expected: 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // Expected: -1