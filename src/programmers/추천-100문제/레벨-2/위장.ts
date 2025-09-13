/*
 * 프로그래머스 - 위장
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 * Level 2
 */

/*
  문제 설명:
  스파이가 가진 의상들이 [의상의 이름, 의상의 종류] 형태로 담긴 2차원 배열 clothes가 주어질 때, 
  스파이는 매일 다른 옷 조합을 입어 위장해야 합니다. 
  이때 서로 다른 옷의 조합의 총 개수를 계산하여 return 하도록 solution 함수를 작성해주세요.

  제한 사항:
  - clothes 배열의 각 행은 [의상의 이름, 의상의 종류]로 구성됩니다.
  - 스파이가 가진 의상의 수는 1개 이상 30개 이하입니다.
  - 같은 이름을 가진 의상은 없습니다.
  - 모든 의상의 종류는 문자열로 주어지며, 중복되는 종류는 없습니다.
  - 스파이는 하루에 최소 한 개의 의상은 입어야 합니다.
*/

function solution(clothes: string[][]): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])} `); // 5
console.log(`예제 2: ${solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])} `); // 3
