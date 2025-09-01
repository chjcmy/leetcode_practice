/**
 * 973. K Closest Points to Origin (Medium)
 * 
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
 * The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)² + (y1 - y2)²).
 * You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
 * 
 * Example:
 * Input: points = [[1,3],[-2,2]], k = 1
 * Output: [[-2,2]]
 * Explanation:
 * The distance between (1, 3) and the origin is sqrt(10).
 * The distance between (-2, 2) and the origin is sqrt(8).
 * Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
 * We only want the closest k = 1 points, so the answer is just [[-2,2]].
 */

/**
 * 973. 원점에서 가장 가까운 K개 점 (Medium)
 *
 * X-Y 평면의 점을 나타내는 points[i] = [xi, yi]인 점 배열과 정수 k가 주어지면 원점(0, 0)에서 가장 가까운 k개의 점을 반환합니다.
 * X-Y 평면의 두 점 사이의 거리는 유클리드 거리입니다(즉, √(x1 - x2)² + (y1 - y2)²).
 * 답은 어떤 순서로든 반환할 수 있습니다. 답은 고유함이 보장됩니다(순서 제외).
 *
 * 예시:
 * 입력: points = [[1,3],[-2,2]], k = 1
 * 출력: [[-2,2]]
 * 설명:
 * (1, 3)과 원점 사이의 거리는 sqrt(10)입니다.
 * (-2, 2)와 원점 사이의 거리는 sqrt(8)입니다.
 * sqrt(8) < sqrt(10)이므로 (-2, 2)가 원점에 더 가깝습니다.
 * 가장 가까운 k = 1개의 점만 원하므로 답은 [[-2,2]]입니다.
 */

function kClosest(points: number[][], k: number): number[][] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(kClosest([[1,3],[-2,2]], 1)); // Expected: [[-2,2]]
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // Expected: [[3,3],[-2,4]]