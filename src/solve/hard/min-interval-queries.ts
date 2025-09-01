/**
 * 1851. Minimum Interval to Include Each Query (Hard)
 * 
 * You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1.
 * You are also given an integer array queries. The answer to the jth query is the size of the smallest interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1.
 * Return an array containing the answers to the queries.
 * 
 * Example:
 * Input: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
 * Output: [3,3,1,4]
 * Explanation: The queries are processed as follows:
 * - Query = 2: The interval [2,4] is the smallest interval containing 2. The answer is 4 - 2 + 1 = 3.
 * - Query = 3: The interval [2,4] is the smallest interval containing 3. The answer is 4 - 2 + 1 = 3.
 * - Query = 4: The interval [4,4] is the smallest interval containing 4. The answer is 4 - 4 + 1 = 1.
 * - Query = 5: The interval [3,6] is the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.
 */

/**
 * 1851. 각 쿼리를 포함하는 최소 간격 (Hard)
 *
 * i번째 간격이 lefti에서 시작하여 righti(포함)에서 끝나는 것을 설명하는 2D 정수 배열 intervals가 주어집니다. 간격의 크기는 포함하는 정수의 수 또는 공식적으로 righti - lefti + 1로 정의됩니다.
 * 또한 정수 배열 queries가 주어집니다. j번째 쿼리에 대한 답은 lefti <= queries[j] <= righti인 가장 작은 간격 i의 크기입니다. 이러한 간격이 없으면 답은 -1입니다.
 * 쿼리에 대한 답을 포함하는 배열을 반환합니다.
 *
 * 예시:
 * 입력: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
 * 출력: [3,3,1,4]
 * 설명: 쿼리는 다음과 같이 처리됩니다:
 * - 쿼리 = 2: 간격 [2,4]는 2를 포함하는 가장 작은 간격입니다. 답은 4 - 2 + 1 = 3입니다.
 * - 쿼리 = 3: 간격 [2,4]는 3을 포함하는 가장 작은 간격입니다. 답은 4 - 2 + 1 = 3입니다.
 * - 쿼리 = 4: 간격 [4,4]는 4를 포함하는 가장 작은 간격입니다. 답은 4 - 4 + 1 = 1입니다.
 * - 쿼리 = 5: 간격 [3,6]은 5를 포함하는 가장 작은 간격입니다. 답은 6 - 3 + 1 = 4입니다.
 */

function minInterval(intervals: number[][], queries: number[]): number[] {
    // 여기에 구현하세요
    return [];
}

// Test cases
console.log(minInterval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5])); // Expected: [3,3,1,4]
console.log(minInterval([[2,3],[2,5],[1,8],[20,25]], [2,19,5,22])); // Expected: [2,-1,4,6]