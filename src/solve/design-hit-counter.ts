/**
 * 362. Design Hit Counter (Medium)
 * 
 * Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds).
 * Your system should accept a timestamp parameter (in seconds granularity), and you may assume that calls are being made to the system in chronological order (i.e., timestamp is monotonically increasing). Several hits may arrive roughly at the same time.
 * Implement the HitCounter class:
 * - HitCounter() Initializes the object of the hit counter system.
 * - void hit(int timestamp) Records a hit that happened at timestamp (in seconds). Several hits may happen at the same timestamp.
 * - int getHits(int timestamp) Returns the number of hits in the past 5 minutes from timestamp (i.e., from timestamp - 300 + 1 to timestamp).
 * 
 * Example:
 * Input: ["HitCounter", "hit", "hit", "hit", "getHits", "hit", "getHits", "getHits"]
 *        [[], [1], [2], [3], [4], [300], [300], [301]]
 * Output: [null, null, null, null, 3, null, 4, 3]
 */

/**
 * 362. 히트 카운터 디자인 (Medium)
 *
 * 지난 5분(즉, 지난 300초) 동안 수신된 히트 수를 계산하는 히트 카운터를 디자인합니다.
 * 시스템은 타임스탬프 매개변수(초 단위)를 허용해야 하며, 시스템에 대한 호출이 시간순으로(즉, 타임스탬프가 단조롭게 증가함) 이루어진다고 가정할 수 있습니다. 여러 히트가 거의 동시에 도착할 수 있습니다.
 * HitCounter 클래스를 구현합니다:
 * - HitCounter() 히트 카운터 시스템의 객체를 초기화합니다.
 * - void hit(int timestamp) 타임스탬프(초)에 발생한 히트를 기록합니다. 동일한 타임스탬프에 여러 히트가 발생할 수 있습니다.
 * - int getHits(int timestamp) 타임스탬프에서 지난 5분 동안의 히트 수를 반환합니다(즉, 타임스탬프 - 300 + 1부터 타임스탬프까지).
 *
 * 예시:
 * 입력: ["HitCounter", "hit", "hit", "hit", "getHits", "hit", "getHits", "getHits"]
 *        [[], [1], [2], [3], [4], [300], [300], [301]]
 * 출력: [null, null, null, null, 3, null, 4, 3]
 */

class HitCounter {
    constructor() {
        // 여기에 구현하세요
    }

    hit(timestamp: number): void {
        // 여기에 구현하세요
    }

    getHits(timestamp: number): number {
        // 여기에 구현하세요
        return 0;
    }
}

// Test cases
const hitCounter = new HitCounter();
hitCounter.hit(1);
hitCounter.hit(2);
hitCounter.hit(3);
console.log(hitCounter.getHits(4)); // Expected: 3
hitCounter.hit(300);
console.log(hitCounter.getHits(300)); // Expected: 4
console.log(hitCounter.getHits(301)); // Expected: 3