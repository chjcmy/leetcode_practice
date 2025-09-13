/*
 * 프로그래머스 - 행렬의 덧셈
 * https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * Level 1
 */

/*
  문제 설명:
  행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
  2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 return 하는 함수, solution을 완성해주세요.

  제한 조건:
  - 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
*/

function solution(arr1: number[][], arr2: number[][]): number[][] {
  let answer: number[][] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
const arr1_1 = [[1,2],[2,3]];
const arr2_1 = [[3,4],[5,6]];
console.log(`예제 1: ${solution(arr1_1, arr2_1)} `); // [[4,6],[7,9]]

const arr1_2 = [[1],[2]];
const arr2_2 = [[3],[4]];
console.log(`예제 2: ${solution(arr1_2, arr2_2)} `); // [[4],[6]]
