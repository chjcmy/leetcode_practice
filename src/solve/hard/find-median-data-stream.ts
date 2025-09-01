/**
 * 295. Find Median from Data Stream (Hard)
 * 
 * The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
 * Implement the MedianFinder class:
 * - MedianFinder() initializes the MedianFinder object.
 * - void addNum(int num) adds the integer num from the data stream to the data structure.
 * - double findMedian() returns the median of all elements so far. Answers within 10^-5 of the actual answer will be accepted.
 * 
 * Example:
 * Input: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
 *        [[], [1], [2], [], [3], []]
 * Output: [null, null, null, 1.5, null, 2.0]
 */

/**
 * 295. 데이터 스트림에서 중앙값 찾기 (Hard)
 *
 * 중앙값은 정렬된 정수 목록의 중간 값입니다. 목록의 크기가 짝수이면 중간 값이 없으며 중앙값은 두 중간 값의 평균입니다.
 * MedianFinder 클래스를 구현합니다:
 * - MedianFinder() MedianFinder 객체를 초기화합니다.
 * - void addNum(int num) 데이터 스트림의 정수 num을 데이터 구조에 추가합니다.
 * - double findMedian() 지금까지의 모든 요소의 중앙값을 반환합니다. 실제 답과 10^-5 이내의 답은 허용됩니다.
 *
 * 예시:
 * 입력: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
 *        [[], [1], [2], [], [3], []]
 * 출력: [null, null, null, 1.5, null, 2.0]
 */

class MedianFinder {
    constructor() {
        // 여기에 구현하세요
    }

    addNum(num: number): void {
        // 여기에 구현하세요
    }

    findMedian(): number {
        // 여기에 구현하세요
        return 0;
    }
}

// Test cases
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Expected: 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Expected: 2.0