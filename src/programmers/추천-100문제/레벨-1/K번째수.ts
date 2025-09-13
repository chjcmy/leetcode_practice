/*
 * 프로그래머스 - K번째 수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42748
 * Level 1
 */

/*
  문제 설명:
  배열 array와 [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
  commands의 각 원소 [i, j, k]에 대해 다음을 수행하고, 그 결과를 배열에 담아 반환하도록 solution 함수를 작성해주세요.

  1. array의 i번째 숫자부터 j번째 숫자까지 자릅니다. (여기서 i와 j는 1-based 인덱스입니다.)
  2. 잘라낸 배열을 정렬합니다.
  3. 정렬된 배열에서 k번째에 있는 숫자를 찾습니다.

  제한사항:
  - array의 길이는 1 이상 100 이하입니다.
  - array의 각 원소는 1 이상 100 이하입니다.
  - commands의 길이는 1 이상 50 이하입니다.
  - commands의 각 원소는 길이가 3입니다.
*/

function solution(array: number[], commands: number[][]): number[] {
  let answer: number[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])} `); // [5, 6, 3]
