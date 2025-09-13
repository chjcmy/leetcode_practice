/*
 * 프로그래머스 - 기능개발
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 * Level 2
 */

/*
  문제 설명:
  프로그래머스 팀은 기능 개선 작업을 진행하고 있습니다. 각 기능은 진도가 100%에 도달해야 서비스에 배포될 수 있습니다.

  각 기능의 개발 속도는 서로 다를 수 있으며, 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발이 완료될 수도 있습니다. 
  이 경우, 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

  먼저 배포되어야 하는 순서대로 작업의 진도가 담긴 정수 배열 progresses와 
  각 작업의 개발 속도(하루에 진행되는 진도)가 담긴 정수 배열 speeds가 매개변수로 주어질 때, 
  각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 작성해주세요.

  제한 사항:
  - 작업의 개수(progresses, speeds 배열의 길이)는 100개 이하입니다.
  - 작업 진도는 100 미만의 자연수입니다.
  - 작업 속도는 100 이하의 자연수입니다.
*/

function solution(progresses: number[], speeds: number[]): number[] {
  let answer: number[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([93, 30, 55], [1, 30, 5])} `); // [2, 1]
console.log(`예제 2: ${solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])} `); // [1, 3, 2]
