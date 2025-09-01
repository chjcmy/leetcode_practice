/**
 * 981. Time Based Key-Value Store (Medium)
 * 
 * Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.
 * 
 * Implement the TimeMap class:
 * - TimeMap() Initializes the object of the data structure.
 * - void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
 * - String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
 * 
 * Example:
 * Input: ["TimeMap", "set", "get", "get", "set", "get", "get"]
 *        [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
 * Output: [null, null, "bar", "bar", null, "bar2", "bar2"]
 */

/**
 * 981. 시간 기반 키-값 저장소 (Medium)
 *
 * 동일한 키에 대해 다른 타임스탬프로 여러 값을 저장하고 특정 타임스탬프에서 키의 값을 검색할 수 있는 시간 기반 키-값 데이터 구조를 설계합니다.
 *
 * TimeMap 클래스를 구현합니다:
 * - TimeMap() 데이터 구조의 객체를 초기화합니다.
 * - void set(String key, String value, int timestamp) 주어진 시간 타임스탬프에 값 value와 함께 키 key를 저장합니다.
 * - String get(String key, int timestamp) 이전에 timestamp_prev <= timestamp로 호출된 값을 반환합니다. 이러한 값이 여러 개 있는 경우 가장 큰 timestamp_prev와 연관된 값을 반환합니다. 값이 없으면 ""를 반환합니다.
 *
 * 예시:
 * 입력: ["TimeMap", "set", "get", "get", "set", "get", "get"]
 *        [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
 * 출력: [null, null, "bar", "bar", null, "bar2", "bar2"]
 */

class TimeMap {
    constructor() {
        // 여기에 구현하세요
    }

    set(key: string, value: string, timestamp: number): void {
        // 여기에 구현하세요
    }

    get(key: string, timestamp: number): string {
        // 여기에 구현하세요
        return "";
    }
}

// Test cases
const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1)); // Expected: "bar"
console.log(timeMap.get("foo", 3)); // Expected: "bar"