/*
 * 프로그래머스 - 구명보트
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 * Level 2
 */

/*
  문제 설명:
  무인도에 갇힌 사람들을 구명보트를 이용하여 구출해야 합니다. 
  구명보트는 한 번에 최대 2명까지 탑승할 수 있으며, 무게 제한이 있습니다.

  모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - people: 사람들의 몸무게를 담은 배열 (또는 벡터)
  - limit: 구명보트의 무게 제한
  - 무인도에 갇힌 사람의 수는 1명 이상 50,000명 이하입니다.
  - 각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
  - 구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
  - 구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로, 사람들을 구출할 수 없는 경우는 없습니다.
*/

function solution(people: number[], limit: number): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([70, 50, 80, 50], 100)} `); // 3
console.log(`예제 2: ${solution([70, 80, 50], 100)} `); // 3
