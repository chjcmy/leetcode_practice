/*
 * 프로그래머스 - 최고의 집합
 * https://school.programmers.co.kr/learn/courses/30/lessons/12938
 * Level 3
 */

/*
  문제 설명:
  자연수 n개로 이루어진 중복 집합(multi set, 편의상 이후에는 "집합"으로 통칭) 중에 다음 두 조건을 만족하는 집합을 "최고의 집합"이라고 합니다.

  1. 각 원소의 합이 s가 되는 집합.
  2. 위 조건을 만족하면서 각 원소의 곱이 최대가 되는 집합.

  집합의 원소의 개수 n과 모든 원소들의 합 s가 매개변수로 주어질 때, 최고의 집합을 return 하는 solution 함수를 완성해주세요.

  제한사항:
  - 최고의 집합은 오름차순으로 정렬된 1차원 배열(list, vector)로 return 해주세요.
  - 만약 최고의 집합이 존재하지 않는 경우에 크기가 1인 1차원 배열(list, vector)에 -1을 채워서 return 해주세요.
  - 자연수의 개수 n은 1 이상 10,000 이하의 자연수입니다.
  - 모든 원소들의 합 s는 1 이상, 100,000,000 이하의 자연수입니다.
*/

function solution(n: number, s: number): number[] {
  let answer: number[] = [];
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(2, 9)} `); // [4, 5]
console.log(`예제 2: ${solution(2, 1)} `); // [-1]
console.log(`예제 3: ${solution(2, 8)} `); // [4, 4]
