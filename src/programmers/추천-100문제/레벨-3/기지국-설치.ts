/*
 * 프로그래머스 - 기지국 설치
 * https://school.programmers.co.kr/learn/courses/30/lessons/12979
 * Level 3
 */

/*
  문제 설명:
  N개의 아파트가 일렬로 늘어서 있습니다. 이 아파트들 중 일부 옥상에는 이미 4G 기지국이 설치되어 있습니다. 
  기지국은 자신의 위치를 기준으로 양쪽으로 w만큼의 전파를 보낼 수 있습니다. 
  즉, x 위치에 설치된 기지국은 [x - w, x + w] 범위의 아파트를 커버합니다.

  주어진 N (총 아파트 수), stations (현재 기지국이 설치된 아파트들의 위치 배열, 오름차순 정렬), 
  그리고 w (기지국의 전파 도달 거리)를 이용하여, 
  모든 아파트에 전파가 도달하도록 새로 설치해야 하는 기지국의 최소 개수를 return 하는 solution 함수를 작성해주세요.

  제한사항:
  - N은 1 이상 200,000,000 이하의 자연수입니다.
  - stations는 1 이상 N 이하의 자연수가 담긴 배열입니다.
  - w는 0 이상 10,000 이하의 자연수입니다.
  - stations는 오름차순으로 정렬되어 있습니다.
*/

function solution(n: number, stations: number[], w: number): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(11, [4, 11], 1)} `); // 3
console.log(`예제 2: ${solution(16, [9], 2)} `); // 3
