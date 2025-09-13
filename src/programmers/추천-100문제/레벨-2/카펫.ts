/*
 * 프로그래머스 - 카펫
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * Level 2
 */

/*
  문제 설명:
  Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

  Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 
  카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - brown은 8 이상 5,000 이하인 자연수입니다.
  - yellow는 1 이상 2,000,000 이하인 자연수입니다.
  - 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
*/

function solution(brown: number, yellow: number): number[] {
  let answer: number[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(10, 2)} `); // [4, 3]
console.log(`예제 2: ${solution(8, 1)} `); // [3, 3]
console.log(`예제 3: ${solution(24, 24)} `); // [8, 6]
