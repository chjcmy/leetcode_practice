/**
 * 1584. Min Cost to Connect All Points (Medium)
 * 
 * You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].
 * The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.
 * Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.
 * 
 * Example:
 * Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
 * Output: 20
 */

/**
 * 1584. 모든 점을 연결하는 최소 비용 (Medium)
 *
 * 2D 평면의 일부 점의 정수 좌표를 나타내는 배열 points가 주어지며, 여기서 points[i] = [xi, yi]입니다.
 * 두 점 [xi, yi]와 [xj, yj]를 연결하는 비용은 맨해튼 거리입니다: |xi - xj| + |yi - yj|, 여기서 |val|은 val의 절댓값을 나타냅니다.
 * 모든 점을 연결하는 데 드는 최소 비용을 반환합니다. 임의의 두 점 사이에 정확히 하나의 단순 경로가 있으면 모든 점이 연결됩니다.
 *
 * 예시:
 * 입력: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
 * 출력: 20
 */

function minCostConnectPoints(points: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])); // Expected: 20
console.log(minCostConnectPoints([[3,12],[-2,5],[-4,1]])); // Expected: 18