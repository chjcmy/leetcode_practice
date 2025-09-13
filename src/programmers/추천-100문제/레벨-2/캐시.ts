/*
 * 프로그래머스 - 캐시
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680
 * Level 2
 */

/*
  문제 설명:
  지도 개발팀에서 도시 이름 검색 시 데이터베이스에서 맛집 게시물을 가져오는 서비스의 성능 개선을 위해 DB 캐시를 적용하려 합니다.
  DB 캐시를 적용할 때 캐시 히트(cache hit)일 경우 실행 시간은 1, 캐시 미스(cache miss)일 경우 실행 시간은 5입니다.

  캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용합니다.

  캐시의 크기를 나타내는 정수 cacheSize와 도시 이름으로 이루어진 문자열 배열 cities가 주어질 때, 
  입력된 도시 이름 배열을 순서대로 처리할 때의 "총 실행시간"을 return 하도록 solution 함수를 완성해주세요.

  제한 사항:
  - cacheSize: 0 이상 30 이하의 정수
  - cities: 도시 이름으로 이루어진 문자열 배열 (최대 100,000개)
  - 도시 이름은 영문자로 구성되며, 공백, 숫자, 특수문자 등은 포함하지 않습니다.
  - 도시 이름은 대소문자를 구분하지 않습니다 (예: "Seoul"과 "seoul"은 동일하게 처리).
  - 도시 이름은 최대 20자로 이루어져 있습니다.
*/

function solution(cacheSize: number, cities: string[]): number {
  let answer = 0;
  // 문제 풀이
  return answer;
}

// 예제 테스트
console.log(`예제 1: ${solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])} `); // 50
console.log(`예제 2: ${solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])} `); // 21
console.log(`예제 3: ${solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])} `); // 60
