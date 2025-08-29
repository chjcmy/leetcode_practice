/**
 * 278. First Bad Version (Easy)
 * 
 * You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
 * You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 * 
 * Example:
 * Input: n = 5, bad = 4
 * Output: 4
 */

/**
 * 278. 첫 번째 잘못된 버전 (Easy)
 *
 * 당신은 제품 관리자이며 현재 신제품 개발팀을 이끌고 있습니다. 불행히도 제품의 최신 버전이 품질 검사를 통과하지 못했습니다. 각 버전은 이전 버전을 기반으로 개발되므로 잘못된 버전 이후의 모든 버전도 잘못되었습니다.
 * n개의 버전 [1, 2, ..., n]이 있고 모든 다음 버전을 잘못되게 만드는 첫 번째 잘못된 버전을 찾고 싶다고 가정합니다.
 * 버전이 잘못되었는지 여부를 반환하는 API bool isBadVersion(version)이 제공됩니다. 첫 번째 잘못된 버전을 찾는 함수를 구현합니다. API 호출 횟수를 최소화해야 합니다.
 *
 * 예시:
 * 입력: n = 5, bad = 4
 * 출력: 4
 */

// The knows API is defined in the parent class Relation.
// isBadVersion(version: number): boolean {
//     // ...
// };

function firstBadVersion(n: number): number {
    // Mock isBadVersion function for testing
    const isBadVersion = (version: number): boolean => {
        return version >= 4; // Assume version 4 is the first bad version
    };
    
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(firstBadVersion(5)); // Expected: 4