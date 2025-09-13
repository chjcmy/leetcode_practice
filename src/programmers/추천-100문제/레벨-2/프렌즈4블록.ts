/*
 * 프로그래머스 - 프렌즈4블록
 * https://school.programmers.co.kr/learn/courses/30/lessons/17679
 * Level 2
 */

/*
  문제 설명:
  블록 게임에서 같은 모양의 카카오프렌즈 블록 4개가 2x2 형태로 모이면 사라지면서 점수를 얻는 게임입니다.

  게임 규칙:
  1. 블록 제거: 보드에서 같은 모양의 블록 4개가 2x2 형태로 붙어있을 경우 해당 블록들이 사라집니다.
  2. 동시 제거: 같은 블록이 여러 2x2 형태에 포함될 수 있으며, 지워지는 조건에 만족하는 2x2 모양이 여러 개 있다면 한꺼번에 지워집니다.
  3. 블록 낙하: 블록이 지워진 후, 위에 있는 블록들이 아래로 떨어져 빈 공간을 채웁니다.
  4. 반복: 빈 공간을 채운 후에 다시 2x2 형태로 같은 모양의 블록이 모이면, 블록 제거 및 낙하 과정이 반복됩니다. 더 이상 지워질 블록이 없을 때까지 이 과정이 계속됩니다.

  입력으로 주어진 판 정보(m, n, board)를 가지고 최종적으로 지워지는 블록의 총 개수를 return 하도록 solution 함수를 작성해주세요.

  제한 사항:
  - m: 판의 높이 (2 이상 30 이하의 정수)
  - n: 판의 폭 (2 이상 30 이하의 정수)
  - board: n 길이의 문자열 m개로 이루어진 배열로, 초기 판의 배치 정보를 나타냅니다. 블록은 대문자 A에서 Z까지의 문자로 표현됩니다.
*/

function solution(m: number, n: number, board: string[]): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])} `); // 14
console.log(`예제 2: ${solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TRRRAA", "TRRRAA"])} `); // 15
