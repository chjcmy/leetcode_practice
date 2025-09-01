/**
 * 146. LRU Cache (Medium)
 * 
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * Implement the LRUCache class with get(key) and put(key, value) methods.
 * 
 * Example:
 * Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 *        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * Output: [null, null, null, 1, null, -1, null, -1, 3, 4]
 */

/**
 * 146. LRU 캐시 (Medium)
 *
 * LRU(Least Recently Used) 캐시의 제약 조건을 따르는 데이터 구조를 설계합니다.
 * get(key) 및 put(key, value) 메서드를 사용하여 LRUCache 클래스를 구현합니다.
 *
 * 예시:
 * 입력: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 *        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 출력: [null, null, null, 1, null, -1, null, -1, 3, 4]
 */

class LRUCache {
    constructor(capacity: number) {
        // 여기에 구현하세요
    }

    get(key: number): number {
        // 여기에 구현하세요
        return -1;
    }

    put(key: number, value: number): void {
        // 여기에 구현하세요
    }
}

// Test cases
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1)); // Expected: 1
lRUCache.put(3, 3);
console.log(lRUCache.get(2)); // Expected: -1