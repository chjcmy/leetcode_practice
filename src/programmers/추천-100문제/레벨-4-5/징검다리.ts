/*
 * 프로그래머스 - 징검다리
 * https://school.programmers.co.kr/learn/courses/30/lessons/43236
 * Level 5
 */

/*
  문제 설명:
  출발지점부터 도착지점까지의 거리가 distance이고, 
  바위들이 놓여 있는 위치를 담은 배열 rocks가 매개변수로 주어질 때, 
  바위를 n개 제거한 뒤 각 지점 사이의 거리의 최솟값 중에 가장 큰 값을 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - 출발지점부터 도착지점까지의 거리는 1 이상 1,000,000,000 이하입니다.
  - 바위는 1개 이상 50,000개 이하가 놓여있습니다.
  - n은 1 이상 바위의 개수 이하입니다.
*/

function solution(distance: number, rocks: number[], n: number): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
const distance = 25;
const rocks = [2, 14, 11, 21, 17];
const n = 2;
console.log(`예제 1: ${solution(distance, rocks, n)}`); // 4
