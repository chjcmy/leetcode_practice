/**
 * 2013. Detect Squares (Medium)
 * 
 * You are given a stream of points on the X-Y plane. Design an algorithm that:
 * - Adds new points from the stream into a data structure. Duplicate points are allowed and should be treated as different points.
 * - Given a query point, counts the number of ways to choose three points from the data structure such that the three points and the query point form an axis-aligned square with positive area.
 * 
 * Example:
 * Input: ["DetectSquares", "add", "add", "add", "count", "add", "count"]
 *        [[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]]]
 * Output: [null, null, null, null, 1, null, 0]
 */

/**
 * 2013. 사각형 감지 (Medium)
 *
 * X-Y 평면의 점 스트림이 주어집니다. 다음을 수행하는 알고리즘을 설계합니다:
 * - 스트림의 새 점을 데이터 구조에 추가합니다. 중복 점은 허용되며 다른 점으로 처리해야 합니다.
 * - 쿼리 점이 주어지면, 데이터 구조에서 세 점을 선택하여 세 점과 쿼리 점이 양의 면적을 가진 축에 정렬된 사각형을 형성하는 방법의 수를 계산합니다.
 *
 * 예시:
 * 입력: ["DetectSquares", "add", "add", "add", "count", "add", "count"]
 *        [[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]]]
 * 출력: [null, null, null, null, 1, null, 0]
 */

class DetectSquares {
    constructor() {
        // 여기에 구현하세요
    }

    add(point: number[]): void {
        // 여기에 구현하세요
    }

    count(point: number[]): number {
        // 여기에 구현하세요
        return 0;
    }
}

// Test cases
const detectSquares = new DetectSquares();
detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);
console.log(detectSquares.count([11, 10])); // Expected: 1