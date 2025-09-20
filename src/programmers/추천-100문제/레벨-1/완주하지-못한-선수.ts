/*
 * 프로그래머스 - 완주하지 못한 선수
 * https://school.programmers.co.kr/learn/courses/30/lessons/42576
 * Level 1
 */

/*
  문제 설명:
  수많은 마라톤 선수들이 마라톤에 참여했습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주했습니다.

  마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
  완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

  제한사항:
  - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
  - completion 배열의 길이는 participant 배열의 길이보다 1 작습니다.
  - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
  - 참가자 중에는 동명이인(같은 이름의 사람)이 있을 수 있습니다.
*/

function solution(participant: string[], completion: string[]): string {
const map = new Map<string, number>();
  // 문제 풀이
    for (const name of participant) {
        map.set(name, (map.get(name) || 0) + 1);
    }

    for (const name of completion) {
        map.set(name, map.get(name)! - 1);
    }

    for (const [name, count] of map) {
        if (count === 1) {
            return name;
        }
    }
    
    return "";
}

// 예제 테스트
console.log(`예제 1: ${solution(["leo", "kiki", "eden"], ["eden", "kiki"])} `); // "leo"
console.log(`예제 2: ${solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])} `); // "vinko"
console.log(`예제 3: ${solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])} `); // "mislav"
