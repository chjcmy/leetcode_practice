/*
 * 프로그래머스 - 제일 작은 수 제거하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12935
 * Level 1
 */

/*
  문제 설명:
  정수를 저장한 배열 arr에서 가장 작은 수를 제거한 배열을 return하는 함수, solution을 완성해주세요.
  단, return하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 return하세요.

  제한 조건:
  - arr은 길이 1 이상인 배열입니다.
  - 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
*/

function solution(arr: number[]): number[] {
    return arr.length === 1 ? [-1] : arr.filter(num => num !== Math.min(...arr));
}

// 예제 테스트
console.log(`예제 1: ${solution([4,3,2,1])} `); // [4,3,2]
console.log(`예제 2: ${solution([10])} `); // [-1]
