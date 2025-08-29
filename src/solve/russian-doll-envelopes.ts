/**
 * 354. Russian Doll Envelopes (Hard)
 * 
 * You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.
 * One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.
 * Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).
 * Note: You cannot rotate an envelope.
 * 
 * Example:
 * Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
 * Output: 3
 * Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
 * 
 * Example:
 * Input: envelopes = [[1,1],[1,1],[1,1]]
 * Output: 1
 */

/**
 * 354. 러시아 인형 봉투 (Hard)
 *
 * 봉투의 너비와 높이를 나타내는 envelopes[i] = [wi, hi]인 2D 정수 배열 envelopes가 주어집니다.
 * 한 봉투가 다른 봉투 안에 들어갈 수 있는 경우는 한 봉투의 너비와 높이가 모두 다른 봉투의 너비와 높이보다 큰 경우뿐입니다.
 * 러시아 인형처럼 넣을 수 있는 최대 봉투 수를 반환합니다(즉, 하나를 다른 하나 안에 넣음).
 * 참고: 봉투를 회전할 수 없습니다.
 *
 * 예시:
 * 입력: envelopes = [[5,4],[6,4],[6,7],[2,3]]
 * 출력: 3
 * 설명: 러시아 인형처럼 넣을 수 있는 최대 봉투 수는 3개입니다 ([2,3] => [5,4] => [6,7]).
 *
 * 예시:
 * 입력: envelopes = [[1,1],[1,1],[1,1]]
 * 출력: 1
 */

function maxEnvelopes(envelopes: number[][]): number {
    // 여기에 구현하세요
    return 0;
}

// Test cases
console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]])); // Expected: 3
console.log(maxEnvelopes([[1,1],[1,1],[1,1]])); // Expected: 1