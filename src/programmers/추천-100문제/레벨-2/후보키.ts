/*
 * 프로그래머스 - 후보키
 * https://school.programmers.co.kr/learn/courses/30/lessons/42890
 * Level 2
 */

/*
  문제 설명:
  주어진 관계형 데이터베이스 테이블에서 후보키의 개수를 찾는 문제입니다.

  후보키는 다음 두 가지 조건을 만족해야 합니다.
  1. 유일성 (Uniqueness): 특정 튜플(행)을 다른 튜플과 명확하게 식별할 수 있는 속성(컬럼) 또는 속성들의 집합이어야 합니다.
  2. 최소성 (Minimality): 유일성을 만족하는 속성들의 집합에서 어떤 속성이라도 제거하면 유일성이 깨지는, 즉 더 이상 유일하게 식별할 수 없게 되는 최소한의 집합이어야 합니다.

  주어진 테이블의 모든 컬럼 조합 중에서 위 두 가지 조건을 모두 만족하는 후보키의 총 개수를 return 하는 solution 함수를 작성해주세요.

  제한사항:
  - relation은 1 이상 8 이하의 길이를 가집니다.
  - relation의 각 튜플은 1 이상 8 이하의 길이를 가집니다.
  - relation의 모든 튜플은 길이가 같습니다.
  - relation의 모든 컬럼은 문자열입니다.
  - relation의 모든 컬럼 값은 1 이상 20 이하의 길이를 가집니다.
*/

function solution(relation: string[][]): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]])} `); // 2
