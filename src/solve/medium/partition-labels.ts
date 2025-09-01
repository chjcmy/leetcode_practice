/**
 * 763. Partition Labels (Medium)
 * 
 * You are given a string s. We want to partition this string into as many parts as possible so that each letter appears in at most one part.
 * Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
 * Return a list of integers representing the size of these parts.
 * 
 * Example:
 * Input: s = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
 */

/**
 * 763. 파티션 레이블 (Medium)
 *
 * 문자열 s가 주어집니다. 각 문자가 최대 한 부분에만 나타나도록 이 문자열을 가능한 한 많은 부분으로 분할하려고 합니다.
 * 분할은 모든 부분을 순서대로 연결한 후 결과 문자열이 s가 되도록 수행됩니다.
 * 이러한 부분의 크기를 나타내는 정수 목록을 반환합니다.
 *
 * 예시:
 * 입력: s = "ababcbacadefegdehijhklij"
 * 출력: [9,7,8]
 * 설명:
 * 파티션은 "ababcbaca", "defegde", "hijhklij"입니다.
 * 이것은 각 문자가 최대 한 부분에만 나타나도록 하는 파티션입니다.
 * "ababcbacadefegde", "hijhklij"와 같은 파티션은 s를 더 적은 부분으로 분할하므로 잘못되었습니다.
 */

function partitionLabels(s: string): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(partitionLabels("ababcbacadefegdehijhklij")); // Expected: [9,7,8]
console.log(partitionLabels("eccbbbbdec")); // Expected: [10]