/**
 * Kth Largest Element in a Stream
 *
 * 문제: 스트림에서 k번째로 큰 요소를 찾는 클래스를 설계하세요.
 * 정렬된 순서에서 k번째로 큰 요소이며, k번째로 고유한 요소가 아님에 유의하세요.
 *
 * 클래스:
 * - KthLargest(k, nums): 객체를 정수 k와 숫자 스트림 nums로 초기화합니다.
 * - add(val): 스트림에 val을 추가하고 k번째로 큰 요소를 반환합니다.
 *
 * 예시:
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3);   // returns 4
 * kthLargest.add(5);   // returns 5
 * kthLargest.add(10);  // returns 5
 * kthLargest.add(9);   // returns 8
 * kthLargest.add(4);   // returns 8
 */

class KthLargest {
    private k: number;
    private nums: number[];

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums;
    }

    add(val: number): number {
        this.nums.push(val);
        this.nums.sort((a, b) => b - a);
        return this.nums[this.k - 1];
    }
}

// 테스트 케이스
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3));   // 예상 출력: 4
console.log(kthLargest.add(5));   // 예상 출력: 5
console.log(kthLargest.add(10));  // 예상 출력: 5
console.log(kthLargest.add(9));   // 예상 출력: 8
console.log(kthLargest.add(4));   // 예상 출력: 8

export { KthLargest };