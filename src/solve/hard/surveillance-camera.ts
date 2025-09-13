/*
 * 프로그래머스 - 단속카메라
 * https://school.programmers.co.kr/learn/courses/30/lessons/42884
 * Level 3
 */

/*
  문제 설명:
  고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 
  모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 작성해주세요.

  routes에는 차량의 진입 지점과 진출 지점이 담겨있으며, 
  routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, 
  routes[i][1]에는 i번째 차량이 고속도로에서 진출한 지점이 적혀 있습니다.

  제한사항:
  - routes는 1 이상 10,000 이하의 차량이 있습니다.
  - routes[i][0]와 routes[i][1]는 -30,000 이상 30,000 이하입니다.
*/

function solution(routes: number[][]): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([[-20,-15], [-14,-5], [-18,-13], [-5,-3]])} `); // 2
