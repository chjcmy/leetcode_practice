/**
 * 787. Cheapest Flights Within K Stops (Medium)
 * 
 * There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
 * You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
 * 
 * Example:
 * Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
 * Output: 700
 * Explanation: The graph is shown above.
 * The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
 * Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
 */

/**
 * 787. K 경유지 내 가장 저렴한 항공편 (Medium)
 *
 * 여러 항공편으로 연결된 n개의 도시가 있습니다. flights[i] = [fromi, toi, pricei]가 도시 fromi에서 도시 toi로 가는 항공편의 비용이 pricei임을 나타내는 배열 flights가 주어집니다.
 * 또한 세 개의 정수 src, dst, k가 주어지면 최대 k개의 경유지로 src에서 dst까지 가장 저렴한 가격을 반환합니다. 그러한 경로가 없으면 -1을 반환합니다.
 *
 * 예시:
 * 입력: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
 * 출력: 700
 * 설명: 그래프가 위에 나와 있습니다.
 * 0번 도시에서 3번 도시까지 최대 1개의 경유지가 있는 최적 경로는 빨간색으로 표시되어 있으며 비용은 100 + 600 = 700입니다.
 * [0,1,2,3] 도시를 통과하는 경로는 더 저렴하지만 2개의 경유지를 사용하므로 유효하지 않습니다.
 */

function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    // 여기에 구현하세요
    return -1;
}

// Test cases
console.log(findCheapestPrice(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1)); // Expected: 700
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1)); // Expected: 200