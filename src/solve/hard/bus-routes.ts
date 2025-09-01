/**
 * 815. Bus Routes (Hard)
 * 
 * You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.
 * For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
 * You will start at the bus stop source and want to go to the bus stop target. You can travel between bus stops by buses only.
 * Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.
 * 
 * Example:
 * Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
 * Output: 2
 * Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
 * 
 * Example:
 * Input: routes = [[7,12],[4,5,15],[6],[15,19,26],[3]], source = 15, target = 12
 * Output: -1
 */

/**
 * 815. 버스 노선 (Hard)
 *
 * i번째 버스가 영원히 반복하는 버스 노선인 routes[i]를 나타내는 배열 routes가 주어집니다.
 * 예를 들어, routes[0] = [1, 5, 7]이면 0번째 버스는 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... 순서로 영원히 이동합니다.
 * 당신은 버스 정류장 source에서 시작하여 버스 정류장 target으로 가고 싶습니다. 버스로만 버스 정류장 사이를 이동할 수 있습니다.
 * source에서 target으로 이동하는 데 타야 하는 최소 버스 수를 반환합니다. 불가능하면 -1을 반환합니다.
 *
 * 예시:
 * 입력: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
 * 출력: 2
 * 설명: 가장 좋은 전략은 첫 번째 버스를 타고 7번 버스 정류장으로 간 다음 두 번째 버스를 타고 6번 버스 정류장으로 가는 것입니다.
 *
 * 예시:
 * 입력: routes = [[7,12],[4,5,15],[6],[15,19,26],[3]], source = 15, target = 12
 * 출력: -1
 */

function numBusesToDestination(routes: number[][], source: number, target: number): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(numBusesToDestination([[1,2,7],[3,6,7]], 1, 6)); // Expected: 2
console.log(numBusesToDestination([[7,12],[4,5,15],[6],[15,19,26],[3]], 15, 12)); // Expected: -1